import type { FastifyInstance } from "fastify";

import {
    createPerfil,
    getPerfil,
    editPerfil,
    deletePerfil,
    getPerfilAtivo,
    getPerfilUnico,
} from "../../controllers/perfis/perfil-controller.js";

export async function perfilRoutes(fastify: FastifyInstance) {
    
    fastify.post("/perfil", createPerfil);

    fastify.get("/perfil", getPerfil);
/*
    fastify.get("/perfil/1", async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        return {
            id: 1,
            nome: "Administrador",
            descricao: "Perfil administrador - Rota perfil unico",
            ativo: true,
        };
    });
 */

    fastify.get("/perfil/:id", getPerfilUnico);

    fastify.get("/perfilAtivo", getPerfilAtivo);

    fastify.put("/perfil/:id", editPerfil);

    fastify.delete("/perfil/:id", deletePerfil);
}
