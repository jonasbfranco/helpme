import type { FastifyInstance } from "fastify";

import { createTicket, getTickets, updateTicket } from "../../controllers/tickets/ticket-controller.js";

export async function ticketRoutes(fastify: FastifyInstance) {

  fastify.post("/tickets", createTicket);

  fastify.get("/tickets", getTickets);

  fastify.put("/tickets/:id", updateTicket);

  //fastify.get("/tickets/:id", getTicketById);


}