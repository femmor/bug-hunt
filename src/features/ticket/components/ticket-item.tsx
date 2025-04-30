import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ticketsPath } from "@/paths";
import Link from "next/link";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

export interface TicketProps {
  ticket: Ticket;
}

const TicketItem = ({ ticket }: TicketProps) => {
  return (
    <Card className="w-full max-w-[400px]">
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
  );
};
export default TicketItem;
