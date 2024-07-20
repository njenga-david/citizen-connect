USE Connect;
GO

CREATE TABLE Views (
    viewId VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255) NOT NULL,
    viewContent VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT GETDATE(),   
    isDeleted INT DEFAULT 0,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);
SELECT * FROM Views;
