import { Router } from "express"
import { FreelancerController } from "../controllers/prestador.controller.js"

const FreelancerRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id"
}

const FreelancerRouter = Router()

FreelancerRouter.get(FreelancerRoute.getAll, FreelancerController.getAll)
FreelancerRouter.get(FreelancerRoute.getById, FreelancerController.get)
FreelancerRouter.post(FreelancerRoute.create, FreelancerController.create)
FreelancerRouter.put(FreelancerRoute.update, FreelancerController.update)
FreelancerRouter.delete(FreelancerRoute.delete, FreelancerController.delete)

export {FreelancerRouter}