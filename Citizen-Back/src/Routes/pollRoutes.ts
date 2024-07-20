import { Router } from "express";
import { registerUser,loginUser, deleteUser, getUsers, getUser} from "../Controllers/authController";
import { verifyToken } from "../middlewares";
import { addView, deleteView, getView, getViews, updateView } from "../Controllers/viewContoller";
import { addPoll, deletePoll, getPoll, getPolls, updatePoll } from "../Controllers/pollControllers";


const pollRoutes = Router()

pollRoutes.post("", addPoll)
pollRoutes.get("", getPolls)
pollRoutes.get("/:id", getPoll)
pollRoutes.delete("/:id", deletePoll)
pollRoutes.patch("/:id", updatePoll)


export default pollRoutes