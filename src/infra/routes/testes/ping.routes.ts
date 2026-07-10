import type { FastifyInstance } from "fastify";

export async function homeRoute(fastify: FastifyInstance) {
    fastify.get("/", async (request, reply) => {
        return reply.status(200).send({ message: "Bem vindo!" });
    });
}

export async function pingRoute(fastify: FastifyInstance) {
    fastify.get("/ping", async (request, reply) => {
        return reply.status(200).send({ pong: "I'm working!" });
    });
}
