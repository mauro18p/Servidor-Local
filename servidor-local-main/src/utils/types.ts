
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

export interface PrestadorType {
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



export interface userTypeDB {
    id: string
    nome: string
    numero_identificacao: string
    data_nascimento: string
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

export interface OrcamentoDBType {
    id: string,
    total: number,
    id_utilizadores: string,
    enabled: boolean,
    created_at: string,
    updated_at: string
}

export interface PrestacaoServicoDBType {
    id: string,
    designacao: string,
    subtotal: number,
    horas_estimadas: number,
    id_prestador: string,
    id_servico: string,
    preco_hora: number,
    estado: string,
    id_orcamento: string,
    enabled: boolean,
    created_at: string,
    updated_at: string
}

export interface PropostaDBType {
    id: string,
    id_prestacao_servico: string,
    preco_hora: number,
    horas_estimadas: number,
    estado: string,
    enabled: boolean,
    created_at: string,
    updated_at: string
}