import { prisma } from "../../../lib/prisma/prisma.js";

interface CreateTicketDTO {
  titulo: string;
  assunto: string;
  urgencia: string;
  status: string;
}


export async function createTicketService(
  data: CreateTicketDTO
) {

  const ticket = await prisma.ticket.create({
    data: {
      titulo: data.titulo,
      assunto: data.assunto,
      urgencia: data.urgencia,
      status: data.status,
    }
  });
  /*
    Aqui entra sua regra de negócio:

    - validar usuário
    - verificar permissão
    - gerar protocolo
    - enviar email
    - salvar no banco
  */


  const ticket = {
    id: 11,
    titulo: data.titulo,
    assunto: data.assunto,
    urgencia: data.urgencia,
    status: data.status,
    createdAt: new Date()
  };


  return ticket;

}



export async function getTicketsService() {

  /*
    Futuramente:

    return ticketRepository.findAll()
  */


  return [
    {
      id: 1,
      titulo: "Computador não liga",
      status: "Aberto"
    }
  ];

}