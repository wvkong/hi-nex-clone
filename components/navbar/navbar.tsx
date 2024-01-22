"use client";

import { Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

import { NavTopBar } from "./nav-top-bar";
import { NavRoutes } from "./nav-routes";
import { MobileNav } from "./mobile-nav";
import { SearchBar } from "./search-bar";
import { Socials } from "./socials";

export const Navbar = () => {
  const scroll = useScroll();

  return (
    <header className="fixed z-50 flex w-full flex-col bg-white font-body shadow-md">
      <div
        className={cn(
          "hidden border-b-2 border-[#022d621a] px-[30px] py-[10px] md:block",
          scroll && "md:hidden",
        )}
      >
        <NavTopBar />
      </div>
      <div
        className={cn(
          "flex items-center px-5 py-3 transition-all ease-in-out xs:py-5 md:py-[30px] lg:px-[37px]",
          scroll && "py-2 xs:py-4 md:py-4 lg:py-3",
        )}
      >
        <div className="mr-[15px]">
          <Logo />
        </div>
        <nav className="ml-5 hidden lg:block">
          <NavRoutes />
        </nav>
        <div className="ml-auto flex items-center gap-6">
          <div className="flex gap-5">
            <SearchBar />
            <div className="hidden gap-5 lg:flex">
              <Socials />
              <div className="flex shrink items-center border-l pl-5">
                <Phone className="h-9 w-9 fill-[#ef3139] text-transparent" />
                <div className="flex-wra ml-4 flex flex-col">
                  <span className="line-clamp-1 select-none text-[#777777]">
                    Have Any Questions?
                  </span>
                  <span className="font-bold text-[#022d62]">
                    +254790482160
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="block lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};
