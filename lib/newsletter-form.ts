"use server";
import { prisma } from "@/app/db/prisma";

interface subscribeToNewsletterFormProps {
  name: string;
  email: string;
  companyName: string;
  companyAuthorityName: string | null;
  companyAuthorityEmail: string | null;
  companyAuthorityDesignation: string | null;
}

export async function subscribeToNewsletterForm({
  name,
  email,
  companyName,
  companyAuthorityName,
  companyAuthorityEmail,
  companyAuthorityDesignation,
}: subscribeToNewsletterFormProps) {
  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (user) {
      throw new Error("Already subscribed to the Newsletter!");
    }

    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            companyName,
            companyAuthorityName,
            companyAuthorityEmail,
            companyAuthorityDesignation,
        },
    });

    return newUser;
  } catch (error) {
    console.error("Error submitting the form:", error);
    throw new Error("Unable to subscribe to the Newsletter!");
  }
}
