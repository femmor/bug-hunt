import { initialTickets } from "@/data";

interface TicketProps {
  params: {
    ticketId: string;
  };
}

const TICKET_ICONS = {
  OPEN: "O",
  CLOSED: "X",
  "IN PROGRESS": ">",
};

const Ticket = async ({ params }: TicketProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <p className="text-lg text-center py-4 text-gray-500">
        Ticket not found!
      </p>
    );
  }

  return (
    <div>
      <div>{TICKET_ICONS[ticket.status]}</div>
      <h2 className="text-lg">{ticket?.title}</h2>
      <p className="text-sm">{ticket?.content}</p>
    </div>
  );
};

export default Ticket;
