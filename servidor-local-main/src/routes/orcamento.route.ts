import { Router } from "express"
import { OrcamentoController } from "../controllers/orcamento.controller.js"

const OrcamentoRoute = {
    create: "/create",
    getAll: "/",
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id",
    calcular: "/calcular/:id"
}

const OrcamentoRouter = Router()

OrcamentoRouter.post(OrcamentoRoute.create, OrcamentoController.create)
OrcamentoRouter.get(OrcamentoRoute.getAll, OrcamentoController.getAll)
OrcamentoRouter.get(OrcamentoRoute.getById, OrcamentoController.get)
OrcamentoRouter.put(OrcamentoRoute.update, OrcamentoController.update)
OrcamentoRouter.delete(OrcamentoRoute.delete, OrcamentoController.delete)
OrcamentoRouter.put(OrcamentoRoute.calcular, OrcamentoController.calcular)

export { OrcamentoRouter }
