USE Connect;
GO

CREATE TABLE Roles (
    roleId VARCHAR(255) PRIMARY KEY,
    roleName VARCHAR(255) NOT NULL UNIQUE
);

-- Insert roles into the Roles table
INSERT INTO Roles (roleId, roleName)
VALUES 
    ('1', 'Admin'),
    ('2', 'Gov-Official'),
    ('3', 'Citizen');

-- Verify the Roles table
SELECT * FROM Roles;
