import express, { type Request, type Response } from "express"
import { adicionarServico, apagarServico, listarServicos, obterServico } from "./servico.js"
import { apagarNomeDoPrestador, calcularOrcamento, editarPrestadorDeServico, listarPrestadores, obterPrestador, selecionarServicos, } from "./orcamento.js"
import { adicionarPrestador, Prestador, } from "./prestador.js"

const app = express()
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

// rota para adicionar um serviço novo
app.post("/adicionar-servico", (req: Request, res: Response) => {
  const novoServico = req.body

  const addServicoResponse = adicionarServico(novoServico)

  res.json(addServicoResponse)
})

// rota para listar todos os servicos
app.get("/listar-servicos", (req: Request, res: Response) => {
  const listServicoResponse = listarServicos()

  res.json(listServicoResponse)
})

// rota para apagar um servico
app.delete("/apagar-servico", (req: Request, res: Response) => {
  const { nome } = req.query

  if (nome) {
    const apagarServicoResponse = apagarServico(nome as string)

    res.json(apagarServicoResponse)
  } else {
    res.json({
      message: "Nome do servico é obrigatorio"
    })
  }
})

// rota para obter servico pelo nome 
app.get("/obter-servico", (req: Request, res: Response) => {
  const { nome } = req.query

  if (nome) {
    const obterServicoResponse = obterServico(nome as string)

    res.json(obterServicoResponse)
  } else {
    res.json({
      message: "Nome do servico é obrigatorio"
    })
  }
})

// rota para selecionar servicos
app.post("/selecionar-servico", (req: Request, res: Response) => {
  const { nome } = req.body

  const selecionarServicoResponse = selecionarServicos(nome as string)

  res.json(selecionarServicoResponse)
})

// rota para calcular orcamento
app.post("/calcular-orcamento", (req: Request, res: Response) => {
  const { pedido } = req.body

  const calcularOrcamentoResponse = calcularOrcamento(pedido)

  res.json({
    mensagem: "Orçamento calculado com sucesso",
    calcularOrcamentoResponse
  })
})


// rota para adicionar prestador 
app.post("/adicionar-prestador", (req: Request, res: Response) => {
  const novoPrestador = req.body

  const addServicoResponse = adicionarPrestador(novoPrestador)

  res.json(addServicoResponse)
})

// rota para listar prestadores
app.get("/listar-prestadores", (req: Request, res: Response) => {

  const response = listarPrestadores()

  res.json(response)
})

// rota para obter servico pelo nome 
app.post("/selecionar-prestador", (req: Request, res: Response) => {
  const { nomeDoPrestador } = req.query

  if (nomeDoPrestador) {
    const obterPrestadorResponse = obterPrestador(nomeDoPrestador as string)

    res.json(obterPrestadorResponse)
  } else {
    res.json({
      message: "mensagem: prestador nao encontrado"
    })
  }
})

//rota para obter servico pelo nome
app.put("/editar-prestador", (req: Request, res: Response) => {
  const { nomeDoPrestador, prestadorExistente } = req.query

  const editarPrestadorResponse = editarPrestadorDeServico(nomeDoPrestador as string, prestadorExistente)
  res.json(editarPrestadorDeServico)
})

app.delete("/apagar-prestador", (req: Request, res: Response) => {
  const { nomeDoPrestador } = req.query

  if(nomeDoPrestador){
    const apagarPrestadorResponse = apagarNomeDoPrestador(nomeDoPrestador as string)

    res.json(apagarNomeDoPrestador)
  }
})


app.listen(8080, () => {
  console.log("Server running on port 8080")
})