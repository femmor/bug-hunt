import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketsPath } from "@/paths";
import Link from "next/link";
import { TICKET_ICONS } from "../constants";
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Ticket } from "@prisma/client";

export interface TicketProps {
  ticket: Ticket;
  isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail }: TicketProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={`${ticketsPath}/${ticket.id}`}>
        <SquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
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
      {!isDetail && <div className="flex flex-col gap-y-2">{detailButton}</div>}
    </div>
  );
};
export default TicketItem;
