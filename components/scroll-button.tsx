"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!backToTop) return null;

  return (
    <div
      onClick={scrollUp}
      className="group fixed bottom-6 right-6 z-50 flex h-9 w-9 cursor-pointer items-center justify-center rounded-[50%] bg-[#ef3139] shadow-2xl xs:bottom-7 xs:right-7 xs:h-11 xs:w-11"
    >
      <ArrowUp className="text-white xs:h-7 xs:w-7 xs:group-hover:animate-bounce" />
    </div>
  );
};
