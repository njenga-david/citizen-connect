

CREATE OR ALTER PROCEDURE addIncident(
    @incidentId VARCHAR(255),
    @userId VARCHAR(255),
    @incidentImg VARCHAR(255),
    @incidentDesc VARCHAR(255)
)

AS
BEGIN

    INSERT INTO Incident(incidentId,userId, incidentImg, incidentDesc)
    VALUES(@incidentId,@userId, @incidentImg, @incidentDesc)

END