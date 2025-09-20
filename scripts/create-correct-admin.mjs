import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('👤 Creating correct admin user...');

  const email = 'admin@willriseu.com'; // Exact email user is trying
  const password = 'W!llR!se$';
  const name = 'System Admin';

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create or update admin user
  const user = await prisma.user.upsert({
    where: { email },
    update: {
      password: hashedPassword,
      name,
      role: 'ADMIN'
    },
    create: {
      email,
      password: hashedPassword,
      name,
      role: 'ADMIN'
    }
  });

  console.log('✅ Admin user created/updated successfully!');
  console.log('📧 Email:', email);
  console.log('🔑 Password: W!llR!se$');
  console.log('👑 Role: ADMIN');
}

main()
  .catch((e) => {
    console.error('❌ Error creating admin user:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
