import { BugOff } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav>
      <div className="flex align-items justify-between px-8 py-4 border-b">
        <Button
          asChild
          variant="link"
          className="flex items-center gap-x-2 text-lg font-medium"
        >
          <Link href="/">
            <BugOff />
            <span className="text-gray-700">BugHunts</span>
          </Link>
        </Button>
        <div className="flex items-center gap-x-4">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline"
          >
            <Button className="cursor-pointer" variant="outline">
              Home
            </Button>
          </Link>
          <Link
            href="/tickets"
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline"
          >
            <Button className="cursor-pointer" variant="default">
              Tickets
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Header };
