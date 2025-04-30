import { Heading } from "@/components/heading";
import { ticketsPath } from "@/paths";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="BugHunts Ticketing System"
        description="Manage your tickets efficiently"
        separator
      />

      <div className="flex flex-1 flex-col items-center">
        <Link href={ticketsPath} className="underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
