import type { Request, Response } from "express";
import type { ServicoTypeDB } from "../utils/types.js";
import { ServiceModel } from "../models/servico.model.js";


export const serviceController = {

    // criar um novo servico
    async create(req: Request, res: Response) {
        const newService: ServicoTypeDB = req.body

        if (!newService) {
            return res.status(400).json({
                status: "error",
                message: "Dados de servico invalido",
                data: null
            })
        } else
            console.log(newService)

        const createServiceResponse = await ServiceModel.create(newService)

        if (createServiceResponse === null) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao criar servico",
                data: null
            })
        }

        return res.status(200).json({
            status: "sucesso",
            message: "servico adicionado",
            data: createServiceResponse
        })
    },

    // listar todos os servicos
    async getAll(req: Request, res: Response) {
        const getAllServicesResponse = await ServiceModel.getAll()

        if (!getAllServicesResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao selicionar servico",
                data: null
            })
        }
        return res.status(200).json({
            status: "sucesso",
            mensagem: "servicos encontrado",
            data: getAllServicesResponse
        })
    },

    // selecionar servico por id
    async get(req: Request, res: Response) {
        const { id } = req.params

        const updatedService: ServicoTypeDB = req.body

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        if (!updatedService) {
            return res.status(400).json({
                status: "error",
                message: "Dados de servico invalidos",
                data: null
            })
        }

        const updateServiceResponse = await ServiceModel.update(id as string, updatedService)

        if (!updateServiceResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar servico",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Servico atualizado com sucesso",
            data: updateServiceResponse
        })

    },

    // atualizar dados de servicos
    async update(req: Request, res: Response) {
        const { id } = req.params

        const updatedService: ServicoTypeDB = req.body

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        if (!updatedService) {
            return res.status(400).json({
                status: "error",
                message: "Dados de servico invalidos",
                data: null
            })
        }

        const updateServiceResponse = await ServiceModel.update(id as string, updatedService)

        if (!updateServiceResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar servico",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Servico atualizado com sucesso",
            data: updateServiceResponse
        })
    },

    // apagar servico de base de dados
    async delete(req: Request, res: Response) {
        const { id } = req.params


        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        const deleteServiceResponse = await ServiceModel.delete(id as string)

        if (!deleteServiceResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao apagar servico",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Servico apagado com sucesso",
            data: deleteServiceResponse
        })
    }
}



