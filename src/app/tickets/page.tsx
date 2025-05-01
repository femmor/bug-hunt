"use client";

import { Heading } from "@/components/heading";
import TicketItem from "@/features/ticket/components/ticket-item";
import { useEffect, useState } from "react";
import { getTickets } from "@/features/ticket/queries/get-tickets";
import { Ticket } from "@/features/ticket/types";
import Loading from "@/components/loading";

const Tickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);

  const renderTickets = () => {
    return (
      <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    );
  };

  useEffect(() => {
    setLoading(true);
    getTickets()
      .then((data) => {
        setTickets(data as Ticket[]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching tickets:", error);
      });
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Tickets"
        description="View and manage your tickets"
        separator
      />

      {loading ? <Loading /> : renderTickets()}
    </div>
  );
};

export default Tickets;
