import { catalogoServicos } from "./servico.js"
import { type PedidoServicoType, type PrestadorType, type ServicoType } from "./utils/types.js"
import { Prestador, } from "./prestador.js";

const taxaUrgencia: number = 0.3
const minimoParaDesconto: number = 100
const percentagemDesconto: number = 0.1

const servicosSelecionados: ServicoType[] = []
const prestadorDeServico: PrestadorType[] = []
const PrestadoresSelecionados: PrestadorType[] = []

// funcao para selecionar servicos e horasEstimadas
export function selecionarServicos(nome: string) {
    for (let i = 0; i < catalogoServicos.length; i++) {
        if (catalogoServicos[i]?.nome === nome) {
            servicosSelecionados.push(catalogoServicos[i]!)
            return true
        }
    }
    return false
}

// funcao para criar prestadores de servico
export function criarPrestadorDeServico(novoPestador: PrestadorType) {
    // verificacao: verifica se o prestador ja esta no array
    prestadorDeServico.map((prestadorExistente: PrestadorType) => {
        if (prestadorExistente.nome === novoPestador.nome) {
            return {
                starus: false,
                message: "Ja existe um prestador de servico esse nome",
                data: null
            }
        }
    })

    // se o prestador nao existir, adicionamos um novo prestador
    prestadorDeServico.push(novoPestador)
    return {
        starus: true,
        message: "Prestador de servico adicionado",
        data: novoPestador
    }

}

// obter um prestador pelo nome

export function obterPrestador(novoPrestador: string): Prestador | null {

    const nomeDoPrestador: Prestador[] = []
    for (let i = 0; i < nomeDoPrestador.length; i++) {
        if (nomeDoPrestador[i]?.nome === novoPrestador) {
            return nomeDoPrestador[i]!
        }
    }
    return null
}


// funcao para calcular o orcamento
export function calcularOrcamento(pedido: PedidoServicoType) {
    let totalBruto: number = 0
    let totalFinal: number = 0

    servicosSelecionados.map((servico: ServicoType) => {
        let totalDoServico: number = servico.precoHora * pedido.horasEstimadas
        totalBruto = totalBruto + totalDoServico
    })

    totalFinal = totalBruto

    if (pedido.urgente) {
        totalFinal = totalBruto + (totalBruto * taxaUrgencia)
    }

    if (totalBruto >= minimoParaDesconto) {
        totalFinal = totalFinal - (totalBruto * percentagemDesconto)
    }

    return totalFinal

    // () => {} --- arrow function
    // function () {} --- function normal

    /* 
    
    urgente: true
    taxaUrgencia: 0.3
    totalBruto: 100
    totalTaxa: 100 * 0.3 = 30
    totalFinal: 100 + 30 = 130

    totalBruto: 100
    totalbruto apos urgencia: 150
    minimo descnto: 100
    percentagem: 10%
    desconto sobre total final: 150 * 0.1 = 15
    desconto sobre total bruto: 100 * 0.1 = 10

    */
}
