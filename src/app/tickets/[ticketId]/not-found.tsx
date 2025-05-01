import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <Placeholder
      label={`404 - Page not found`}
      button={
        <Button className="my-4" variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      }
    />
  );
};
export default NotFound;
