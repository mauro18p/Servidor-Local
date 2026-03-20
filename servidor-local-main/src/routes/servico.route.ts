import { Router } from "express"
import { serviceController } from "../controllers/servico.controller.js"


const ServiceRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id"
}

const router = Router()

router.get(ServiceRoute.getAll, serviceController.getAll)
router.get(ServiceRoute.getById, serviceController.get)
router.post(ServiceRoute.create, serviceController.create)
router.put(ServiceRoute.update, serviceController.update)
router.delete(ServiceRoute.delete, serviceController.delete)

export {router}
