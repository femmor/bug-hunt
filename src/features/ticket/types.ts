export type TicketStatus = "OPEN" | "CLOSED" | "IN PROGRESS";

export interface Ticket {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
}
