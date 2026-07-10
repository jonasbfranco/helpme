import type { FastifyInstance } from "fastify";

// Importação das rotas da API
import { homeRoute, pingRoute } from "./testes/ping.routes.js";

// Usuários
import { userRoutes } from "./usuarios/user.routes.js";

// Tickets
import { ticketRoutes } from "./chamados/ticket.routes.js";



// Exportação das rotas da API
export async function routes(fastify: FastifyInstance) {
  
  fastify.register(pingRoute);
  fastify.register(homeRoute);

  fastify.register(userRoutes);

  fastify.register(ticketRoutes);
}