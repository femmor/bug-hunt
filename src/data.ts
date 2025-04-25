export const initialTickets = [
  {
    id: "1",
    title: "Ticket 1",
    content:
      "This is the content of ticket 1 and it is very long and boring and I am not sure if it will fit in the box",
    status: "OPEN" as const,
  },
  {
    id: "2",
    title: "Ticket 2",
    content: "This is the content of ticket 2",
    status: "CLOSED" as const,
  },
  {
    id: "3",
    title: "Ticket 3",
    content: "This is the content of ticket 3",
    status: "IN PROGRESS" as const,
  },
];
