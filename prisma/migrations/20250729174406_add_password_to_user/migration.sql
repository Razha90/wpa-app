/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_username_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    DROP COLUMN `username`,
    ADD COLUMN `fullname` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `id` VARCHAR(191) NOT NULL,
    `token` INTEGER NOT NULL,
    `expiredAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `VerificationToken` ADD CONSTRAINT `VerificationToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
