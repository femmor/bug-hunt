import { Heading } from "@/components/heading";
import Loading from "@/components/loading";
import TicketList from "@/features/ticket/components/ticket-list";
import { Suspense } from "react";

const Tickets = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Tickets"
        description="View and manage your tickets"
        separator
      />
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default Tickets;
