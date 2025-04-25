import { BugOff } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <div className="flex align-items justify-between p-4 border-b">
        <Link
          href="/"
          className="flex items-center gap-x-2 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <BugOff />
          <h1 className="text-lg font-semibold">BugHunts</h1>
        </Link>
        <div className="flex items-center gap-x-4">
          <Link
            href="/tickets"
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline"
          >
            Tickets
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Header };
