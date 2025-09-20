import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('👤 Creating System Admin user...');

  const email = 'admin@willrise.com';
  const password = 'W!llR!se$';
  const name = 'System Admin';

  // Check if admin user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    console.log('🔄 Updating existing admin user...');
    // Update existing user
    const hashedPassword = await bcrypt.hash(password, 12);
    
    await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
        name,
        role: 'ADMIN'
      }
    });
  } else {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin user
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: 'ADMIN'
      }
    });
  }

  console.log('✅ System Admin user ready!');
  console.log('📧 Email:', email);
  console.log('🔑 Password: W!llR!se$');
  console.log('👑 Role: ADMIN');
}

main()
  .catch((e) => {
    console.error('❌ Error creating system admin:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
