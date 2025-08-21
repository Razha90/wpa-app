// import { PrismaClient } from "@prisma/client";
// const globalForPrisma = globalThis;
// const prisma = globalForPrisma.prisma || new PrismaClient();
// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }
// module.exports = { prisma };

// import { PrismaClient } from '../src/app/generated/prisma'


// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../../prisma/prisma/generated/client";

// const globalForPrisma = globalThis;

// const prisma = globalForPrisma.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// export default prisma
// lib/prisma.js
// import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma || new PrismaClient({ log: ['info'] })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma
