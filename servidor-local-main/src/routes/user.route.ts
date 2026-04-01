import { Router } from "express";
import { UserController } from "../controllers/user.controller.js"
import authMiddleware from "../security/auth.middleware.js";


const userRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id",
    login:"/login"
}

const UserRouter = Router()

UserRouter.get(userRoute.getAll, authMiddleware, UserController.getAll)
UserRouter.get(userRoute.getById, UserController.get)
UserRouter.post(userRoute.create, UserController.create)
UserRouter.put(userRoute.update, UserController.update)
UserRouter.delete(userRoute.delete, UserController.delete)
UserRouter.post(userRoute.login, UserController.login)

export {UserRouter}