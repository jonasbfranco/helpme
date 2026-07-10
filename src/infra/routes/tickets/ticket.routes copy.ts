import type { FastifyInstance } from "fastify";

export async function ticketRoutes(fastify: FastifyInstance) {

  fastify.get("/tickets", async (request, reply) => {
    return reply.status(200).send({ message: "Lista de chamados" });
  });

  fastify.post("/tickets", async (request, reply) => {
    const { titulo, assunto, urgencia, status } = request.body as {
      titulo: string;
      assunto: string;
      urgencia: string;
      status: string;
    };
    return reply.status(201).send({ message: "Chamado criado", data: { titulo, assunto, urgencia, status } });
  });

  fastify.get("/tickets/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    return reply.status(200).send({ message: `Detalhes do chamado ${id}` });
  });

  fastify.delete("/tickets/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    return reply.status(200).send({ message: `Chamado ${id} deletado` });
  });

}


