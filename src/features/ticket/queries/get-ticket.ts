import { prisma } from "@/lib/prisma";
import { Ticket } from "../../../../prisma/generated/prisma/client";

export const getTicketById = async (ticketId: string) => {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
  });

  if (!ticket) {
    throw new Error("Ticket not found");
  }

  return ticket as Ticket;
};
