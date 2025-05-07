export type TicketStatus = "OPEN" | "CLOSED" | "IN_PROGRESS";

export interface Ticket {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
}
