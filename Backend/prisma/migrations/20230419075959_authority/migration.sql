/*
  Warnings:

  - You are about to drop the `authorityContact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "authorityContact";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "AuthorityContact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);
