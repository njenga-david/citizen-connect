

GO

CREATE OR ALTER PROCEDURE registerUser( 
     @userId VARCHAR(255),
    @userImg VARCHAR(255),
    @userName VARCHAR(255),
    @userEmail VARCHAR(255),
    @roleName VARCHAR(255),
    @upassword VARCHAR(255)
)

AS 
BEGIN


INSERT INTO Users(userId,userImg, userName, userEmail, roleName, upassword)
VALUES(@userId, @userImg, @userName, @userEmail, @roleName, @upassword)

END