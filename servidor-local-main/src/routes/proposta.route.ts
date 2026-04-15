
import { Router } from "express"
import { PropostaController } from "../controllers/proposta.controller.js"
import authMiddleware, { authorize } from "../security/auth.middleware.js"
import { Role } from "../utils/types.js"


const PropostaRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id"
}

const PropostaRouter = Router()

PropostaRouter.use(authMiddleware)

PropostaRouter.post(PropostaRoute.create, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), PropostaController.create)
PropostaRouter.get(PropostaRoute.getAll, authorize([Role.ADMIN]), PropostaController.getAll)
PropostaRouter.get(PropostaRoute.getById, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR, Role.CLIENTE]), PropostaController.get)
PropostaRouter.put(PropostaRoute.update, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), PropostaController.update)
PropostaRouter.delete(PropostaRoute.delete, authorize([Role.ADMIN, Role.EMPRESA, Role.PRESTADOR]), PropostaController.delete)

export { PropostaRouter }