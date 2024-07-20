CREATE OR ALTER PROCEDURE deleteView (
    @viewId VARCHAR(255)
)
AS
BEGIN
    -- Soft delete by setting isDeleted to 1
    UPDATE Views
    SET isDeleted = 1
    WHERE viewId = @viewId;
END
GO