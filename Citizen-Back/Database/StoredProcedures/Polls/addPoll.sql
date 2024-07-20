

CREATE OR ALTER PROCEDURE addPoll(
    @pollsId VARCHAR(255),
    @userId VARCHAR(255),
    @pollQuestion VARCHAR(255),
    @pollOption VARCHAR(255),
    @pollStatus VARCHAR(255)
)

AS
BEGIN

    INSERT INTO Polls(pollsId, userId, pollQuestion, pollOption, pollStatus)
    VALUES(@pollsId, @userId, @pollQuestion, @pollOption, @pollStatus)

END