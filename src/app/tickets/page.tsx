import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";
import Link from "next/link";

const Tickets = () => {
  return (
    <div>
      <h1 className="text-4xl">Tickets Page</h1>
      {initialTickets.map((ticket) => (
        <div key={ticket.id} className="border p-4 my-2">
          <h2 className="text-lg">{ticket.title}</h2>
          <Link
            href={`${ticketsPath}/${ticket.id}`}
            className="text-blue-500 underline"
          >
            View
          </Link>
          <p>{ticket.content}</p>
          <small>status: {ticket.status}</small>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
