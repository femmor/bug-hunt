import { CircleCheckBig, File, Hourglass } from "lucide-react";

export const TICKET_ICONS = {
  OPEN: (
    <div className="text-blue-500">
      <File />
    </div>
  ),
  CLOSED: (
    <div className="text-green-500">
      <CircleCheckBig />
    </div>
  ),
  "IN PROGRESS": (
    <div className="text-yellow-500">
      <Hourglass />
    </div>
  ),
};
