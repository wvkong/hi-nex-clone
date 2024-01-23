import {
  Dribbble,
  Facebook,
  Github,
  Grip,
  Linkedin,
  Twitter,
} from "lucide-react";

import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const socialsMap = [
  {
    Icon: Facebook,
    title: "Facebook",
  },
  {
    Icon: Twitter,
    title: "Twitter",
  },
  {
    Icon: Linkedin,
    title: "LinkedIn",
  },
  {
    Icon: Github,
    title: "Github",
  },
  {
    Icon: Dribbble,
    title: "Dribbble",
  },
];

export const Socials = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Grip aria-label="socials" className="h-7 w-7 text-[#022d62]" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex h-full flex-col py-10 pl-10 pr-10"
      >
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <div className="mt-10 font-body">
          <p className="tracking-wider">
            Positive pleasure-oriented goals are much more powerful motivators
            than negative fear-based ones. Although each is successful
            separately
          </p>
          <div className="mt-20">
            <ul>
              {socialsMap.map((social) => (
                <li key={social.title} className="py-3">
                  <a href="https://hi-nex.com" className="flex gap-4">
                    <social.Icon
                      className={cn(
                        "fill-[#ef3139] text-transparent",
                        social.Icon === Dribbble && "text-white",
                      )}
                    />
                    <span className="text-xl text-[#022d62]">
                      {social.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-auto border-t py-8">
          <p className="mb-3 text-lg text-[#969696]">letstalk@hi-nex.com</p>
          <span className="text-2xl font-bold text-[#022d62]">
            +(254) 90482160
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
};
