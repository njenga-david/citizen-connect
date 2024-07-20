GO

CREATE OR ALTER PROCEDURE getUser(
    @id VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM Users 
    WHERE userId = @id
END

