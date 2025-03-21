import { members, PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const members: members[] = await prisma.members.findMany();

  for(let i = 0; i < 15; i++){
    await prisma.payments.create({
      data: {
        amount: Number.parseInt(faker.finance.amount()),
        paid_at: faker.date.past(),
        members: {
          connect: {
            id: members[Math.floor(Math.random() * members.length)].id
          }
        }
      }
    })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })