import Link from "next/link";

import {
  companyFooterMap,
  itServicesFooterMap,
  supportFooterMap,
} from "@/data/data";

export const FooterMain = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex">
      <div className="w-full lg:w-2/6">
        <h3 className="mb-6 font-body text-xl font-bold text-[#ef3139]">
          {itServicesFooterMap.title}
        </h3>
        <ul className="grid w-full grid-cols-1 xs:grid-cols-2">
          {itServicesFooterMap.data.map((route, index) => (
            <li key={index} className="mb-2">
              <Link
                prefetch={false}
                href={route.href}
                className="font-body text-[#022d62] transition duration-300 hover:text-[#ef3139]"
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/6">
        <h3 className="mb-6 font-body text-xl font-bold text-[#ef3139]">
          {companyFooterMap.title}
        </h3>
        <ul className="flex flex-col">
          {companyFooterMap.data.map((route) => (
            <li key={route.title} className="mb-2">
              <Link
                prefetch={false}
                href={route.href}
                className="font-body text-[#022d62] transition duration-300 hover:text-[#ef3139]"
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/6">
        <h3 className="mb-6 font-body text-xl font-bold text-[#ef3139]">
          {supportFooterMap.title}
        </h3>
        <ul className="flex flex-col">
          {supportFooterMap.data.map((route) => (
            <li key={route.title} className="mb-2">
              <Link
                prefetch={false}
                href={route.href}
                className="font-body text-[#022d62] transition duration-300 hover:text-[#ef3139]"
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-2/6">
        <h3 className="mb-6 font-body text-xl font-bold text-[#ef3139]">
          Contact hi-Nex
        </h3>
        <ul className="flex flex-col">
          <li className="mb-3 flex items-baseline gap-4 font-body text-[#022d62]">
            <label className="min-w-[70px]">Address :</label>
            <span>Nairobi Kenya Monrovia, Street</span>
          </li>
          <li className="mb-3 flex items-baseline gap-4 font-body text-[#022d62]">
            <label className="min-w-[70px]">Phone :</label>
            <Link
              prefetch={false}
              href="/contact"
              className="text-2xl font-bold"
            >
              +(254) 790482160
            </Link>
          </li>
          <li className="mb-3 flex items-baseline gap-4 font-body text-[#022d62]">
            <label className="min-w-[70px]">Email :</label>
            <Link
              prefetch={false}
              href="mailto:letstalk@hisoft.com"
              className="transition duration-300 hover:text-[#ef3139]"
            >
              letstalk@hi-nex.com
            </Link>
          </li>
          <li className="mb-3 flex items-baseline gap-4 font-body text-[#022d62]">
            <label className="min-w-[70px]">Fax :</label>
            <Link
              prefetch={false}
              href="/contact"
              className="transition duration-300 hover:text-[#ef3139]"
            >
              +254 222456
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
