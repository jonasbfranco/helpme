import { prisma } from "../../../lib/prisma/prisma.js";

interface CreateTicketDTO {
  titulo: string;
  assunto: string;
  urgencia: string;
  status: string;
  criador: string;
  analista: string;
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
      criador: data.criador,
      analista: data.analista,
    }
  });

  console.log("Ticket criado:", ticket);

  /*
    Aqui entra sua regra de negócio:

    - validar usuário
    - verificar permissão
    - gerar protocolo
    - enviar email
    - salvar no banco
  */


    return {
      ticket,
    };
}



export async function getTicketsService() {

  /*
    Futuramente:

    return ticketRepository.findAll()
  */


    const ticket = await prisma.ticket.findMany();

    return ticket;

  /* return [
    {
      id: 1,
      titulo: "Computador não liga",
      status: "Aberto"
    }
  ];
 */
}