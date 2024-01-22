import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

export const NavTopBar = () => {
  return (
    <div className="flex px-3 text-sm">
      <div className="flex gap-7">
        <Link
          prefetch={false}
          href="mailto:letstalk@hi-nex.com"
          className="line-clamp-none flex items-center font-semibold text-[#022d62] transition duration-300 ease-in-out hover:text-red-500"
        >
          <Mail className="mr-[10px] h-5 w-5 text-red-500" />
          letstalk@hi-nex.com
        </Link>
        <Link
          prefetch={false}
          href="/contact"
          className="flex items-center font-semibold text-[#022d62] transition duration-300 ease-in-out hover:text-red-500"
        >
          <MapPin className="mr-[10px] h-5 w-5 fill-red-500 text-white" />
          Nairobi kenya Monrovia, Street
        </Link>
      </div>
      <div className="ml-auto flex gap-7">
        <Link
          prefetch={false}
          href="/careers"
          className="flex items-center font-semibold text-[#022d62] transition duration-300 ease-in-out hover:text-red-500"
        >
          Careers
        </Link>
        <Link
          prefetch={false}
          href="/blog"
          className="flex items-center font-semibold text-[#022d62] transition duration-300 ease-in-out hover:text-red-500"
        >
          News & Media
        </Link>
        <Link
          prefetch={false}
          href="/faq"
          className="flex items-center font-semibold leading-7 text-[#022d62] transition duration-300 ease-in-out hover:text-red-500"
        >
          FAQ
        </Link>
      </div>
    </div>
  );
};
