import { Router } from "express";
import { UserController } from "../controllers/user.controller.js"


const userRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id"
}

const UserRouter = Router()

UserRouter.get(userRoute.getAll, UserController.getAll)
UserRouter.get(userRoute.getById, UserController.get)
UserRouter.post(userRoute.create, UserController.create)
UserRouter.put(userRoute.update, UserController.update)
UserRouter.delete(userRoute.delete, UserController.delete)

export {UserRouter}