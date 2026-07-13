import type { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../../lib/prisma/prisma.js"

import {
    createPerfilService,
    getPerfisService,
} from "../../services/perfil/perfil.service.js";

interface CreatePerfilBody {
    nome: string;
    descricao: string;
}

    export async function createPerfil(request: FastifyRequest, reply: FastifyReply,) {
        
        try {

            const { nome, descricao } = request.body as CreatePerfilBody;


            const perfilExist = await prisma.perfil.findUnique({
                where: {
                    nome,
                },
            });

            // console.log(`Passou aqui: ${JSON.stringify(perfilExist)}`);

            // console.log("perfilExist:", perfilExist);
            if (perfilExist) {
                // throw new Error("Perfil já existe");
                return reply.status(409).send({
                    message: "Perfil já existe",
                });
            }
            

            console.log("Request body:", request.body);

            const perfil = await createPerfilService({
                nome,
                descricao,
            });

            return reply.status(201).send({
                message: "Perfil criado",
                data: perfil,
            });
        } catch (error) {
            console.error("Erro ao criar perfil:", error);

            return reply.status(500).send({
                message: "Erro ao criar perfil",
            });
        }
    }

    export async function getPerfil(request: FastifyRequest, reply: FastifyReply) { 
        
        try {
            const perfis = await getPerfisService();

            return reply
                .status(200)
                .send({ message: "Perfis encontrados", data: perfis });
            
        } catch (error) {
            return reply
                .status(500)
                .send({ message: "Erro ao buscar perfis", data: [] });
        }

    }

    

    