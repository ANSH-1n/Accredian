-- CreateTable
CREATE TABLE `Referral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referrerName` VARCHAR(255) NOT NULL,
    `referrerEmail` VARCHAR(255) NOT NULL,
    `refereeName` VARCHAR(255) NOT NULL,
    `refereeEmail` VARCHAR(255) NOT NULL,
    `courseId` INTEGER NOT NULL,
    `courseName` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'PENDING',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
