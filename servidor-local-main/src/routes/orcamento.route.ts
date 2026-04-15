import { Router } from "express"
import { OrcamentoController } from "../controllers/orcamento.controller.js"
import { Role } from "../utils/types.js"
import authMiddleware, { authorize } from "../security/auth.middleware.js"

const OrcamentoRoute = {
    create: "/create",
    getAll: "/",
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id",
    calcular: "/calcular/:id"
}

const OrcamentoRouter = Router()

OrcamentoRouter.use(authMiddleware)

OrcamentoRouter.post(OrcamentoRoute.create, authorize([Role.ADMIN, Role.CLIENTE]), OrcamentoController.create)
OrcamentoRouter.get(OrcamentoRoute.getAll, authorize([Role.ADMIN]), OrcamentoController.getAll)
OrcamentoRouter.get(OrcamentoRoute.getById, authorize([Role.ADMIN]), OrcamentoController.get)
OrcamentoRouter.put(OrcamentoRoute.update, authorize([Role.ADMIN, Role.CLIENTE]), OrcamentoController.update)
OrcamentoRouter.delete(OrcamentoRoute.delete, authorize([Role.ADMIN]), OrcamentoController.delete)
OrcamentoRouter.put(OrcamentoRoute.calcular, authorize([Role.ADMIN, Role.CLIENTE]), OrcamentoController.calcular)

export { OrcamentoRouter }
