// import { PrismaClient } from "../../prisma/generated/prisma/client";

// Singleton pattern for PrismaClient
// to prevent multiple instances in development
// and to ensure a single connection pool
// This is important for performance and to avoid connection limits

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma = globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

import { PrismaClient } from "../../prisma/generated/prisma/client";

// Singleton pattern for PrismaClient
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Sample function to fetch tickets

export const getTickets = async () => {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: { createdAt: "desc" },
    });
    return tickets;
  } catch (error) {
    // Type guard to check if 'error' is instance of Error
    if (error instanceof Error) {
      console.error("Failed to fetch tickets:", error.message);
      throw new Error("Could not retrieve tickets");
    }

    // Handle unknown error types gracefully
    console.error("An unexpected error occurred:", error);
    throw new Error("An unexpected error occurred");
  }
};
