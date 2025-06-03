import TicketItem from "./ticket-item";
import { getTickets } from "../queries/get-tickets";
import { notFound } from "next/navigation";

const TicketList = async () => {
  const tickets = await getTickets();

  if (!tickets || tickets.length === 0) {
    return notFound();
  }

  return (
    <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};
export default TicketList;
