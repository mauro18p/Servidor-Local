import { Router } from "express";
import { create } from "node:domain";
import { serviceController } from "../controllers/servico.controller.js";


const userRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id"
}

const router = Router()

router.get(userRoute.getAll, serviceController.getAll)
router.get(userRoute.getById, serviceController.get)
router.post(userRoute.create, serviceController.create)
router.put(userRoute.update, serviceController.update)
router.delete(userRoute.delete, serviceController.delete)

export {router}