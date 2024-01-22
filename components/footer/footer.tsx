import Link from "next/link";

import { FooterMain } from "./footer-main";
import { FooterSocials } from "./footer-socials";

export const Footer = () => {
  return (
    <footer className="px-3">
      <div className="w-full">
        <div className="mx-auto max-w-6xl border-b pb-12 sm:px-3">
          <FooterSocials />
        </div>
      </div>
      <div className="w-full py-16">
        <div className="mx-auto max-w-6xl sm:px-3">
          <FooterMain />
        </div>
      </div>
      <div className="-mx-3 bg-[#f6f6f6] py-6">
        <div className="mx-auto flex max-w-6xl justify-center px-3 font-body text-[#777777]">
          ©Copyright 2023&nbsp;
          <span className="text-[#ef3139]">
            <Link href="/" prefetch={false}>
              hi-nex
            </Link>
          </span>
          &nbsp;All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
