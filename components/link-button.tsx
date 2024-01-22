import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface LinkButtonProps {
  href: string;
  className?: string;
  title: string;
}

export const LinkButton = ({ href, className, title }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      prefetch={false}
      className={cn(
        "relative z-[1] inline-flex items-center justify-center gap-2 rounded-[50px] px-8 py-4 text-sm font-bold text-white transition-all duration-300 ease-in-out before:absolute before:left-0 before:top-0 before:-z-[1] before:h-full before:w-[60px] before:rounded-[50px] before:bg-[#ef3139] before:opacity-90 before:transition-all before:duration-300 before:ease-in-out before:content-[''] before:hover:w-full lg:pr-4",
        className,
      )}
    >
      {title}
      <ArrowRight className="h-5 w-5" />
    </Link>
  );
};
