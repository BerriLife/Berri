"use server";
import { prisma } from "@/app/db/prisma";

interface requestCallbackFormProps {
  companyName: string;
  companyAuthorityName: string;
  companyAuthorityContact: string;
  companyAuthorityEmail: string;
  companyAuthorityDesignation: string;
}

export async function requestCallbackForm({
  companyName,
  companyAuthorityName,
  companyAuthorityContact,
  companyAuthorityEmail,
  companyAuthorityDesignation,
}: requestCallbackFormProps) {
  try {

    const newCompany = await prisma.company.create({
        data: {
            companyName,
            companyAuthorityName,
            companyAuthorityContact,
            companyAuthorityEmail,
            companyAuthorityDesignation,
        },
    });

    return newCompany;
  } catch (error) {
    console.error("Error submitting the form:", error);
    throw new Error("Unable to request a callback!");
  }
}
