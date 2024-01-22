"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { companyMap, homeMap, industriesMap, pagesMap } from "@/data/data";

export const MobileNav = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button
          size="sm"
          variant="secondary"
          className="transition-all duration-300 ease-in-out hover:bg-[#022d62] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 rounded"
          >
            <line x1="2" x2="20" y1="12" y2="12" />
            <line x1="2" x2="20" y1="6" y2="6" />
            <line x1="10" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-scroll">
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <Accordion type="single" collapsible className="mt-10 w-full">
          <AccordionItem value="menu-1">
            <AccordionTrigger className="font-body font-bold text-[#022d62] hover:text-red-500 hover:no-underline md:text-lg">
              {homeMap.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-3 pb-4 pl-4 font-body">
                {homeMap.data.map((page) => (
                  <Link
                    prefetch={false}
                    key={page.href}
                    href={page.href}
                    className="font-semibold text-[#022d62] md:text-lg"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="menu-2">
            <AccordionTrigger className="font-body font-bold text-[#022d62] hover:text-red-500 hover:no-underline md:text-lg">
              {pagesMap.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-3 pb-4 pl-4 font-body">
                {pagesMap.data.map((page) => (
                  <Link
                    prefetch={false}
                    key={page.href}
                    href={page.href}
                    className="font-semibold text-[#022d62] md:text-lg"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="menu-3">
            <AccordionTrigger className="font-body font-bold text-[#022d62] hover:text-red-500 hover:no-underline md:text-lg">
              {companyMap.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-3 pb-4 pl-4 font-body">
                {companyMap.data.map((page) => (
                  <Link
                    prefetch={false}
                    key={page.href}
                    href={page.href}
                    className="font-semibold text-[#022d62] md:text-lg"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="menu-4">
            <AccordionTrigger className="font-body font-bold text-[#022d62] hover:text-red-500 hover:no-underline md:text-lg">
              {industriesMap.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-3 pb-4 pl-4 font-body">
                {industriesMap.data.map((page) => (
                  <Link
                    prefetch={false}
                    key={page.href}
                    href={page.href}
                    className="font-semibold text-[#022d62] md:text-lg"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};
