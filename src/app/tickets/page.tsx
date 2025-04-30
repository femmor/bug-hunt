import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuFileJson2 } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";

const TICKET_ICONS = {
  OPEN: (
    <div className="text-blue-500">
      <LuFileJson2 title="open" />
    </div>
  ),
  CLOSED: (
    <div className="text-green-500">
      <FaRegCheckCircle title="closed" />
    </div>
  ),
  "IN PROGRESS": (
    <div className="text-yellow-500">
      <BsHourglassSplit title="in progress" />
    </div>
  ),
};

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
          <Card key={ticket.id} className="w-full max-w-[400px]">
            <CardHeader>
              <CardTitle className="text-lg">
                <span className="flex items-center gap-x-2">
                  {TICKET_ICONS[ticket.status]} {ticket.title}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3">{ticket.content}</span>
            </CardContent>
            <CardFooter>
              <Link
                href={`${ticketsPath}/${ticket.id}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer hover:underline"
              >
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
