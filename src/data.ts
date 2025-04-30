import { Ticket } from "./features/ticket/types";

export const initialTickets: Ticket[] = [
  {
    id: "1",
    title: "Ticket 1",
    content:
      "This is the content of ticket 1. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    status: "OPEN" as const,
  },
  {
    id: "2",
    title: "Ticket 2",
    content:
      "This is the content of ticket 2. It has a lot of information and details about the ticket. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    status: "CLOSED" as const,
  },
  {
    id: "3",
    title: "Ticket 3",
    content:
      "This is the content of ticket 3. It has a lot of information and details about the ticket. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: "IN PROGRESS" as const,
  },
];
