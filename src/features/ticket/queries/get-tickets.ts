import { initialTickets } from "@/data";
import { Ticket } from "../types";

export const getTickets = async () => {
  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise<Ticket[]>((resolve) => resolve(initialTickets));
};
