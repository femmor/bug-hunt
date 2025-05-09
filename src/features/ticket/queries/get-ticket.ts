import { prisma } from "@/lib/prisma";
import { Ticket } from "../../../../prisma/generated/prisma/client";

export const getTicketById = async (ticketId: string) => {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: {
        id: ticketId,
      },
    });

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    return ticket as Ticket;
  } catch (error) {
    console.log("Error fetching ticket:", error);
    throw new Error("Failed to fetch ticket");
  }
};
