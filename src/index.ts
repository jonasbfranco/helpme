// Import the framework and instantiate it
import Fastify from "fastify";
import cors from "@fastify/cors";
import "dotenv/config";

// Importação das rotas da API
import { homeRoute, pingRoute } from "../src/infra/routes/testes/ping.js";

// Instanciação do Fastify
const fastify = Fastify({
    // para ativar o logs do Pino
    //logger: true,
});

// Configuração do CORS
fastify.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
});

// rotas de testes da API
fastify.register(homeRoute);
fastify.register(pingRoute);

// Execução do Servidor da API
const PORT = Number(process.env.PORT) || 3333;

try {
    const address = await fastify.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`🚀 Server running at ${address}`);
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
