import type { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../../lib/prisma/prisma.js"

import {
    createPerfilService,
    getPerfisService,
    editPerfisService,
    deletePerfilService,
    getPerfilAtivoService,
    getPerfilUnicoService,
} from "../../services/perfil/perfil.service.js";

interface CreatePerfilBody {
    nome: string;
    descricao: string;
    ativo?: boolean | undefined;
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


export async function getPerfilUnico(request: FastifyRequest, reply: FastifyReply) { 
    
    try {
        const { id }  = request.params as { id: string };
        // console.log("Request params:", id);
        
         const perfil = await getPerfilUnicoService(Number(id));

        return reply
            .status(200)
            .send({ message: "Perfil encontrado", data: perfil });
        
    } catch (error) {
        console.error(error);
        return reply
            .status(500)
            .send({ message: "Erro ao buscar o perfil unico", data: [] });
    }

}



export async function getPerfilAtivo(request: FastifyRequest, reply: FastifyReply) { 
    
    try {
        const perfis = await getPerfilAtivoService();

        return reply
            .status(200)
            .send({ message: "Perfis ativos encontrados", data: perfis });
        
    } catch (error) {
        return reply
            .status(500)
            .send({ message: "Erro ao buscar perfis ativos", data: [] });
    }

}


export async function editPerfil(request: FastifyRequest, reply: FastifyReply) {
    try {

        const { id }  = request.params as { id: string };
        const { nome, descricao, ativo } = request.body as CreatePerfilBody;
        // console.log("Request params:", id);
        // console.log("Nome:", nome, "Descrição:", descricao, "Ativo:", ativo)
        // console.log(JSON.stringify(request.params));

        const perfil = await editPerfisService({
            id: Number(id),
            nome: nome,
            descricao:  descricao,
            ...(ativo !== undefined && { ativo }),
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


export async function deletePerfil(request: FastifyRequest, reply: FastifyReply) {
    
    try {
        const { id }  = request.params as { id: string };
        const perfil = await deletePerfilService( Number(id) );
        

        return reply
            .status(200)
            .send({ message: "Perfil desativado com sucesso", data: perfil });
        
    } catch (error: any) {
        return reply.status(400).send({
            message: error.message,
        });
    }

}


    

    