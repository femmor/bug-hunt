import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";
import Link from "next/link";

import clsx from "clsx";

const Tickets = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets Page</h2>
        <p className="text-sm text-muted-foreground">
          All your tickets in one place
        </p>
      </div>
      <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <div key={ticket.id} className="border p-4 w-full max-w-[400px]">
            <h2 className="text-lg">{ticket.title}</h2>
            <p
              className={clsx("text-sm text-slate-400 truncate", {
                "line-through": ticket.status === "CLOSED",
              })}
            >
              {ticket.content}
            </p>
            <Link
              href={`${ticketsPath}/${ticket.id}`}
              className="text-blue-500 underline"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
