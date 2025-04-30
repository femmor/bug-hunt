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
import { CircleCheckBig, File, Hourglass } from "lucide-react";
import { Heading } from "@/components/heading";

const TICKET_ICONS = {
  OPEN: (
    <div className="text-blue-500">
      <File />
    </div>
  ),
  CLOSED: (
    <div className="text-green-500">
      <CircleCheckBig />
    </div>
  ),
  "IN PROGRESS": (
    <div className="text-yellow-500">
      <Hourglass />
    </div>
  ),
};

const Tickets = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Tickets"
        description="View and manage your tickets"
        separator
      />

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
