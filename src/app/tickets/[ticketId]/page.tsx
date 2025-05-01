import TicketItem from "@/features/ticket/components/ticket-item";
import { getTicketById } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";
import { use } from "react";

type TicketProps = Promise<{ ticketId: string }>;

const Ticket = ({ params }: { params: TicketProps }) => {
  const { ticketId } = use(params);

  const ticket = use(getTicketById(ticketId));

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default Ticket;
