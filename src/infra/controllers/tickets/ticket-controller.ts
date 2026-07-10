import type { FastifyRequest, FastifyReply } from "fastify";
import { createTicketService, getTicketsService } from "../../services/ticket/ticket.service.js";

interface CreateTicketBody {
  titulo: string;
  assunto: string;
  urgencia: string;
  status: string;
}



export async function createTicket(request: FastifyRequest, reply: FastifyReply) {
  const { titulo, assunto, urgencia, status } = request.body as {
    titulo: string;
    assunto: string;
    urgencia: string;
    status: string;
  };    

  const ticket = await createTicketService({
    titulo,
    assunto,
    urgencia,
    status
  });


   return reply.status(201).send({
    message: "Chamado criado",
    data: ticket
  });
}


export async function getTickets(request: FastifyRequest, reply: FastifyReply) {
  
    const tickets = await getTicketsService();
  
    return reply.status(200).send({ message: "Chamados encontrados", data: tickets });
}