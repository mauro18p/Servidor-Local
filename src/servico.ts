// exercicio 2

interface ServicoType {
    nome: string
    precoHora: number
    categoria: string
    minimoDescontado: number
    percentagemDesconto: number
}

let CategoriaServicos: Array<ServicoType> = []

export  function adicionarServico(servico: ServicoType) {
    if (!servico.nome || servico.precoHora <= 0) {
        return "Erro: nome e preço obrigatorio"
    }
    for (let s of CategoriaServicos)
        if (s.nome === servico.nome) {
            return console.log("Serviço adicionado")
        }
        CategoriaServicos.push(servico)
        console.log("Serviço adicionado")
    return ({
        nome: servico.nome,
        precoHora: servico.precoHora
    })
}

