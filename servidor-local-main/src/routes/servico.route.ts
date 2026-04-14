import { Router } from "express"
import { serviceController } from "../controllers/servico.controller.js"
import { authorize } from "../security/auth.middleware.js"
import { Role } from "../utils/types.js"


const ServiceRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id",
    allDetailed:"/all-detailed"
}

const ServiceRouter = Router()

ServiceRouter.post(ServiceRoute.create, authorize([Role.ADMIN]), serviceController.create)
ServiceRouter.get(ServiceRoute.getAll, authorize([Role.ADMIN, Role.CLIENTE, Role.PRESTADOR, Role.EMPRESA]), serviceController.getAll)
ServiceRouter.get(ServiceRoute.getById, authorize([Role.ADMIN]), serviceController.get)
ServiceRouter.put(ServiceRoute.update, authorize([Role.ADMIN]), serviceController.update)
ServiceRouter.delete(ServiceRoute.delete, authorize([Role.ADMIN]), serviceController.delete)
ServiceRouter.get(ServiceRoute.allDetailed, authorize([Role.ADMIN]),serviceController.getAllServicoDetalhado)

export { ServiceRouter }
