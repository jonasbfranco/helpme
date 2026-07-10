import type { FastifyInstance } from "fastify";

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/users", async () => {
    return {
      message: "Lista de usuários",
    };
  });

  fastify.post("/users", async (request, reply) => {
    return reply.status(201).send({message: "Usuário criado"});
  });
}