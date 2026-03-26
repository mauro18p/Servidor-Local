
import { Router } from "express"
import { PropostaController } from "../controllers/proposta.controller.js"


const PropostaRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id"
}

const PropostaRouter = Router()

PropostaRouter.post(PropostaRoute.create, PropostaController.create)
PropostaRouter.get(PropostaRoute.getAll, PropostaController.getAll)
PropostaRouter.get(PropostaRoute.getById, PropostaController.get)
PropostaRouter.put(PropostaRoute.update, PropostaController.update)
PropostaRouter.delete(PropostaRoute.delete, PropostaController.delete)

export { PropostaRouter }