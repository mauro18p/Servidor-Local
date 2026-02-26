import express, { type Request, type Response } from "express";
import {adicionarServico, ApagarServico, ListarServicos, ObterServico} from "./servico.js"

const app = express()
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    console.log("Hello World!")
    res.send("Hello World!")
});


// rota para adicionar servicos
app.post("/adicionar-servico", (req: Request, res: Response) => {
    const novoServico = req.body

    console.log({serv: novoServico})
    
    const AddServicoresponse = adicionarServico(novoServico)

    res.json(AddServicoresponse)
}
)

// rota para listar os servicos
app.get("/listar-servico", (req: Request, res: Response) => {
    const listServicoResponse = ListarServicos()

    res.json(listServicoResponse)
})

// rota para apagar os servicos
app.delete("/apagar-servico", (req: Request, res: Response) => {
    const { nome } = req.query
    if (nome) {
        const ApagarServicoResponse = ApagarServico(nome as string)
        res.json(ApagarServicoResponse)
    } else {
        res.json({
                        message: "Nome do serviço obrigatorio"
        }
        )
    }
})

// rota para obter servico pelo nome
app.get("/obter-servico", (req: Request, res: Response) => {
    const { nome } = req.query
    if (nome) {
        const ObterServicoResponse = ObterServico(nome as string)
        res.json(ObterServicoResponse)
    } else {
        res.json({
                        message: "Nome do serviço obrigatorio"
        }
        )
    }
})

app.listen(8080, () =>
    console.log("Server running on port 8080")
)