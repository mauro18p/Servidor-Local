import db from "../lib/db.js";
import type { PrestadorTypeDB } from "../utils/types.js";
import { generateUUID } from "../utils/uuid.js";


export const FreelancerModel = {
    async create(newFreelancer: PrestadorTypeDB) {
        try {
        const query = `INSERT INTO tbl_prestadores (
            id, id_utilizadores, nif, profissao, 
            taxa_urgencia, minimo_desconto, percentagem_desconto, disponivel, 
            enabled, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        const values = [
            generateUUID(),
            newFreelancer.id_utilizadores,
            newFreelancer.nif,
            newFreelancer.profissao,
            newFreelancer.taxa_urgencia,
            newFreelancer.minimo_desconto,
            newFreelancer.percentagem_desconto,
            newFreelancer.disponivel,
            newFreelancer.enabled,
            new Date(),
            new Date()
        ];

        const [rows] = await db.execute(query, values)

        return rows
    } catch (error) {
        console.log(error)
}
},

    async getAll() {
        try {
            const query = "SELECT * FROM tbl_prestadores";

            const rows = await db.execute(query);

            return Array.isArray(rows) && rows.length > 0 ? rows[0] : [];
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async get(id: string) {
        try {
            const query = 'SELECT * FROM tbl_prestadores WHERE id = ?'

            const value = [id]

            const rows = await db.execute(query, value)

            return Array.isArray(rows) && rows.length > 0 ? rows[0] : []
        } catch (error) {
            console.log(error)
            return null
        }
    },

    async update(id: string, updateFreelancer: PrestadorTypeDB) {
            try {
        const query = `UPDATE tbl_prestadores
                    SET
                        id_utilizadores=?,
                        nif=?,
                        profissao=?,
                        taxa_urgencia=?,
                        minimo_desconto=?,
                        percentagem_desconto=?,
                        disponivel=?,
                        enabled=?,
                        updated_at=?
                    WHERE
                        id=?
                    ;`

        const values = [
            updateFreelancer.id_utilizadores,
            updateFreelancer.nif,
            updateFreelancer.profissao,
            updateFreelancer.taxa_urgencia,
            updateFreelancer.minimo_desconto,
            updateFreelancer.percentagem_desconto,
            updateFreelancer.disponivel,
            updateFreelancer.enabled,
            new Date(),
            id
        ]

        const rows = await db.execute(query, values)

        return rows
    } catch (error) {
        console.log(error)
        return null
    }
},

    async delete(id: string) {
        try {
            const query = 'DELETE FROM tbl_prestadores WHERE id = ?'

            const value = [id]

            const [rows]: any = await db.execute(query, value)

            return rows[0]?.affectedRows === 0 ? null : rows
        } catch (error) {
            console.log(error)
            return null
        }
    }
};


