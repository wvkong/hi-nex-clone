import { Search } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

import { SearchInput } from "./search-input";

export const SearchBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Search className="h-7 w-7 text-[#022d62]" />
      </SheetTrigger>
      <SheetContent side="top" className="bg-[#022d62] text-white">
        <div className="mx-auto my-20 w-full max-w-6xl font-body">
          <SheetHeader>
            <Logo isWhite />
          </SheetHeader>
          <div className="mt-20">
            <SearchInput />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
