import { initialTickets } from "@/data";

export const getTickets = async () => {
  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => resolve(initialTickets));
};
