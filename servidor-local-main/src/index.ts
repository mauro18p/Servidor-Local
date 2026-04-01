import express, { type Request, type Response } from "express"
import { ServiceRouter } from "./routes/servico.route.js"
import { UserRouter } from "./routes/user.route.js"
import { FreelancerRouter } from "./routes/prestador.route.js"
import { OrcamentoRouter } from "./routes/orcamento.route.js"
import { PrestacaoServicoRouter } from "./routes/prestacao-servico.route.js"
import { PropostaRouter } from "./routes/proposta.route.js"
import { swaggerSpec } from "./docs/swagger.js"
import swaggerUI from "swagger-ui-express"
import dotenv from "dotenv"


const app = express()
app.use(express.json())

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))

dotenv.config()

app.use("/service", ServiceRouter)
app.use("/user", UserRouter)
app.use("/freelancer", FreelancerRouter)
app.use("/orcamento", OrcamentoRouter)
app.use("/prestacao-servico", PrestacaoServicoRouter)
app.use("/proposta", PropostaRouter)


app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

app.listen(8080, () => {
  console.log("Server running on port 8080")
})