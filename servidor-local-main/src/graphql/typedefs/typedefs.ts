import { gql } from "graphql-tag"

export const typeDefs = gql`
    type Utilizador {
        id: ID!,
        nome: String!,
        numero_identificacao: String!,
        data_nascimento: String!,
        email: String!,
        telefone: String!,
        pais: String!,
        localidade: String,
        password: String,
        role: Role
        enabled: Boolean,
        created_at: String,
        updated_at: String
    }
    enum Role {
        CLIENTE,
        ADMIN,
        PRESTADOR,
        EMPRESA
    }
    type Proposta {
        id: ID!,
        id_prestacao_servico: PrestacaoServico,
        preco_hora: Float!,
        horas_estimadas: Int,
        id_prestador: Prestador!,
        estado: EstadoProposta,
        owner: String,
        enabled: boolean,
        created_at: string,
        updated_at: string
    }
    enum EstadoProposta {
        PENDENTE,
        ACEITE,
        CANCELADO
    }

    type Service {
        id: ID!,
        nome: String!,
        descricao: String!,
        categoria: String!,
        enabled: Boolean,
        created_at: String,
        updated_at: String
    }

    type Prestador {
        id: ID!,
        taxaUrgencia: INT!,
        percentagemDesconto: INT!,
        minimoDesconto: INT!,
        nif: INT!,
        profissao: String,
        enable: boolean,
        created_at: string,
        updated_at: string
    }

    type PrestacaoServico {
        id: ID!,
        designacao: String!,
        subtotal: INT!,
        horas_estimadas: INT!,
        id_prestador: Prestador!,
        id_servicos: Service!,
        id_empresa: Empresa!,
        tipo_prestador: TipoPrestador,
        preco_hora: INT!,
        urgente: Boolean,
        estado: EstadoPrestacao,
        id_orcamento: Orcamento!,
        id_utilizadores: Utilizador!,
        enabled: Boolean,
        created_at: String
        updated_at: String
    }
    enum TipoPrestador {
        PARATICULAR,
        EMPRESA
    }
    enum EstadoPrestacao {
        PENDENTE,
        FINALIZADO,
        EM_PROCESSO,
        CANCELADO
    }

    type Orcamento {
        id: ID!,
        total: INT!,
        id_utilizadores: Utilizador!,
        enabled: Boolean,
        created: String,
        updated: String
    }

    type Empresa {
        id: INT!,
        designacao: String,
        descricao: String,
        nif: String
        icone: String,
        id_utilizadores: Utilizador,
        localidade: String,
        enabled: Boolean,
        created_at: String,
        updated_at: String
    }

    type Categoria {
        id: ID!,
        designacao: String,
        icone: String,
        created_at: String,
        updated_at: String
    }
    
    type query {
        getAllCategoria: [Categoria]
        getCategoriaById(id: ID!) Categoria
        getAllEmpresa: [Emresa]
        getEmpresaById(id: ID!) Emresa
        getAllOrcamento: [Orcamento]
        getOrcamentoById(id: ID!) Orcamento
        getAllPrestacaos: [Prestacao]
        getPrestacaoById(id: ID!) Prestacao
        getAllPrestador: [Prestador]
        getPrestadorById(id: ID!) Prestador
        getAllProposta: [Proposta]
        getPropostaById(id: ID!) Proposta
        getAllServico: [Servico]
        getServicoById(id: ID!) Servico
        getAllUsers: [Utilizador]
        getUserById(id: ID!) Utilizador
    }

    type mutation {
        
    }
}`