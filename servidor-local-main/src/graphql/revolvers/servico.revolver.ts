import { CategoriaModel } from "../../models/categoria.model.js";
import { PrestacaoServicoModel } from "../../models/prestacao-servico.models.js";
import { ServiceModel } from "../../models/servico.model.js";
import type { ServicoTypeDB } from "../../utils/types.js";

export const serviceResolver = {
    Query: {
        getAllService: async () => {
            return await ServiceModel.getAll();
        },
        getServiceById: async (_: any, args: { id: string }) => {
            return await ServiceModel.get(args.id)
        }
    },

    Mutation: {
        createService: async (_: any, args: { service: ServicoTypeDB }) => {
            return await ServiceModel.create(args.service);
        },
        updateService: async (_: any, args: { id: string, service: ServicoTypeDB }) => {
            return await ServiceModel.update(args.id, args.service);
        },
        deleteService: async (_: any, args: { id: string }) => {
            return await ServiceModel.delete(args.id,);
        }

    },

    Servico: {
        categoria: async (parent: { id: string }) => {
            return await CategoriaModel.get(parent.id)
        },
        prestacao: async (parent: { id: string }) => {
            return await PrestacaoServicoModel.get(parent.id)
        }
    }
}