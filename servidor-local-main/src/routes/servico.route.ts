import { Router } from "express"
import { serviceController } from "../controllers/servico.controller.js"


const ServiceRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id"
}

const ServiceRouter = Router()

ServiceRouter.get(ServiceRoute.getAll, serviceController.getAll)
ServiceRouter.get(ServiceRoute.getById, serviceController.get)
ServiceRouter.post(ServiceRoute.create, serviceController.create)
ServiceRouter.put(ServiceRoute.update, serviceController.update)
ServiceRouter.delete(ServiceRoute.delete, serviceController.delete)

export { ServiceRouter }
