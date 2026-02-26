// exercicio 2

interface ServicoType {
    nome: string
    precoHora: number
    categoria: string
    minimoDescontado: number
    percentagemDesconto: number
}

interface ResponseType {
    status: boolean
    nomeServico: string
    data: ServicoType
}

let CategoriaServicos: Array<ServicoType> = []

// adicionar um serviço novo
export function adicionarServico(servico: ServicoType) {
    console.log(servico)
    if (!servico.nome || servico.precoHora <= 0) {
        console.log("Data received:", CategoriaServicos);
        // Check if this is undefined!

        return "Erro: nome e preço obrigatorio"
    }
    for (let s of CategoriaServicos) {
        if (s?.nome === servico.nome) {
            return console.log("Serviço adicionado")
        }
    }
    CategoriaServicos.push(servico)
    console.log("Serviço adicionado")
    return ({
        status: true,
        nomeServico: servico.nome,
        data: servico

    })
}

// Listar todos os serviços
export function ListarServicos(): ServicoType[] {
    // TODO: implementar fetch de servicos

    return CategoriaServicos
}

// apagar um servico
export function ApagarServico(nome: string): boolean {
    // TODO: implementar delete de servico 

    const novoCatalogoTemp: ServicoType[] = []


    for (let i = 0; i < CategoriaServicos.length; i++) {
        if (CategoriaServicos[i]?.nome !== undefined && CategoriaServicos[i]?.nome !== nome) {
            novoCatalogoTemp.push(CategoriaServicos[i]!)
        }
    } // devoçve um novo catalogo sem o item removido

    CategoriaServicos = novoCatalogoTemp
    return true
}

// obter um novo servico
export function ObterServico(nome: string): ServicoType | null {
    for (let i = 0; i < CategoriaServicos.length; i++) {
        if (CategoriaServicos[i]?.nome === nome) {
            return CategoriaServicos[i]!
        }
    }
    return null
}