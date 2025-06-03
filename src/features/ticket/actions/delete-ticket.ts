"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: { id },
  });

  redirect("/tickets");
};
