const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const crypto = require('crypto');

const PORT = process.env.PORT || 5000;
const USERS_FILE = path.join(__dirname, 'users.json');
const CUSTOM_VIDEOS_FILE = path.join(__dirname, 'custom_videos.json');

function loadCustomVideos() {
  if (fs.existsSync(CUSTOM_VIDEOS_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CUSTOM_VIDEOS_FILE, 'utf8'));
    } catch (e) {
      return {};
    }
  }
  return {};
}

function saveCustomVideos() {
  const custom = {};
  materials.forEach(m => {
    m.chapters.forEach(c => {
      custom[`${m.subjectId}_ch${c.chapterNumber}`] = c.video || '';
    });
  });
  fs.writeFileSync(CUSTOM_VIDEOS_FILE, JSON.stringify(custom, null, 2), 'utf8');
}

// Initial default users
const defaultUsers = [
  { id: '1', username: 'student', password: 'study123', name: 'Student', email: 'student@studyhub.edu', role: 'student', createdAt: new Date().toISOString() },
  { id: '2', username: 'john', password: 'john123', name: 'John Doe', email: 'john@studyhub.edu', role: 'student', createdAt: new Date().toISOString() },
  { id: '3', username: 'priya', password: 'priya123', name: 'Priya Sharma', email: 'priya@studyhub.edu', role: 'student', createdAt: new Date().toISOString() },
  { id: '4', username: 'admin', password: 'admin@123', name: 'Administrator', email: 'admin@studyhub.edu', role: 'admin', createdAt: new Date().toISOString() },
  { id: '5', username: 'faculty', password: 'faculty123', name: 'Faculty Member', email: 'faculty@studyhub.edu', role: 'admin', createdAt: new Date().toISOString() }
];

// Initialize users file if missing
function loadUsers() {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(defaultUsers, null, 2), 'utf8');
    return defaultUsers;
  }
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  } catch (e) {
    return defaultUsers;
  }
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
}

// Load materials data from notes-data.js or compiled data
function loadMaterials() {
  const notesFile = path.join(__dirname, 'notes-data.js');
  if (fs.existsSync(notesFile)) {
    const content = fs.readFileSync(notesFile, 'utf8');
    const vm = require('vm');
    const sandbox = {};
    vm.runInNewContext(content.replace('const NOTES =', 'var NOTES ='), sandbox);
    const NOTES = sandbox.NOTES;

    const meta = {
      maths: { order: 1, name: 'Mathematics', icon: '📐', tags: ['Algebra', 'Calculus', 'Matrices', 'Probability'], html: 'maths.html' },
      ml: { order: 2, name: 'Machine Learning', icon: '🤖', tags: ['Regression', 'Classification', 'Clustering', 'Neural Nets'], html: 'ml.html' },
      java: { order: 3, name: 'Java Programming', icon: '☕', tags: ['OOP', 'Collections', 'Exception', 'Threads'], html: 'java.html' },
      python: { order: 4, name: 'Python Programming', icon: '🐍', tags: ['Basics', 'Functions', 'File I/O', 'Libraries'], html: 'python.html' }
    };

    const custom = loadCustomVideos();

    return Object.entries(NOTES).map(([key, subj]) => {
      const m = meta[key] || { order: 99, name: subj.name, icon: subj.icon, tags: [] };
      return {
        subjectId: key,
        name: subj.name,
        icon: subj.icon,
        order: m.order,
        tags: m.tags,
        chapters: subj.chapters.map(c => ({
          chapterNumber: c.id,
          title: c.title,
          video: custom[`${key}_ch${c.id}`] !== undefined ? custom[`${key}_ch${c.id}`] : (c.video || ''),
          content: c.content || '',
          questions: []
        }))
      };
    });
  }
  return [];
}

