import { Router } from "express"
import { serviceController } from "../controllers/servico.controller.js"
import authMiddleware, { authorize } from "../security/auth.middleware.js"
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

ServiceRouter.get(ServiceRoute.getAll, serviceController.getAll)
ServiceRouter.get(ServiceRoute.getById, serviceController.get)
ServiceRouter.get(ServiceRoute.allDetailed, serviceController.getAllServicoDetalhado)

ServiceRouter.use(authMiddleware)

ServiceRouter.post(ServiceRoute.create, authorize([Role.ADMIN]), serviceController.create)
ServiceRouter.put(ServiceRoute.update, authorize([Role.ADMIN]), serviceController.update)
ServiceRouter.delete(ServiceRoute.delete, authorize([Role.ADMIN]), serviceController.delete)

export { ServiceRouter }
