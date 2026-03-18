import db from "./lib/db.js"
import mysql from "mysql2/promise"
import type { userType } from "./utils/types.js"
import { generateUUID } from "./utils/uuid.js"

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
/*
export async function PostNewUser(newUser: userType) {
    console.log({ newUser })
    try {
        const query = `
        INSERT INTO tbl_utilizadores (
            id, nome, numero_identificacao, data_nascimento, 
            email, password, telefone, pais, localidade, 
            enabled, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const values = [
        generateUUID(),
        newUser.nome,
        newUser.numero_identificacao,
        newUser.data_nascimento,
        newUser.email,
        newUser.password,
        newUser.telefone,
        newUser.pais,
        newUser.localidade,
        newUser.enabled,
        new Date(),
        new Date()
    ];

    const [rows] = await db.execute(query, values)

    return rows

    } catch (error) {
        console.log(error)
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
*/