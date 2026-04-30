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
        id_prestacao_service: PrestacaoServico,
        preco_hora: Float!,
        horas_estimadas: Int,
        id_prestador: Prestador!,
        estado: EstadoProposta,
        owner: String,
        enabled: Boolean,
        created_at: String,
        updated_at: String
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
        taxaUrgencia: Int!,
        percentagemDesconto: Int!,
        minimoDesconto: Int!,
        nif: Int!,
        profissao: String,
        enable: Boolean,
        created_at: String,
        updated_at: String
    }

    type PrestacaoServico {
        id: ID!,
        designacao: String!,
        subtotal: Float!,
        horas_estimadas: Int!,
        id_prestador: Prestador!,
        id_services: Service!,
        id_empresa: Empresa!,
        tipo_prestador: TipoPrestador,
        preco_hora: Float!,
        urgente: Boolean,
        estado: EstadoPrestacao,
        id_orcamento: Orcamento!,
        id_utilizadores: Utilizador!,
        enabled: Boolean,
        created_at: String
        updated_at: String
    }
    enum TipoPrestador {
        PARATICULAR
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
        total: Float!,
        id_utilizadores: Utilizador!,
        enabled: Boolean,
        created: String,
        updated: String
    }

    type Empresa {
        id: ID!,
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
    
    type Query {
        getAllCategoria: [Categoria]
        getCategoriaById(id: ID!): Categoria

        getAllEmpresa: [Empresa]
        getEmpresaById(id: ID!): Empresa

        getAllOrcamento: [Orcamento]
        getOrcamentoById(id: ID!): Orcamento

        getAllPrestacaoServico : [PrestacaoServico]
        getPrestacaoServicoById(id: ID!): PrestacaoServico

        getAllPrestador: [Prestador]
        getPrestadorById(id: ID!): Prestador

        getAllProposta: [Proposta]
        getPropostaById(id: ID!): Proposta

        getAllService: [Service]
        getServiceById(id: ID!): Service

        getAllUsers: [Utilizador]
        getUserById(id: ID!): Utilizador
    }

    type Mutation {
        createUser(nome: String!, numero_identidade: String!, data_nascimento: String!, email: String!, password: String!, telefone: String!, pais: String!, localidade: String, role: Role, enebled: Boolean): Utilizador,
        updatedUser(id: ID!, nome: String, numero_identidade: String, data_nascimento: String, email: String, password: String, telefone: String, pais: String, localidade: String, role: Role, enebled: Boolean): Utilizador,
        deleteUser(id: ID!): Utilizador,

        createService(nome: String!, descricao: String, categoria: [ID], enabled: Boolean): Service,
        updateService(id: ID!, nome: String, descricao: String, categoria: [ID], enabled: Boolean): Service,
        deleteService(id: ID!): Service,

        createProposta(id_prestacao_service: ID!, id_prestador: ID!, preco_hora: Float!, horas_estimadas: Int!, estado: EstadoProposta, owner: String, enabled: Boolean): Proposta,
        updateProposta(id: ID!, id_prestacao_service: ID, id_prestador: ID, preco_hora: Float, horas_estimadas: Int, estado: EstadoProposta, owner: String, enabled: Boolean): Proposta,
        deleteProposta(id: ID!): Proposta,

        createPrestador(id: ID!, taxa_urgencia: Float!, percentagem_desconto: Float!, minimo_desconto: Float!, nif: String, profissao: String!, enable: Boolean): Prestador,
        updatePrestador(id: ID!, taxa_urgencia: Float, percentagem_desconto: Float, minimo_desconto: Float, nif: String, profissao: String, enable: Boolean): Prestador,
        deletePrestador(id: ID!): Prestador,

        createPrestacaoServico(designacao: String!, subtotal: Float!, horas_estimadas: Int!, id_prestador: ID!, id_utilizador: ID!, id_service: ID!, preco_hora: Float!, estado: EstadoPrestacao, id_orcamento: ID, id_empresa: ID, tipo_prestador: TipoPrestador, urgente: Boolean, enabled: Boolean): PrestacaoServico,
        updatePrestacaoServico(id: ID!, designacao: String, subtotal: Float, horas_estimadas: Int, id_prestador: ID, id_utilizador: ID, id_service: ID, preco_hora: Float, estado: EstadoPrestacao, id_orcamento: ID, id_empresa: ID, tipo_prestador: TipoPrestador, urgente: Boolean, enabled: Boolean): PrestacaoServico,
        deletePrestacaoServico(id: ID!): PrestacaoServico,

        createOrcamento(total: Float!, id_utilizadores: ID!, enabled: Boolean): Orcamento,
        updateOrcamento(id: ID!, total: Float, id_utilizadores: ID, enabled: Boolean): Orcamento,
        deleteOrcamento(id: ID!): Orcamento,

        createEmpresa(designacao: String!, descricao: String, localizacao: String, nif: String, icone: String, id_utilizador: ID!, enabled: Boolean): Empresa,
        updateEmpresa(id: ID!, designacao: String, descricao: String, localizacao: String, nif: String, icone: String, id_utilizador: ID, enabled: Boolean): Empresa,
        deleteEmpresa(id: ID!): Empresa,

        createCategoria(designacao: String!, icone: String): Categoria,
        updateCategoria(id: ID!, designacao: String, icone: String): Categoria,
        deleteCategoria(id: ID!): Categoria
    
}`