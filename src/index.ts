// Import the framework and instantiate it
import Fastify from "fastify";
import cors from "@fastify/cors";
import "dotenv/config";
import { routes } from "../src/infra/routes/routes.js";


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


// Registro das rotas da API
fastify.register(routes);


// Execução do Servidor da API
const PORT = Number(process.env.PORT) || 3333;

try {
    const address = await fastify.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`🚀 Server running at ${address}`);
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
