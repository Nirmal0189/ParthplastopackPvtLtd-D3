import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    await connectDB();
    
    // Check if the admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@parthplastopack.com' });
    if (existingAdmin) {
      return NextResponse.json({ 
        message: 'Admin already exists!',
        email: 'admin@parthplastopack.com',
        password: 'You already set a password for this (or it is admin123)'
      });
    }

    // Create the admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const newAdmin = await User.create({
      name: 'Super Admin',
      email: 'admin@parthplastopack.com',
      password: hashedPassword,
      role: 'SUPER_ADMIN',
      isActive: true
    });

    return NextResponse.json({ 
      message: 'Admin created successfully! You can now log in.', 
      email: 'admin@parthplastopack.com', 
      password: 'admin123' 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
