USE Connect;
GO

CREATE TABLE Incident (
    incidentId VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255) NOT NULL,
    incidentImg VARCHAR(255) NOT NULL,
    incidentDesc VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT GETDATE(),   
    isDeleted INT DEFAULT 0,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);
SELECT * FROM Incident;
