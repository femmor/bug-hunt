import { PrismaClient } from "../../prisma/generated/prisma/client";

// Singleton pattern for PrismaClient
// to prevent multiple instances in development
// and to ensure a single connection pool
// This is important for performance and to avoid connection limits

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
