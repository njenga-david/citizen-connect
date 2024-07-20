import { Router } from "express";
import { addView, deleteView, getView, getViews, updateView } from "../Controllers/viewContoller"

const viewRoutes = Router();

viewRoutes.post("", addView);
viewRoutes.get("", getViews);
viewRoutes.get("/:id", getView);
viewRoutes.delete("/:id", deleteView);
viewRoutes.patch("/:id", updateView);

export default viewRoutes;
