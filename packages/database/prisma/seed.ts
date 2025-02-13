import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create some test posts
  await prisma.post.createMany({
    data: [
      {
        title: 'First Post',
        content: 'This is a test post to demonstrate the database setup.',
        published: true,
      },
      {
        title: 'Draft Post',
        content: 'This is a draft post.',
        published: false,
      },
      {
        title: 'Hello World',
        content: 'Welcome to the application!',
        published: true,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });