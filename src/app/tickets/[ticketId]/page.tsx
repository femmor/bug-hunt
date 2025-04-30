"use client";

import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TicketProps {
  params: Promise<{
    ticketId: string;
  }>;
}

const Ticket = ({ params }: TicketProps) => {
  const [ticketId, setTicketId] = useState("");
  const [resolvedParams, setResolvedParams] = useState<{
    ticketId: string;
  } | null>(null);

  useEffect(() => {
    params.then((resolved) => {
      setResolvedParams(resolved);
      setTicketId(resolved.ticketId);
    });
  }, [params]);

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!resolvedParams) {
    return (
      <p className="text-lg text-center py-4 text-gray-500">
        <LoaderCircle className="animate-spin mx-auto my-2 w-20 h-20" />
      </p>
    );
  }

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
