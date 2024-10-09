/* eslint-disable react/no-unescaped-entities */
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function AccordionDemo() {
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-4xl"
        style={{ fontFamily: "var(--maxima-nouva-normal)" }}
      >
        <AccordionItem
          className="hover:shadow-sm border border-neutral-100 px-4 rounded-xl my-2"
          value="item-1"
        >
          <AccordionTrigger className="text-lg hover:no-underline">
            What is Berri?
          </AccordionTrigger>
          <AccordionContent className="text-secondary">
            Berri is a mental wellness platform designed for corporate employees.
            We provide quick, easy access to support through 15-minute sessions,
            24/7 chat, and daily insights, all while keeping your identity secure
            and private.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem
          className="hover:shadow-sm border border-neutral-100 px-4 rounded-xl my-2"
          value="item-2"
        >
          <AccordionTrigger className="text-lg hover:no-underline">
            How can I be part of Berri?
          </AccordionTrigger>
          <AccordionContent className="text-secondary">
            Currently, Berri is only available through partnered companies. If
            your company is partnered with us, simply sign up using your corporate
            ID.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem
          className="hover:shadow-sm border border-neutral-100 px-4 rounded-xl my-2"
          value="item-3"
        >
          <AccordionTrigger className="text-lg hover:no-underline">
            How can I contact you?
          </AccordionTrigger>
          <AccordionContent className="text-secondary">
            You can reach us through the Corporate Solution section on our website
            or by emailing us at{" "}
            <a href="mailto:support@berri.life" className="text-primary">
              support@berri.life
            </a>
            .
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem
          className="hover:shadow-sm border border-neutral-100 px-4 rounded-xl my-2"
          value="item-4"
        >
          <AccordionTrigger className="text-lg hover:no-underline">
            Who are Berri Buddies?
          </AccordionTrigger>
          <AccordionContent className="text-secondary">
            Berri Buddies are mental health professionals offering support for
            stress, anxiety, and everyday challenges. They are trained to provide
            non-clinical guidance through short, focused sessions and 24/7 chat.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem
          className="hover:shadow-sm border border-neutral-100 px-4 rounded-xl my-2"
          value="item-5"
        >
          <AccordionTrigger className="text-lg hover:no-underline">
            Are Berri Buddies Therapists?
          </AccordionTrigger>
          <AccordionContent className="text-secondary">
            Berri Buddies may not always be licensed therapists. They are trained
            professionals who specialize in providing daily support, not clinical
            therapy.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem
          className="hover:shadow-sm border border-neutral-100 px-4 rounded-xl my-2"
          value="item-6"
        >
          <AccordionTrigger className="text-lg hover:no-underline">
            Is this treatment for mental illness?
          </AccordionTrigger>
          <AccordionContent className="text-secondary">
            No, Berri is designed to help with everyday stress and challenges, not
            clinical treatment for mental illness. If more severe support is
            needed, we will recommend connecting with a licensed therapist.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem
          className="hover:shadow-sm border border-neutral-100 px-4 rounded-xl my-2"
          value="item-7"
        >
          <AccordionTrigger className="text-lg hover:no-underline">
            How long are the sessions?
          </AccordionTrigger>
          <AccordionContent className="text-secondary">
            Each session lasts 15 minutes, designed to provide quick, focused
            guidance on whatever you're dealing with at the moment.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem
          className="hover:shadow-sm border border-neutral-100 px-4 rounded-xl my-2"
          value="item-8"
        >
          <AccordionTrigger className="text-lg hover:no-underline">
            Will my employer know what I talk about?
          </AccordionTrigger>
          <AccordionContent className="text-secondary">
            Absolutely not. All conversations on Berri are 100% private,
            anonymous, and encrypted. Your employer will never have access to your
            sessions or personal information.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem
          className="hover:shadow-sm border border-neutral-100 px-4 rounded-xl my-2"
          value="item-9"
        >
          <AccordionTrigger className="text-lg hover:no-underline">
            Is Berri available outside of work hours?
          </AccordionTrigger>
          <AccordionContent className="text-secondary">
            Yes, Berri's chat support is available 24/7, so you can access help
            whenever you need it.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem
          className="hover:shadow-sm border border-neutral-100 px-4 rounded-xl my-2"
          value="item-10"
        >
          <AccordionTrigger className="text-lg hover:no-underline">
            What types of issues can Berri help with?
          </AccordionTrigger>
          <AccordionContent className="text-secondary">
            Berri can help with a range of issues, including work-related stress,
            relationship challenges, anxiety, or simply needing someone to talk
            to.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  