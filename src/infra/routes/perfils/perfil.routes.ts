import type { FastifyInstance } from "fastify";

import { createPerfil, getPerfil } from "../../controllers/perfis/perfil-controller.js";

export async function perfilRoutes(fastify: FastifyInstance) {

  fastify.post("/perfil", createPerfil);

  fastify.get("/perfil", getPerfil);

}