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
import { MapProps } from "@/data/data";

export const NavItem = ({ category }: { category: MapProps }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem key={category.title}>
          <NavigationMenuTrigger className="flex cursor-pointer items-center text-lg font-semibold text-[#022d62] transition duration-300 hover:text-red-500">
            {category.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex w-full flex-col space-y-2 px-8 py-4">
            {category.data.map((page) => (
              <Link
                key={page.href}
                prefetch={false}
                href={page.href}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {page.title}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
