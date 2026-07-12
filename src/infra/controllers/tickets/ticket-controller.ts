import type { FastifyRequest, FastifyReply } from "fastify";
import {
    createTicketService,
    getTicketsService,
} from "../../services/ticket/ticket.service.js";

interface CreateTicketBody {
    titulo: string;
    assunto: string;
    urgencia: string;
    status: string;
    criador: string;
    analista: string;
}

export async function createTicket(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    try {
        const { titulo, assunto, urgencia, status, criador, analista } =
            request.body as CreateTicketBody;

        console.log("Request body:", request.body);

        const ticket = await createTicketService({
            titulo,
            assunto,
            urgencia,
            status,
            criador,
            analista,
        });

        return reply.status(201).send({
            message: "Chamado criado",
            data: ticket,
        });
    } catch (error) {
        console.error("Erro ao criar ticket:", error);

        return reply.status(500).send({
            message: "Erro ao criar chamado",
        });
        // return reply.status(500).send({ message: "Erro ao criar chamado" });
    }
}

export async function getTickets(request: FastifyRequest, reply: FastifyReply) {
    const tickets = await getTicketsService();

    return reply
        .status(200)
        .send({ message: "Chamados encontrados", data: tickets });
}


export async function updateTicket(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    try {
        const { id } = request.params as { id: string };
        const { titulo, assunto, urgencia, status, criador, analista } = request.body as CreateTicketBody;

        /* const ticket = await updateTicketService(id, {
            titulo,
            assunto,
            urgencia,
            status,
            criador,
            analista,
        }); 

        return reply.status(200).send({
            message: "Chamado atualizado",
            data: ticket,
        }); */
    } catch (error) {
        console.error("Erro ao atualizar ticket:", error);

        return reply.status(500).send({
            message: "Erro ao atualizar chamado",
        });
    }
}