import type { Request, Response } from "express";
import { UserModel } from "../models/user.model.js"
import type { userTypeDB } from "../utils/types.js"

export const serviceController = {

    // criar um novo utilizador
    async create(req: Request, res: Response) {
        const newUser: userTypeDB = req.body

        if (!newUser) {
            return res.status(400).json({
                status: "error",
                message: "Dados de utilizador invalido",
                data: null
            })
        } else
            console.log(newUser)

        const createNewService = await UserModel.create(newUser)

        if (createNewService === null) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao criar utilizador",
                data: null
            })
        }

        return res.status(200).json({
            status: "sucesso",
            message: "utilizador adicionado",
            data: createNewService
        })
    },

    // listar todos os utilizadors
    async getAll(req: Request, res: Response) {
        const getAllUsersResponse = await UserModel.getAll()

        if (!getAllUsersResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao encontrar utilizadores",
                data: null
            })
        }
        return res.status(200).json({
            status: "sucesso",
            mensagem: "utilizadores encontrado",
            data: getAllUsersResponse
        })
    },

    // selecionar utilizador por id
    async get(req: Request, res: Response) {
        const { id } = req.params

        const getUser: userTypeDB = req.body

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        if (!getUser) {
            return res.status(400).json({
                status: "error",
                message: "Dados de utilizador invalidos",
                data: null
            })
        }

        const getUserResponse = await UserModel.update(id as string, getUser)

        if (!getUserResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar utilizador",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "utilizador atualizado com sucesso",
            data: getUserResponse
        })

    },

    // atualizar dados de utilizadors
    async update(req: Request, res: Response) {
        const { id } = req.params

        const UpdateUser: userTypeDB = req.body

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        if (!UpdateUser) {
            return res.status(400).json({
                status: "error",
                message: "Dados de utilizador invalidos",
                data: null
            })
        }

        const UpdateUserResponse = await UserModel.update(id as string, UpdateUser)

        if (!UpdateUserResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar utilizador",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "utilizador atualizado com sucesso",
            data: UpdateUserResponse
        })
    },

    // apagar utilizador de base de dados
    async delete(req: Request, res: Response) {
        const { id } = req.params


        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "Id eh obrigatorio",
                data: null
            })
        }

        const deleteUserResponse = await UserModel.delete(id as string)

        if (!deleteUserResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao apagar utilizador",
                data: null
            })
        }
        return res.status(200).json({
            status: "success",
            message: "utilizador apagado com sucesso",
            data: deleteUserResponse
        })
    }
}
