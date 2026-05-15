import { EmpresaModel } from "../../models/empresa.model.js";
import { OrcamentoModel } from "../../models/oramento.model.js";
import { PrestacaoServicoModel } from "../../models/prestacao-servico.models.js"; 
import { FreelancerModel } from "../../models/prestador.model.js";
import { PropostaModel } from "../../models/proposta.model.js";
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
        createPrestacaoServico: async (_: any, args: { prestacaoServico: PrestacaoServicoDBType }) => {
            return await PrestacaoServicoModel.create(args.prestacaoServico);
        },
        updatePrestacaoServico: async (_: any, args: { id: string, prestacaoServico: PrestacaoServicoDBType }) => {
            return await PrestacaoServicoModel.update(args.id, args.prestacaoServico);
        },
        deletePrestacaoServico: async (_: any, args: { id: string }) => {
            return await PrestacaoServicoModel.delete(args.id,);
        }

    },

    PrestacaoServico: {
            id_prestador: async (parent: { id_prestador: string }) => {
                return await FreelancerModel.get(parent.id_prestador)
            },
            id_servicos: async (parent: { id_servico: string }) => {
                return await ServiceModel.get(parent.id_servico)
            },
            id_empresa: async (parent: { id_empresa: string }) => {
                return await EmpresaModel.get(parent.id_empresa)
            },
            id_orcamento: async (parent: { id_orcamento: string }) => {
                return await OrcamentoModel.get(parent.id_orcamento)
            },
            id_utilizadores: async (parent: { id_utilizador: string }) => {
                return await UserModel.get(parent.id_utilizador)
            },
            id_prestacao_servico: async (parent: { id : string }) => {
                return await PropostaModel.getByIdPrestacaoServico(parent.id)
            }
        }
}