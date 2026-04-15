// ENUM
// ENUM
// ENUM
// ENUM
export enum Role {
    CLIENTE = "cliente",
    ADMIN = "admin",
    PRESTADOR = "prestador",
    EMPRESA = "empresa"
}

export enum TipoPrestador {
    PARTICULAR = "particular",
    EMPRESA = "empresa"
}





export interface PedidoServicoType {
    cliente: string;
    descricao: string;
    horasEstimadas: number;
    urgente: boolean;
}

export interface ResponseType<T> {
    status: "success" | "error",
    message: string,
    data: T | null,
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
    password: string
    telefone: string
    pais: string
    localidade: string
    role: Role
    enabled: boolean
    created_at: string
    update_at: string
}


export interface ServicoTypeDB {
    id: string,
    nome: string,
    descricao: string,
    id_categoria: string,
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
    id_utilizador: string,
    id_empresa: string,
    tipo_prestador: TipoPrestador,
    urgente: boolean,
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

export interface PrestacaoServicoDetalhadaType {
    id_prestacao: string;
    cliente_nome: string;
    cliente_email: string;
    servico_nome: string;
    descricao: string;
    data_pedido: string;
    urgente: boolean;
}

export interface ServicoDetalhadoType {
    id: string,
    nome: string,
    descricao: string,
    designacao_categoria: string,
    icone_categoria: string,
    id_empresa: string,
    designacao_empresa: string,
    icone_empresa: string,
    enabled: boolean
}

export interface CategoriaDBType {
    id: string,
    designacao: string,
    icone: string,
    created_at: string,
    updated_at: string
}

export interface empresaDBType {
    id: string,
    designacao: string,
    descricao: string,
    localizacao: string,
    nif: string,
    icone: string,
    id_utilizador: string
    enabled: boolean,
    created_at: string,
    updated_at: string
}