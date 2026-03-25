import { Router } from "express";
import { UserController } from "../controllers/user.controller.js"


const userRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id"
}

const router = Router()

router.get(userRoute.getAll, UserController.getAll)
router.get(userRoute.getById, UserController.get)
router.post(userRoute.create, UserController.create)
router.put(userRoute.update, UserController.update)
router.delete(userRoute.delete, UserController.delete)

export {router}