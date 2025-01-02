import User from './models/user.js';
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config();

const seedUsers = async () => {
  
  const adminUser = new User({
    name: 'Admin User',
    email: 'admin@example.com',
    password: "admin123",
    role: 'admin',
    gender:'Male'
  });

  const normalUser = new User({
    name: 'Normal User',
    email: 'user@example.com',
    password: "user123",
    role: 'user', 
    gender:'Male'
  });

  try {
    await adminUser.save();
    await normalUser.save();
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

const seedDatabase = async () => {
  await connectDB();
  await seedUsers();
  process.exit();
};

seedDatabase();
