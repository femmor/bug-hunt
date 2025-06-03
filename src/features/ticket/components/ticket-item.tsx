import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketsPath } from "@/paths";
import Link from "next/link";
import { TICKET_ICONS } from "../constants";
import { LucideTrash2, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { deleteTicket } from "../actions/delete-ticket";

export interface TicketItemProps {
  // Makes typing closer to getTickets return type
  // ticket:
  //   | Awaited<ReturnType<typeof getTickets>>[number]
  //   | Awaited<ReturnType<typeof getTicketById>>;
  ticket: {
    id: string;
    title: string;
    content: string;
    status: keyof typeof TICKET_ICONS;
  };
  isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={`${ticketsPath}/${ticket.id}`}>
        <SquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant="destructive" size="icon" className="cursor-pointer">
        <LucideTrash2 className="h-4 w-4" />
      </Button>
    </form>
  );

  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">
            <span className="flex items-center gap-x-2">
              {TICKET_ICONS[ticket.status]} {ticket.title}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-2">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
};
export default TicketItem;
