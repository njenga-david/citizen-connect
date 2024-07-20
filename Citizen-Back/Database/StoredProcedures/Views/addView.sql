

CREATE OR ALTER PROCEDURE addView(
    @viewId VARCHAR(255),
    @userId VARCHAR(255),
    @viewContent VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Views(viewId, userId, viewContent)
    VALUES(@viewId, @userId, @viewContent)
END
GO