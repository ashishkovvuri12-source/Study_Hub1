import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import mongoose from 'mongoose';
import { connectDB } from './config/db';
import { User } from './models/User';
import { Material } from './models/Material';
import { initialMaterials } from './data/materialsData';

const defaultUsers = [
  { username: 'student', password: 'study123', name: 'Student', email: 'student@studyhub.edu', role: 'student' as const },
  { username: 'john', password: 'john123', name: 'John Doe', email: 'john@studyhub.edu', role: 'student' as const },
  { username: 'priya', password: 'priya123', name: 'Priya Sharma', email: 'priya@studyhub.edu', role: 'student' as const },
  { username: 'admin', password: 'admin@123', name: 'Administrator', email: 'admin@studyhub.edu', role: 'admin' as const },
  { username: 'faculty', password: 'faculty123', name: 'Faculty Member', email: 'faculty@studyhub.edu', role: 'admin' as const }
];

export const seedDatabase = async (exitOnComplete = false) => {
  try {
    await connectDB();

    console.log('[Seed] Checking existing data...');

    // 1. Seed Users
    for (const u of defaultUsers) {
      const exists = await User.findOne({ username: u.username });
      if (!exists) {
        await User.create(u);
        console.log(`[Seed] Created default user: ${u.username} (${u.role})`);
      }
    }

    // 2. Seed Materials
    const materialCount = await Material.countDocuments();
    if (materialCount === 0) {
      console.log(`[Seed] No materials found. Seeding ${initialMaterials.length} subjects...`);
      for (const mat of initialMaterials) {
        await Material.create(mat);
        console.log(`[Seed] Seeded subject: ${mat.name} (${mat.chapters.length} chapters)`);
      }
      console.log('[Seed] All subjects and questions successfully seeded!');
    } else {
      console.log(`[Seed] Found ${materialCount} subjects already in database. Skipping material seed.`);
    }

    console.log('[Seed] Seeding process complete!');
  } catch (error) {
    console.error('[Seed] Error during seeding:', error);
  } finally {
    if (exitOnComplete) {
      await mongoose.disconnect();
      process.exit(0);
    }
  }
};

if (require.main === module) {
  seedDatabase(true);
}

