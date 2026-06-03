import { prisma } from "./lib/prisma";

async function main() {
  const user = await prisma.user.createMany({
    data: [
      {
        name: "Alice",
        email: "alice@gmail.com",
      },
      {
        name: "Ankit",
        email: "ankit@gmail.com",
      },
      {
        name: "Rupesh",
        email: "rupesh@gmail.com",
      },
      {
        name: "Rajesh",
        email: "rajesh@gmail.com",
      },
      {
        name: "Neha",
        email: "neha@gmail.com",
      },
    ],
    skipDuplicates: true,
  });
  console.log("Created users count:", user.count);

  const data = await prisma.user.findMany();
  console.log("Users:", data);
}

main();
