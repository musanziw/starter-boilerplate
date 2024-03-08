import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as process from 'process';

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [{ name: 'USER' }, { name: 'ADMIN' }],
  });

  await prisma.user.create({
    data: {
      name: 'Wilfried Musanzi',
      email: 'musanziwilfried@gmail.com',
      password: await bcrypt.hash('wilfried20022606', 10),
      roles: {
        connect: {
          id: 2,
        },
      },
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
