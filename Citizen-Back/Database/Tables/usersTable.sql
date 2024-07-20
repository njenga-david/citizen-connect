USE Connect;
GO

CREATE TABLE Users (
    userId VARCHAR(255) PRIMARY KEY,
    userImg VARCHAR(255) NOT NULL,
    userName VARCHAR(255) NOT NULL,
    userEmail VARCHAR(255) NOT NULL UNIQUE,
    upassword VARCHAR(255) NOT NULL,
    roleName VARCHAR(255) NOT NULL,
    isDeleted INT DEFAULT 0,
    isEmailSent INT DEFAULT 0,
    FOREIGN KEY (roleName) REFERENCES Roles(roleName)
);
SELECT * FROM Users;
