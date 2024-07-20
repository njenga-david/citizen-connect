import { Router } from "express";
import { verifyToken } from "../middlewares";
import { addView, deleteView, getView, getViews, updateView } from "../Controllers/viewContoller";
import { addIncident, deleteIncident, getIncident, getIncidents, updateIncident } from "../Controllers/incidentController";


const incidentRoutes = Router()

incidentRoutes.post("", addIncident)
incidentRoutes.get("", getIncidents)
incidentRoutes.get("/:id", getIncident)
incidentRoutes.delete("/:id", deleteIncident)
incidentRoutes.patch("/:id", updateIncident)


export default incidentRoutes