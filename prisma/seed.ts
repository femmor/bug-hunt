import { PrismaClient } from "./generated/prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1 from db",
    content:
      "This is the content of ticket 1. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 2 from db",
    content:
      "This is the content of ticket 2. It has a lot of information and details about the ticket. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    status: "CLOSED" as const,
  },
  {
    title: "Ticket 3 from db",
    content:
      "This is the content of ticket 3. It has a lot of information and details about the ticket. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: "IN_PROGRESS" as const,
  },
];

const seed = async () => {
  try {
    // Using async/await with for..of loop
    // for (const ticket of tickets) {
    //     await prisma.ticket.create({
    //         data: {
    //             id: ticket.id,
    //             title: ticket.title,
    //             content: ticket.content,
    //             status: ticket.status
    //         },
    //     });
    // }

    // Using promise and Promise.all
    // const promise = tickets.map(ticket => prisma.ticket.create({
    //     data: ticket
    // }))

    // await Promise.all(promise);

    const t0 = performance.now();
    // Delete all existing tickets
    await prisma.ticket.deleteMany();
    // Using prisma.ticket.createMany
    await prisma.ticket.createMany({
      data: tickets,
      skipDuplicates: true,
    });
    const t1 = performance.now();

    console.log("Seeding completed successfully!");
    console.log(`Time taken to seed: ${t1 - t0}ms`);
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
