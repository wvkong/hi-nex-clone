import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "./link-button";

export const CallToAction = () => {
  return (
    <section className="pb-12 md:pb-16 lg:pb-24">
      <div className="max-w-full font-body md:mx-auto md:max-w-[96%] lg:max-w-[1140px]">
        <div className="w-full px-3">
          <div className="rounded-[5px] bg-[#022d62] p-[60px] text-center">
            <h2 className="text-2xl font-bold text-white xs:text-[28px] md:text-4xl">
              Tell us about your idea, and we&apos;ll make it happen.
            </h2>
            <p className="my-5 text-white">
              Have a brand problem that needs to be solved? We&apos;d love to
              hear about it!
            </p>
            <LinkButton href="/contact" title="Let's Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};
