import { Router } from "express";
import { UserController } from "../controllers/user.controller.js"
import authMiddleware, { authorize } from "../security/auth.middleware.js";
import { Role } from "../utils/types.js";


const userRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id",
    login:"/login"
}

const UserRouter = Router()

UserRouter.post(userRoute.login, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), UserController.login)
UserRouter.post(userRoute.create, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), UserController.create)

UserRouter.use(authMiddleware)

UserRouter.get(userRoute.getAll, authorize([Role.ADMIN]), UserController.getAll)
UserRouter.get(userRoute.getById, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), UserController.get)
UserRouter.put(userRoute.update, authorize([Role.ADMIN, Role.CLIENTE, Role.EMPRESA, Role.PRESTADOR]), UserController.update)
UserRouter.delete(userRoute.delete, authorize([Role.ADMIN]), UserController.delete)
// criar rota reset password
export {UserRouter}