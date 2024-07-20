
GO

CREATE OR ALTER PROCEDURE updatePoll(
    @pollsId VARCHAR(255), 
    @userId VARCHAR(255),
    @pollQuestion VARCHAR(255), 
    @pollOption VARCHAR(255),
    @pollStatus VARCHAR(255)
)
AS
BEGIN
    UPDATE Polls 
    SET
        pollQuestion = @pollQuestion,
        pollOption = @pollOption,
        pollStatus = @pollStatus
    WHERE 
        pollsId = @pollsId
END
