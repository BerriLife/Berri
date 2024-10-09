"use server";
import { prisma } from "@/app/db/prisma";

interface subscribeToNewsletterProps {
  email: string;
}

export async function subscribeToNewsletter({ email }: subscribeToNewsletterProps) {
  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (user) {
      throw new Error("Already subscribed to the Newsletter!");
    }

    const newUser = await prisma.user.create({
      data: { email },
    });

    return newUser;
  } catch (error) {
    console.error("Error adding the user", error);
    throw new Error("Unable to subscribe to the Newsletter!");
  }
}
