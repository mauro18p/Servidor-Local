import { Router } from "express"
import { PrestacaoServicoController } from "../controllers/prestacao-servico.controller.js"

const PrestacaoServicoRoute = {
    create: "/create",
    getAll: "/",
    getById: "/get-by-id/:id",
    update: "/update/:id",
    delete: "/delete/:id"
}

const PrestacaoServicoRouter = Router()

PrestacaoServicoRouter.post(PrestacaoServicoRoute.create, PrestacaoServicoController.create)
PrestacaoServicoRouter.get(PrestacaoServicoRoute.getAll, PrestacaoServicoController.getAll)
PrestacaoServicoRouter.get(PrestacaoServicoRoute.getById, PrestacaoServicoController.get)
PrestacaoServicoRouter.put(PrestacaoServicoRoute.update, PrestacaoServicoController.update)
PrestacaoServicoRouter.delete(PrestacaoServicoRoute.delete, PrestacaoServicoController.delete)

export { PrestacaoServicoRouter }