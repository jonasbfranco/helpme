import type { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../../lib/prisma/prisma.js"

import {
    createPerfilService,
    getPerfisService,
    editPerfisService,
} from "../../services/perfil/perfil.service.js";

interface CreatePerfilBody {
    nome: string;
    descricao: string;
}


export async function createPerfil(request: FastifyRequest, reply: FastifyReply,) {
    
    try {

        const { nome, descricao } = request.body as CreatePerfilBody;
        

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
        if (error instanceof Error && error.message === "Perfil já existe") {
            return reply.status(409).send({
                message: error.message,
            });
        }
        //console.error("Erro ao criar perfil:", error);

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


export async function editPerfil(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id }  = request.params as { id: string };
        const { nome, descricao } = request.body as CreatePerfilBody;
        // console.log("Request params:", id);
        // console.log("Nome:", nome, "Descrição:", descricao)
        // console.log(JSON.stringify(request.params));

        const perfil = await editPerfisService({
            id: Number(id),
            nome: nome,
            descricao:  descricao,
        });

        return reply
            .status(200)
            .send({ message: "Perfil alterado", data: perfil });

    } catch (error) {
        if (error instanceof Error && error.message === "Perfil não encontrado") {
            return reply.status(404).send({
                message: error.message,
            });
        }   
    }
}

    

    