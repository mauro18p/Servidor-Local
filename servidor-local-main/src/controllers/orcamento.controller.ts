import type { Request, Response } from "express";
import type { OrcamentoDBType, PropostaDBType } from "../utils/types.js";
import { OrcamentoModel } from "../models/oramento.model.js";
import { PrestacaoServicoModel } from "../models/prestacao-servico.models.js";
import { FreelancerModel } from "../models/prestador.model.js";
import { PropostaModel } from "../models/proposta.model.js";

export const OrcamentoController = {
    async create(req: Request, res: Response) {
        const orcamento: OrcamentoDBType = req.body;

        if (!orcamento) {
            return res.status(400).json({
                status: "error",
                message: "Dados de orcamento invalidos",
                data: null,
            });
        }

        const createOrcamentoResponse = await OrcamentoModel.create(orcamento);

        if (!createOrcamentoResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao criar orcamento",
                data: null,
            });
        }

        return res.status(201).json({
            status: "success",
            message: "Orcamento criado com sucesso",
            data: createOrcamentoResponse,
        });
    },

    async getAll(req: Request, res: Response) {
        const getAllOrcamentosResponse = await OrcamentoModel.getAll();

        if (!getAllOrcamentosResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao buscar orcamentos",
                data: null,
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Orcamentos buscados com sucesso",
            data: getAllOrcamentosResponse,
        });
    },

    async get(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null,
            });
        }

        const getOrcamentoByIdResponse = await OrcamentoModel.get(id as string);

        if (!getOrcamentoByIdResponse) {
            return res.status(404).json({
                status: "error",
                message: "Orcamento nao encontrado",
                data: null,
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Orcamento encontrado com sucesso",
            data: getOrcamentoByIdResponse,
        });
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;

        const updatedOrcamento: OrcamentoDBType = req.body;

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null,
            });
        }

        if (!updatedOrcamento) {
            return res.status(400).json({
                status: "error",
                message: "Dados de orcamento invalidos",
                data: null,
            });
        }

        const updateOrcamentoResponse = await OrcamentoModel.update(
            id as string,
            updatedOrcamento,
        );

        if (!updateOrcamentoResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao atualizar orcamento",
                data: null,
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Orcamento atualizado com sucesso",
            data: updateOrcamentoResponse,
        });
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                status: "error",
                message: "ID obrigatorio",
                data: null,
            });
        }

        const deleteOrcamentoResponse = await OrcamentoModel.delete(id as string);

        if (!deleteOrcamentoResponse) {
            return res.status(400).json({
                status: "error",
                message: "Erro ao apagar orcamento",
                data: null,
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Orcamento apagado com sucesso",
            data: deleteOrcamentoResponse,
        });
    },

    async calcularBudget(req: Request, res: Response) {
        const { id } = req.params;

        const prestacaoServico = await PrestacaoServicoModel.getByIdOrcamento(
            id as string,
        );

        if (!prestacaoServico) {
            return res.status(404).json({
                status: "error",
                message: "Prestacao de servico nao encontrado",
                data: null,
            });
        }

        const proposals = await PropostaModel.getByIdPrestacaoServico(
            prestacaoServico.id,
        );

        if (!proposals) {
            return res.status(404).json({
                status: "error",
                message: "Ainda nenhuma proposta foi aceite",
                data: null,
            });
        }

        const acceptedProposal: PropostaDBType | undefined = proposals.find((proposal) => proposal.estado === "aceite",
        );

        if (!acceptedProposal) {
            return res.status(404).json({
                status: "error",
                message: "Ainda nenhuma proposta foi aceite",
                data: null,
            });
        }

        const precoHora = acceptedProposal.preco_hora;
        const horasEstimadas = prestacaoServico.horas_estimadas;

        const prestador = await FreelancerModel.get(acceptedProposal.id_prestador); // create id_prestador em PropostaDBType

        if (!prestador) {
            return res.status(404).json({
                status: "error",
                message: "Prestador nao encontrado",
                data: null,
            });
        }

        const urgencyTax = prestador.taxa_urgencia;
        const minimoDesconto = prestador.minimo_desconto;
        const discountPercentage = prestador.percentagem_desconto;

        let subtotal = precoHora * horasEstimadas;

        if (subtotal >= minimoDesconto) {
            subtotal = subtotal * (1 - discountPercentage);
        }

        if (prestacaoServico.urgente) {
            subtotal = subtotal * (1 - urgencyTax)
        }

        const updatePrestacaoServicoResponse = await OrcamentoModel.updateBudget(id as string, subtotal);

        if (!updatePrestacaoServicoResponse) {
            return res.status(500).json({
                status: "error",
                message: "Erro ao atualizar budget",
                data: null,
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Budget calculado com sucesso",
            data: updatePrestacaoServicoResponse,
        });

    }
};
