"use client";

import { initialTickets } from "@/data";
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
    return <p className="text-lg text-center py-4 text-gray-500">Loading...</p>;
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
