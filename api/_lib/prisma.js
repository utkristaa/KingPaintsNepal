import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const prisma = globalForPrisma.__kingPaintsPrisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.__kingPaintsPrisma = prisma;
}
