"use client";

import { initialTickets } from "@/data";
import { LoaderCircle } from "lucide-react";
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
      <p className="text-lg text-center py-4 text-gray-500">
        Ticket not found!
      </p>
    );
  }

  return (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  );
};

export default Ticket;
