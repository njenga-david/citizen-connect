USE Connect;
GO

CREATE TABLE Polls (
    pollsId VARCHAR(255) NOT NULL,
    userId VARCHAR(255) NOT NULL,
    pollQuestion VARCHAR(255) NOT NULL,
    pollOption VARCHAR(255) NOT NULL,
    pollStatus VARCHAR(255) NOT NULL,
    isDeleted INT DEFAULT 0,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);
