-- CreateIndex
CREATE FULLTEXT INDEX `books_title_idx` ON `books`(`title`);

-- CreateIndex
CREATE FULLTEXT INDEX `chapters_title_idx` ON `chapters`(`title`);
