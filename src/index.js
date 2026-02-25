import express from "express";
import {adicionarServico} from "./servico.js"

const app = express();

app.get("/", (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
});

app.post("/adicionar-servico", (req, res) =>{
    const novoServico = req.body
    adicionarServico(novoServico)
    }
)

app.listen(8080, () => console.log("Server running on port 8080"));
//# sourceMappingURL=index.js.map