import { ticketsPath } from "@/paths";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl">Welcome to the Home Page</h1>
      <Link href={ticketsPath} className="underline">
        Go to Tickets
      </Link>
    </div>
  );
};

export default HomePage;
