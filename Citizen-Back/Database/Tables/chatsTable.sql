USE Connect;
GO

CREATE TABLE Chats (
    chatsId VARCHAR(255) NOT NULL,
    userId VARCHAR(255) NOT NULL,
    chatMessage VARCHAR(255) NOT NULL,
    isDeleted INT DEFAULT 0,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);
