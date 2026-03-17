import db from "./lib/db.js"
import mysql from "mysql2/promise"

// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados
// Trabalhar com base de dados


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

export async function PostNewUser() {
    const query = `
        INSERT INTO tbl_utilizadores (
            id, nome, numero_identificacao, data_nascimento, 
            email, password, telefone, pais, localidade, 
            enabled, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        "ba985ad2-09f1-4c79-8cca-876c3693e",
        "Snow",
        "N123",
        "2003-07-18",
        "lordSnow@gmail.com",
        "$2a$12$rzwSu5A2tdGTulUrEVmPDeADqluT3STOwf0jo5L79Ecy",
        "9919213",
        "The North",
        "woods",
        true,
        new Date(),
        new Date()
        
    ];

    try {
        const [rows] = await db.execute(query, values);
        console.log("Adicionado com sucesso");
        return rows;
    } catch (error) {
        console.error("Database error:", error);
        throw error;
    }
}


export async function deleteUserById(id: string) {
    const [rows] = await db.execute(
        'DELETE FROM tbl_utilizadores WHERE id =?',

        [id]
    ) as [mysql.ResultSetHeader, mysql.FieldPacket[]]

    if (rows.affectedRows === 0) {
        return null;
    }

    return { success: true, deletedId: id };
}
