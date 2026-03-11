import mysql from "mysql2/promise"

const db = mysql.createPool({
    host: "localhost",
    user: "localhost",
    password: "mauro",
    database: "servidor_local"
})

export default db;