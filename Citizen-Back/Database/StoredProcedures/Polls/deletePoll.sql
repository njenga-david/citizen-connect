

GO

CREATE OR ALTER PROCEDURE deletePoll (
    @pollsId VARCHAR(255)
  
)
AS
BEGIN
    --soft delete by setting isDeleted to 1
    UPDATE Polls
    SET isDeleted = 1
    WHERE pollsId = @pollsId;
END
