/*
  Warnings:

  - You are about to drop the column `company` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `contactNumber` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "company",
DROP COLUMN "contactNumber",
ADD COLUMN     "companyAuthorityDesignation" TEXT,
ADD COLUMN     "companyAuthorityEmail" TEXT,
ADD COLUMN     "companyAuthorityName" TEXT,
ADD COLUMN     "companyName" TEXT;

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "companyName" TEXT,
    "companyAuthorityName" TEXT,
    "companyAuthorityContact" TEXT,
    "companyAuthorityEmail" TEXT,
    "companyAuthorityDesignation" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
