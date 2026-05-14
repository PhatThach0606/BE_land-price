import { PrismaClient } from '../src/modules-system/prisma/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const email = 'thanhphat127c@gmail.com';
  const password = '661225@Thy';

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingAdmin = await prisma.users.findUnique({
    where: { email },
  });

  if (!existingAdmin) {
    await prisma.users.create({
      data: {
        full_name: 'Thạch Hoàng Thành Phát',
        email: 'thanhphat127c@gmail.com',
        phone: '0948646214',
        password: hashedPassword,
        role: 'ADMIN',
      },
    });

    console.log('✅ Admin created');
    console.log(process.env.DATABASE_URL);
  } else {
    console.log('⚠️ Admin already exists');
    console.log(process.env.DATABASE_URL);
  }
}

main()
  .catch((e) => {
    console.error(e);
    console.log(process.env.DATABASE_URL);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
