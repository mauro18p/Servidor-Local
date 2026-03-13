import db from "./lib/db.js"

export async function getUsers() {
    const [rows] = await db.execute("SELECT * FROM tbl_utilizadores;")

    console.log(rows)
    return rows
}

export async function getUserById(id: string) {
    const [rows] = await db.execute(
        "SELECT * FROM tbl_utilizadores WHERE tbl_utilizadores.id=?",

        [id]
    )

    if (Array.isArray(rows) && rows.length === 0) return null
    return Array.isArray(rows) ? rows[0] : null
}

export async function PostNewUser(id: string, nome: string, numero_identificacao: string,) {
    const [rows] = await db.execute(
        `INSERT INTO tbl_utilizadores (
            id,
            nome,
            numero_identificacao,
            data_nascimento,
            email,
            password,
            telefone,
            pais,
            localidade,
            enabled,
            created_at,
            updated_at
        )  VALUES(
            "a4a11708-60d9-4ffa-a474-f4aa3af34bf3",
            "Roronoa Zoro",
            "M005z",
            "2003-07-18",
            "swordsman@gmail.com",
            "$2a$12$XO56XJLC2YMoPJgvRy152.vDrgWWtqB9uv1X9.3ZNp53B2VYHaIju",
            "9954152",
            "Japan",
            "Tokyo",
            true,
            NOW(),
            NOW()
        ); `
    )

    console.log(rows)
    return rows
}