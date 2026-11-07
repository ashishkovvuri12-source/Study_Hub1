# 📚 StudyHub - Fullstack MERN & TypeScript Learning Platform

A complete full-stack web application for learning materials, notes, and exam practice questions built with **Node.js**, **TypeScript**, **Express.js**, **React.js**, and **MongoDB**.

---

## 🚀 Tech Stack

- **Backend**: Node.js & Express.js with TypeScript
- **Database**: MongoDB (via Mongoose ODM) with schemas for Users, Materials, Chapters, and Questions
- **Authentication**: JWT (JSON Web Tokens) with bcrypt password hashing
- **Frontend**: React.js 18 with TypeScript & Vite, React Router 6, and custom modern responsive styling
- **Architecture**: REST API backend (`/api/*`) decoupled with a React SPA client (`client/`)

---

## 📁 Project Structure

```
fsdnew/
├── package.json                 # Root orchestrator scripts
├── env.example                  # Environment variables template
├── server/                      # Node.js + Express + TypeScript + MongoDB Backend
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── config/
│       │   └── db.ts            # MongoDB connection handler
│       ├── data/
│       │   └── materialsData.ts # Complete initial materials & questions
│       ├── models/
│       │   ├── User.ts          # User schema (student & admin roles, bcrypt)
│       │   └── Material.ts      # Subject, Chapter & Question schema
│       ├── controllers/
│       │   ├── authController.ts     # Signup, Login, Me
│       │   ├── materialController.ts # Get subjects, chapters, notes, add content
│       │   └── adminController.ts    # Dashboard metrics, user directory
│       ├── routes/
│       │   ├── authRoutes.ts
│       │   ├── materialRoutes.ts
│       │   └── adminRoutes.ts
│       ├── middleware/
│       │   ├── authMiddleware.ts # JWT verification & Admin guards
│       │   └── errorMiddleware.ts
│       ├── seed.ts              # Database seeder (creates users & all 22 chapters)
│       └── index.ts             # Express application entry & static server
│
├── client/                      # React.js + TypeScript + Vite Frontend
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── index.html
│   └── src/
│       ├── components/
│       │   ├── Navbar.tsx       # Header with branding, user info & theme toggle
│       │   └── ProtectedRoute.tsx # Route guards for auth & admin
│       ├── context/
│       │   ├── AuthContext.tsx  # Auth state, login/signup/logout
│       │   └── ThemeContext.tsx # Dark/Light theme manager
│       ├── services/
│       │   └── api.ts           # Typed API client for backend
│       ├── pages/
│       │   ├── AuthPage.tsx     # Sign In and Sign Up (Student & Admin)
│       │   ├── SubjectsPage.tsx # Dynamic subjects grid from MongoDB
│       │   ├── SubjectDetailPage.tsx # Subject questions with search & tags
│       │   ├── NotesPage.tsx    # Chapter notes, YouTube tutorial & pagination
│       │   └── AdminDashboardPage.tsx # Stats, user list, add chapter modal
│       ├── types/
│       │   └── index.ts         # TypeScript definitions
│       ├── App.tsx              # Router setup
│       ├── main.tsx
│       └── styles.css
│
└── [Legacy static HTML files]   # Enhanced with dynamic backend integration
    ├── index.html               # Updated with Sign Up mode & backend API calls
    ├── subjects.html            # Connected to live MongoDB stats
    ├── notes.html               # Connected to live MongoDB notes
    └── admin.html               # Connected to live MongoDB users & stats
```

---

## ⚡ Quick Start Instructions

### 1. Install Dependencies

In your terminal, navigate to this project folder and run:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Return to root
cd ..
```

*(Alternatively, run `npm run install:all` from the root folder)*

---

### 2. Configure MongoDB & Environment

The backend defaults to:
- **Port**: `5000`
- **MongoDB URI**: `mongodb://127.0.0.1:27017/studyhub`
- **JWT Secret**: `studyhub_super_secret_jwt_key_2024`

If you use **MongoDB Atlas** or want custom variables, create a `.env` file in the root directory (refer to `env.example`):

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/studyhub?retryWrites=true&w=majority
JWT_SECRET=your_custom_jwt_secret_key
```

---

### 3. Start the Application

You can start the backend and frontend together:

#### Start Backend (API Server):
```bash
cd server
npm run dev
```
The server will connect to MongoDB, **auto-seed default users and all 4 subjects (22 chapters & 110 questions)** if the database is empty, and listen at `http://localhost:5000`.

#### Start Frontend (React Client):
In a second terminal window:
```bash
cd client
npm run dev
```
The React development server runs at `http://localhost:5173`. Open this URL in your browser!

---

## 🔐 Default Demo Accounts

If you want to test immediately without signing up:

| Role | Username | Password |
|---|---|---|
| **Student** | `student` | `study123` |
| **Student** | `john` | `john123` |
| **Student** | `priya` | `priya123` |
| **Admin** | `admin` | `admin@123` |
| **Admin** | `faculty` | `faculty123` |

You can also click **"Sign Up"** on the auth page to create any new student or admin account!

---

## 📡 REST API Documentation

### Authentication (`/api/auth`)
- `POST /api/auth/signup` - Register a new user (`username`, `name`, `email`, `password`, `role`)
- `POST /api/auth/login` - Sign in (`username`, `password`, `role`) -> returns JWT token & user profile
- `GET /api/auth/me` - Get authenticated user profile (Bearer token)

### Materials (`/api/materials`)
- `GET /api/materials` - List all subjects with chapter and question counts
- `GET /api/materials/:subjectId` - Get full details, chapters, and questions for a subject
- `GET /api/materials/:subjectId/chapters/:chapterNumber` - Get full chapter notes, video link, and pagination
- `POST /api/materials/:subjectId/chapters` - *(Admin only)* Add a new chapter to a subject
- `POST /api/materials/:subjectId/chapters/:chapterNumber/questions` - *(Admin only)* Add a question to a chapter

### Admin (`/api/admin`)
- `GET /api/admin/stats` - *(Admin only)* Get overall statistics (subjects, chapters, questions, users)
- `GET /api/admin/users` - *(Admin only)* List all registered users stored in MongoDB

