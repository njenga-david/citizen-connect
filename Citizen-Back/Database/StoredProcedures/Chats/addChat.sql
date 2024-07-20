

CREATE OR ALTER PROCEDURE addChat(
    @chatsId VARCHAR(255),
    @userId VARCHAR(255),
    @chatMessage VARCHAR(255)
)

AS
BEGIN

    INSERT INTO Chats(chatsId, userId, chatMessage)
    VALUES(@chatsId, @userId, @chatMessage)

END