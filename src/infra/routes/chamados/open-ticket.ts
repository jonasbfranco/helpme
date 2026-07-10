import type { FastifyInstance } from "fastify";

export async function openTicketRoute(fastify: FastifyInstance) {
    fastify.get("/openticket", async (request, reply) => {
        return reply.status(200).send({ message: "Open Ticket!" });
    });
}
