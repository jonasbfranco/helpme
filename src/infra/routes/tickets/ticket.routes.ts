import type { FastifyInstance } from "fastify";

import { createTicket, getTickets, updateTicket } from "../../controllers/tickets/ticket-controller.js";

export async function ticketRoutes(fastify: FastifyInstance) {

  fastify.post("/tickets", createTicket);

  fastify.get("/tickets", getTickets);

  fastify.put("/tickets/:id", updateTicket); //botao atribuir ou trocar analista

  //fastify.get("/tickets/:id", getTicketById); // buscar por um chamado especifico

  // fastify.delete("/tickets/:id", deleteTicket); // deletar chamado

  // fastify.get("/tickets/analyst/:analystId", getTicketsByAnalyst); // buscar chamados por analista

  // fastify.get("/tickets/creator/:creatorId", getTickets); // buscar chamados por criador

  // fastify.get("/tickets/status/:status", getTicketsByStatus); // buscar chamados por status

  // fastify.get("/tickets/urgency/:urgency", getTicketsByUrgency); // buscar chamados por urgencia

  // fastify.get("/tickets/subject/:subject", getTicketsBySubject); // buscar chamados por assunto

  // fastify.get("/tickets/title/:title", getTicketsByTitle); // buscar chamados por titulo

  // fastify.get("/tickets/date/:date", getTicketsByDate); // buscar chamados por data

  // fastify.get("/tickets/protocol/:protocol", getTicketsByProtocol); // buscar chamados por protocolo

  // fastify.get("/tickets/priority/:priority", getTicketsByPriority); // buscar chamados por prioridade

  // fastify.get("/tickets/department/:department", getTicketsByDepartment); // buscar chamados por departamento

  // fastify.get("/tickets/category/:category", getTicketsByCategory); // buscar chamados por categoria

  // fastify.get("/tickets/label/:label", getTicketsByLabel); // buscar chamados por label

  // fastify.get("/tickets/attachment/:attachment", getTicketsByAttachment); // buscar chamados por anexo

  // fastify.get("/tickets/comment/:comment", getTicketsByComment); // buscar chamados por comentario

  // fastify.get("/tickets/history/:history", getTicketsByHistory); // buscar chamados por historico

  // fastify.get("/tickets/related/:related", getTicketsByRelated); // buscar chamados por relacionado

  // fastify.get("/tickets/linked/:linked", getTicketsByLinked); // buscar chamados por vinculado

  // fastify.get("/tickets/duplicate/:duplicate", getTicketsByDuplicate); // buscar chamados por duplicado


}