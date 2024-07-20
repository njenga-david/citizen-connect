import { Router } from "express";
import { registerUser,loginUser, deleteUser, getUsers, getUser} from "../Controllers/authController";
import { verifyToken } from "../middlewares";


const authRoutes = Router()

authRoutes.post("/register", registerUser)
authRoutes.post("/login", loginUser)
authRoutes.get("/users", getUsers)
 authRoutes.get("/:id", getUser)
authRoutes.delete("/:id", deleteUser)
// authRoutes.get("", verifyToken, welcomePage)







export default authRoutes