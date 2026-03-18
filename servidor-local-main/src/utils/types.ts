
export interface PedidoServicoType {
    cliente: string;
    descricao: string;
    horasEstimadas: number;
    urgente: boolean;
}

export interface ResponseType {
    status: boolean,
    message: string,
    data: ServicoType | null,
}

export interface ServicoType {
    nome: string,
    precoHora: number
    categoria: string
    minimoDescontado: number
    percentagemDesconto?: number
}

export interface  PrestadorType {
    nome: string
    precoHora: number
    profissao: string
    minimoParaDesconto: number
    percentagemDesconto: number
    taxaUrgencia: number
}

// Para nome de prestador de servico
export interface PrestNome {
    status: boolean,
    message: string,
    data: string | null,
}

// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados



export interface userType {
    id: string
    nome: string
    numero_identificacao: string
    data_nascimento: Date
    email: string
    telefone: string
    pais: string
    localidade: string
    password: string
    enabled: boolean
    created_at: string
    update_at: string
}


export interface ServicoTypeDB {
    id: string,
    nome: string,
    descricao: string,
    categoria: string,
    enabled: boolean,
    created_at: string,
    updated_at: string
}

export interface PrestadorTypeDB {
    id: string,
    id_utilizadores: string,
    nif: number,
    profissao: string,
    taxa_urgencia: number,
    minimo_desconto: number,
    percentagem_desconto: number,
    disponivel: boolean,
    enabled: boolean,
    created_at: string,
    update_at: string
}