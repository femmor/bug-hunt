import { initialTickets } from "@/data";
import { Ticket } from "../types";

export const getTickets = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return new Promise<Ticket[]>((resolve) => resolve(initialTickets));
};
