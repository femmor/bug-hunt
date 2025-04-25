import { initialTickets } from "@/data";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";
import { LuFileJson2 } from "react-icons/lu";

interface TicketProps {
  params: {
    ticketId: string;
  };
}

const TICKET_ICONS = {
  OPEN: (
    <div className="text-blue-500 flex gap-1 items-center">
      <LuFileJson2 /> <span className="text-xs">OPEN</span>
    </div>
  ),
  CLOSED: (
    <div className="text-green-500 flex gap-1 items-center">
      <FaRegCheckCircle /> <span className="text-xs">CLOSED</span>
    </div>
  ),
  "IN PROGRESS": (
    <div className="text-yellow-500 flex gap-1 items-center">
      <BsHourglassSplit /> <span className="text-xs">IN PROGRESS</span>
    </div>
  ),
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
