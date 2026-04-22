import { PrestacaoServicoModel } from "../../models/prestacao-servico.models.js";
import { FreelancerModel } from "../../models/prestador.model.js";
import { PropostaModel } from "../../models/proposta.model.js";
import type { PropostaDBType } from "../../utils/types.js"; 

export const propostaResolver = {
    Query: {
        getAllProposta: async () => {
            return await PropostaModel.getAll();
        },

        getPropostaById: async (_: any, args: { id: string }) => {
            return await PropostaModel.get(args.id)
        }
    },

    Mutation: {
        createProposta: async (_: any, args: { proposta: PropostaDBType }) => {
            return await PropostaModel.create(args.proposta);
        },
        updateProposta: async (_: any, args: { id: string, proposta: PropostaDBType }) => {
            return await PropostaModel.update(args.id, args.proposta);
        },
        deleteProposta: async (_: any, args: { id: string }) => {
            return await PropostaModel.delete(args.id,);
        }

    },

    Proposta: {
            prestacao: async (parent: { id: string }) => {
                return await PrestacaoServicoModel.get(parent.id)
            },
            prestador: async (parent: { id: string }) => {
                return await FreelancerModel.get(parent.id)
            }
        },
            
}