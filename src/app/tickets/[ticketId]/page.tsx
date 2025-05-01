import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import TicketItem from "@/features/ticket/components/ticket-item";
import { getTicketById } from "@/features/ticket/queries/get-ticket";
import Link from "next/link";
import { use } from "react";

type TicketProps = Promise<{ ticketId: string }>;

const Ticket = ({ params }: { params: TicketProps }) => {
  const { ticketId } = use(params);

  const ticket = use(getTicketById(ticketId));

  if (!ticket) {
    return (
      <Placeholder
        label={`Ticket not found for id '${ticketId}'`}
        button={
          <Button className="mt-2" variant="outline">
            <Link href="/tickets">Back to tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default Ticket;
