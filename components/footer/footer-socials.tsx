import { Facebook, Twitter, Linkedin, Github, Dribbble } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/logo";
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

export const FooterSocials = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center">
      <Logo />
      <div className=" mt-6 sm:ml-auto sm:mt-0">
        <ul className="flex gap-10">
          {socialsMap.map((social) => (
            <li key={social.title}>
              <Link aria-label={social.title} href="/" prefetch={false}>
                <social.Icon
                  className={cn(
                    "h-7 w-7 fill-[#022d62] text-transparent transition duration-300 hover:fill-[#ef3139]",
                    social.Icon === Dribbble && "text-white",
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
