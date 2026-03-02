// exercicio 1
interface PedidoServico {
    cliente: string
    descricao: string
    horasEstimativa: number
    urgente: boolean
}

function Orcamento( pedidoServico: PedidoServico, precoHora: number) {
    const valorBase = precoHora * pedidoServico.horasEstimativa
    let urgente = true
    let urgentePrice = 0
    urgente === true ? urgentePrice = valorBase * 0.30 : urgentePrice = 0
    let Oramento = 0
    Oramento = valorBase + urgentePrice
    return Orcamento
}