const materials = loadMaterials();

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Handle CORS Preflight
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  // API Routes
  if (pathname === '/api/health') {
    return sendJson(res, 200, { status: 'ok', uptime: process.uptime() });
  }

  // 1. SIGNUP
  if (pathname === '/api/auth/signup' && method === 'POST') {
    const body = await parseBody(req);
    const { username, name, email, password, role } = body;

    if (!username || !password || !name || !email) {
      return sendJson(res, 400, { success: false, message: 'All fields are required.' });
    }

    const users = loadUsers();
    const cleanUsername = username.trim().toLowerCase();
    const cleanEmail = email.trim().toLowerCase();

    if (users.some(u => u.username.toLowerCase() === cleanUsername)) {
      return sendJson(res, 400, { success: false, message: 'Username is already taken.' });
    }
    if (users.some(u => u.email.toLowerCase() === cleanEmail)) {
      return sendJson(res, 400, { success: false, message: 'Email is already registered.' });
    }

    const newUser = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      username: cleanUsername,
      name: name.trim(),
      email: cleanEmail,
      password: password,
      role: role === 'admin' ? 'admin' : 'student',
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    return sendJson(res, 201, {
      success: true,
      message: 'Account created successfully!',
      token: 'jwt_' + Buffer.from(newUser.username).toString('base64'),
      user: {
        id: newUser.id,
        username: newUser.username,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    });
  }

  // 2. LOGIN
  if (pathname === '/api/auth/login' && method === 'POST') {
    const body = await parseBody(req);
    const { username, password, role } = body;

    if (!username || !password) {
      return sendJson(res, 400, { success: false, message: 'Please provide username and password.' });
    }

    const users = loadUsers();
    const cleanUsername = username.trim().toLowerCase();
    const user = users.find(u => u.username.toLowerCase() === cleanUsername && u.password === password);

    if (!user) {
      return sendJson(res, 401, { success: false, message: 'Invalid username or password.' });
    }

    if (role && user.role !== role) {
      return sendJson(res, 403, { success: false, message: `Access denied. Role is: ${user.role}` });
    }

    return sendJson(res, 200, {
      success: true,
      message: 'Logged in successfully',
      token: 'jwt_' + Buffer.from(user.username).toString('base64'),
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  }

  // 3. GET MATERIALS
  if (pathname === '/api/materials' && method === 'GET') {
    const summary = materials.map(m => ({
      subjectId: m.subjectId,
      name: m.name,
      icon: m.icon,
      order: m.order,
      tags: m.tags,
      chapterCount: m.chapters.length,
      questionCount: m.chapters.length * 5,
      importantCount: Math.round(m.chapters.length * 2)
    }));
    return sendJson(res, 200, { success: true, count: summary.length, data: summary });
  }

  // 4. GET SINGLE SUBJECT
  const subMatch = pathname.match(/^\/api\/materials\/([a-zA-Z0-9_-]+)$/);
  if (subMatch && method === 'GET') {
    const subjId = subMatch[1].toLowerCase();
    const mat = materials.find(m => m.subjectId === subjId);
    if (!mat) {
      return sendJson(res, 404, { success: false, message: 'Subject not found.' });
    }
    return sendJson(res, 200, {
      success: true,
      data: mat,
      stats: { totalChapters: mat.chapters.length, totalQuestions: mat.chapters.length * 5, totalImportant: 12 }
    });
  }

  // 5. GET CHAPTER NOTES
  const chMatch = pathname.match(/^\/api\/materials\/([a-zA-Z0-9_-]+)\/chapters\/(\d+)$/);
  if (chMatch && method === 'GET') {
    const subjId = chMatch[1].toLowerCase();
    const chNum = parseInt(chMatch[2], 10);
    const mat = materials.find(m => m.subjectId === subjId);
    if (!mat) {
      return sendJson(res, 404, { success: false, message: 'Subject not found.' });
    }
    const chIdx = mat.chapters.findIndex(c => c.chapterNumber === chNum);
    if (chIdx === -1) {
      return sendJson(res, 404, { success: false, message: 'Chapter not found.' });
    }
    const chapter = mat.chapters[chIdx];
    return sendJson(res, 200, {
      success: true,
      subject: { subjectId: mat.subjectId, name: mat.name, icon: mat.icon },
      chapter,
      pagination: {
        prev: chIdx > 0 ? { chapterNumber: mat.chapters[chIdx - 1].chapterNumber, title: mat.chapters[chIdx - 1].title } : null,
        next: chIdx < mat.chapters.length - 1 ? { chapterNumber: mat.chapters[chIdx + 1].chapterNumber, title: mat.chapters[chIdx + 1].title } : null,
        totalChapters: mat.chapters.length
      }
    });
  }

  // 5.5 UPDATE CHAPTER YOUTUBE VIDEO LINK (Admin)
  const vidMatch = pathname.match(/^\/api\/materials\/([a-zA-Z0-9_-]+)\/chapters\/(\d+)\/video$/);
  if (vidMatch && (method === 'PUT' || method === 'POST')) {
    const subjId = vidMatch[1].toLowerCase();
    const chNum = parseInt(vidMatch[2], 10);
    const body = await parseBody(req);
    const { video } = body;

    const mat = materials.find(m => m.subjectId === subjId);
    if (!mat) {
      return sendJson(res, 404, { success: false, message: 'Subject not found.' });
    }
    const chapter = mat.chapters.find(c => c.chapterNumber === chNum);
    if (!chapter) {
      return sendJson(res, 404, { success: false, message: 'Chapter not found.' });
    }
    chapter.video = (video || '').trim();
    saveCustomVideos();
    return sendJson(res, 200, {
      success: true,
      message: `YouTube video link updated for ${mat.name} Chapter ${chNum}`,
      video: chapter.video
    });
  }

  // 5.6 GET ALL CHAPTERS WITH VIDEOS (for Admin table)
  if (pathname === '/api/materials/all/chapters' && method === 'GET') {
    const allChapters = [];
    materials.forEach(m => {
      m.chapters.forEach(c => {
        allChapters.push({
          subjectId: m.subjectId,
          subjectName: m.name,
          subjectIcon: m.icon,
          chapterNumber: c.chapterNumber,
          title: c.title,
          video: c.video || ''
        });
      });
    });
    return sendJson(res, 200, { success: true, count: allChapters.length, chapters: allChapters });
  }

  // 6. ADMIN STATS
  if (pathname === '/api/admin/stats' && method === 'GET') {
    const users = loadUsers();
    return sendJson(res, 200, {
      success: true,
      stats: {
        totalSubjects: 4,
        totalChapters: 22,
        totalQuestions: 110,
        totalImportant: 46,
        totalNotesPages: 22,
        totalUsers: users.length,
        studentCount: users.filter(u => u.role === 'student').length,
        adminCount: users.filter(u => u.role === 'admin').length
      },
      subjects: materials.map(m => ({
        subjectId: m.subjectId,
        name: m.name,
        icon: m.icon,
        chaptersCount: m.chapters.length,
        questionsCount: m.chapters.length * 5,
        importantCount: 12,
        status: 'Active'
      }))
    });
  }

  // 7. ADMIN USERS
  if (pathname === '/api/admin/users' && method === 'GET') {
    const users = loadUsers().map(({ password, ...rest }) => rest);
    return sendJson(res, 200, { success: true, count: users.length, users });
  }

  // Static File Serving
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeMap = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, {
      'Content-Type': mimeMap[ext] || 'application/octet-stream',
      'Access-Control-Allow-Origin': '*'
    });
    return fs.createReadStream(filePath).pipe(res);
  }

  return sendJson(res, 404, { success: false, message: 'Endpoint not found.' });
});

server.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 StudyHub Backend running on port ${PORT}`);
  console.log(`👉 API Base URL: http://localhost:${PORT}/api`);
  console.log(`👉 Web Interface: http://localhost:${PORT}`);
  console.log(`===============================================`);
});

