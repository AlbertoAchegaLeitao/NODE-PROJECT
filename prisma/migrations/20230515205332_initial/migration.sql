/*
  Warnings:

  - You are about to drop the column `clientId` on the `bill` table. All the data in the column will be lost.
  - You are about to drop the column `employeeId` on the `bill` table. All the data in the column will be lost.
  - You are about to drop the column `itemId` on the `bill` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleId` on the `bill` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `bill` DROP FOREIGN KEY `Bill_clientId_fkey`;

-- DropForeignKey
ALTER TABLE `bill` DROP FOREIGN KEY `Bill_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `bill` DROP FOREIGN KEY `Bill_itemId_fkey`;

-- DropForeignKey
ALTER TABLE `bill` DROP FOREIGN KEY `Bill_vehicleId_fkey`;

-- AlterTable
ALTER TABLE `bill` DROP COLUMN `clientId`,
    DROP COLUMN `employeeId`,
    DROP COLUMN `itemId`,
    DROP COLUMN `vehicleId`;

-- CreateTable
CREATE TABLE `_BillToVehicle` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_BillToVehicle_AB_unique`(`A`, `B`),
    INDEX `_BillToVehicle_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BillToItem` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_BillToItem_AB_unique`(`A`, `B`),
    INDEX `_BillToItem_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BillToClient` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_BillToClient_AB_unique`(`A`, `B`),
    INDEX `_BillToClient_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BillToEmployee` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_BillToEmployee_AB_unique`(`A`, `B`),
    INDEX `_BillToEmployee_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_BillToVehicle` ADD CONSTRAINT `_BillToVehicle_A_fkey` FOREIGN KEY (`A`) REFERENCES `Bill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BillToVehicle` ADD CONSTRAINT `_BillToVehicle_B_fkey` FOREIGN KEY (`B`) REFERENCES `Vehicle`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BillToItem` ADD CONSTRAINT `_BillToItem_A_fkey` FOREIGN KEY (`A`) REFERENCES `Bill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BillToItem` ADD CONSTRAINT `_BillToItem_B_fkey` FOREIGN KEY (`B`) REFERENCES `Item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BillToClient` ADD CONSTRAINT `_BillToClient_A_fkey` FOREIGN KEY (`A`) REFERENCES `Bill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BillToClient` ADD CONSTRAINT `_BillToClient_B_fkey` FOREIGN KEY (`B`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BillToEmployee` ADD CONSTRAINT `_BillToEmployee_A_fkey` FOREIGN KEY (`A`) REFERENCES `Bill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BillToEmployee` ADD CONSTRAINT `_BillToEmployee_B_fkey` FOREIGN KEY (`B`) REFERENCES `Employee`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
