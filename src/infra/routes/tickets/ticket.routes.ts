import type { FastifyInstance } from "fastify";

import { createTicket, getTickets } from "../../controllers/tickets/ticket-controller.js";

export async function ticketRoutes(fastify: FastifyInstance) {

  fastify.post("/tickets", createTicket);

  fastify.get("/tickets", getTickets);

}