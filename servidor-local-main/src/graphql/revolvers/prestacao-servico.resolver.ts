import { EmpresaModel } from "../../models/empresa.model.js";
import { OrcamentoModel } from "../../models/oramento.model.js";
import { PrestacaoServicoModel } from "../../models/prestacao-servico.models.js"; 
import { FreelancerModel } from "../../models/prestador.model.js";
import { ServiceModel } from "../../models/servico.model.js";
import { UserModel } from "../../models/user.model.js";
import type { PrestacaoServicoDBType } from "../../utils/types.js";

export const prestacaoServicoResolver = {
    Query: {
        getAllPrestacaoServico: async () => {
            return await PrestacaoServicoModel.getAll();
        },

        getPrestacaoServicoById: async (_: any, args: { id: string }) => {
            return await PrestacaoServicoModel.get(args.id)
        }
    },

    Mutation: {
        createPrestacaoPrestacao: async (_: any, args: { prestacaoServico: PrestacaoServicoDBType }) => {
            return await PrestacaoServicoModel.create(args.prestacaoServico);
        },
        updatePrestacaoServico: async (_: any, args: { id: string, prestacaoServico: PrestacaoServicoDBType }) => {
            return await PrestacaoServicoModel.update(args.id, args.prestacaoServico);
        },
        deletePrestacaoServico: async (_: any, args: { id: string }) => {
            return await PrestacaoServicoModel.delete(args.id,);
        }

    },

    Prestacao: {
            prestador: async (parent: { id: string }) => {
                return await FreelancerModel.get(parent.id)
            },
            servicos: async (parent: { id: string }) => {
                return await ServiceModel.get(parent.id)
            },
            empresa: async (parent: { id: string }) => {
                return await EmpresaModel.get(parent.id)
            },
            orcamento: async (parent: { id: string }) => {
                return await OrcamentoModel.get(parent.id)
            },
            utilizadores: async (parent: { id: string }) => {
                return await UserModel.get(parent.id)
            },
        }
}