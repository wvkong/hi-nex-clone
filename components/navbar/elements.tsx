"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { elementsMap } from "@/data/data";

export const Elements = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem key={elementsMap.title}>
          <NavigationMenuTrigger className="duration-[400ms] flex cursor-pointer items-center text-lg font-semibold text-[#022d62] transition ease-in-out hover:text-red-500">
            {elementsMap.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex w-full gap-10 px-8 py-4">
            {elementsMap.data.map((section, index) => (
              <div key={index} className="flex flex-col items-start">
                <h2 className="text-xl font-bold text-red-500">Menu Item</h2>
                {section.map((page) => (
                  <Link
                    prefetch={false}
                    className="w-full pl-0"
                    key={page.href}
                    href={page.href}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {page.title}
                    </NavigationMenuLink>
                  </Link>
                ))}
              </div>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
