"use client";

import qs from "query-string";
import { useState } from "react";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentSearch = searchParams.get("search");

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          search: value,
        },
      },
      { skipEmptyString: true, skipNull: true },
    );

    router.push(`/search/${url}`);
  };

  return (
    <div className="flex border-b-2 border-[#ffffff33] px-2 py-4">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-full border-none bg-transparent text-xl text-white outline-none placeholder:text-gray-400 md:text-2xl lg:text-4xl"
        placeholder="What are you looking for?"
      />
      <div onClick={onClick} className="cursor-pointer p-2">
        <Search className="h-7 w-7 text-red-500" />
      </div>
    </div>
  );
};
