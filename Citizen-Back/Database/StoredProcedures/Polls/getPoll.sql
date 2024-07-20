GO

CREATE OR ALTER PROCEDURE getPoll(
    @pollsId VARCHAR(255),
    @userId VARCHAR(255),
    @pollQuestion VARCHAR(255),
    @pollOption VARCHAR(255),
    @pollStatus VARCHAR(255)
)

AS
BEGIN
    SELECT * FROM Polls 
    WHERE pollsId = @pollsId
END
