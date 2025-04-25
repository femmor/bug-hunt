import { ticketsPath } from "@/paths";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome to the Home Page
        </h2>
        <p className="text-sm text-muted-foreground">Start here...</p>
      </div>

      <div className="flex flex-1 flex-col items-center">
        <Link href={ticketsPath} className="underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
