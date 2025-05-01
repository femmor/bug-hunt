import { Heading } from "@/components/heading";
import TicketItem from "@/features/ticket/components/ticket-item";
import { getTickets } from "@/features/ticket/queries/get-tickets";

const Tickets = async () => {
  const tickets = await getTickets();

  const renderTickets = () => {
    return (
      <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Tickets"
        description="View and manage your tickets"
        separator
      />

      {renderTickets()}
    </div>
  );
};

export default Tickets;
