import { Router } from "express"
import { FreelancerController } from "../controllers/prestador.controller.js"

const FreelancerRoute = {
    create:"/create",
    getAll:"/",
    getById:"/get-by-id/:id",
    update:"/update/:id",
    delete:"/delete/:id"
}

const router = Router()

router.get(FreelancerRoute.getAll, FreelancerController.getAll)
router.get(FreelancerRoute.getById, FreelancerController.get)
router.post(FreelancerRoute.create, FreelancerController.create)
router.put(FreelancerRoute.update, FreelancerController.update)
router.delete(FreelancerRoute.delete, FreelancerController.delete)

export {router}