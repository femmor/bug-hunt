import { initialTickets } from "@/data";
import { Ticket } from "../types";

export const getTicketById = async (
  ticketId: string,
): Promise<Ticket | null> => {
  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  return new Promise((resolve) => resolve(ticket || null));
};
