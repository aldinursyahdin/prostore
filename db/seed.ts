import 'dotenv/config';
import sampleData from './sample-data';
import { prisma } from '@/db/prisma';

async function main() {
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });

  console.log('Database seeded successfully!');
}

main().catch((error) => {
  console.error('Error seeding database:', error);
  process.exit(1);
});
