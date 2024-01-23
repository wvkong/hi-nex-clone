import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import case1 from "@/public/case1.jpg";
import case2 from "@/public/case2.jpg";
import case3 from "@/public/case3.jpg";
import case4 from "@/public/case4.jpg";
import { LinkButton } from "./link-button";

export const ClientStories = () => {
  return (
    <section className="relative py-12 before:absolute before:left-0 before:top-0 before:-z-[1] before:inline-block before:h-[470px] before:w-full before:bg-[#022d62] before:content-[''] md:py-16 lg:py-24">
      <div className="mx-auto max-w-full px-3 font-body md:max-w-[720px] lg:max-w-[1140px]">
        <div className="mb-[50px]">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">
              <span className="text-[#ef3139]">What&apos;s next?</span>&nbsp;our
              latest client stories
            </h2>
            <p className="text-lg font-medium text-white">
              We love what we do. Our clients tell us the same thing.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <div className="flex flex-col gap-[30px] md:grid md:grid-cols-3">
              <div className="group relative col-start-1 col-end-2 row-start-1 row-end-3 min-h-[570px] overflow-hidden">
                <Image
                  src={case1}
                  alt="case1"
                  placeholder="blur"
                  quality={100}
                  sizes="100vw"
                  fill
                  className="rounded-[5px] object-cover"
                />
                <div className="absolute -bottom-[90px] left-1/2 z-[2] w-[90%] -translate-x-1/2 rounded-[5px] bg-white p-5 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-5 group-hover:opacity-100">
                  <Link
                    href="/case-study-details/1"
                    prefetch={false}
                    className="block text-lg font-bold text-[#022d62]"
                  >
                    Gozzby
                  </Link>
                  <span className="mb-[10px] block text-[#ef3139]">Music</span>
                  <p className="mb-4 text-[#777777]">
                    If success is a process with a number of defined steps, then
                    it is just like any other process.
                  </p>
                  <Link
                    aria-label="arrow"
                    prefetch={false}
                    href="/case-study-details/1"
                    className="flex h-10 w-10 items-center justify-center rounded-[50px] bg-[#ef3139] text-center text-xs text-white"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="group relative min-h-[270px] overflow-hidden">
                <Image
                  src={case2}
                  alt="case2"
                  placeholder="blur"
                  quality={100}
                  sizes="100vw"
                  fill
                  className="rounded-[5px] object-cover"
                />
                <div className="absolute -bottom-[90px] left-1/2 z-[2] w-[90%] -translate-x-1/2 rounded-[5px] bg-white p-5 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-5 group-hover:opacity-100">
                  <Link
                    prefetch={false}
                    href="/case-study-details/2"
                    className="block text-lg font-bold text-[#022d62]"
                  >
                    Educatgenix
                  </Link>
                  <span className="mb-[10px] block text-[#ef3139]">
                    Education
                  </span>
                  <p className="mb-4 text-[#777777]">
                    We all carry a lot of baggage, thanks to our upbringing...
                  </p>
                  <Link
                    aria-label="arrow"
                    prefetch={false}
                    href="/case-study-details/2"
                    className="flex h-10 w-10 items-center justify-center rounded-[50px] bg-[#ef3139] text-center text-xs text-white"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="group relative min-h-[270px] overflow-hidden ">
                <Image
                  src={case3}
                  alt="case3"
                  placeholder="blur"
                  quality={100}
                  sizes="100vw"
                  fill
                  className="rounded-[5px] object-cover"
                />
                <div className="absolute -bottom-[90px] left-1/2 z-[2] w-[90%] -translate-x-1/2 rounded-[5px] bg-white p-5 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-5 group-hover:opacity-100">
                  <Link
                    prefetch={false}
                    href="/case-study-details/3"
                    className="block text-lg font-bold text-[#022d62]"
                  >
                    Petfluent
                  </Link>
                  <span className="mb-[10px] block text-[#ef3139]">
                    Pet Care
                  </span>
                  <p className="mb-4 text-[#777777]">
                    You will drift aimlessly until you arrive back at the
                    original dock
                  </p>
                  <Link
                    aria-label="arrow"
                    prefetch={false}
                    href="/case-study-details/3"
                    className="flex h-10 w-10 items-center justify-center rounded-[50px] bg-[#ef3139] text-center text-xs text-white"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="group relative col-start-3 col-end-auto row-start-1 row-end-3 min-h-[570px] overflow-hidden">
                <Image
                  src={case4}
                  alt="case4"
                  placeholder="blur"
                  quality={100}
                  sizes="100vw"
                  fill
                  className="rounded-[5px] object-cover"
                />
                <div className="absolute -bottom-[90px] left-1/2 z-[2] w-[90%] -translate-x-1/2 rounded-[5px] bg-white p-5 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-5 group-hover:opacity-100">
                  <Link
                    prefetch={false}
                    href="/case-study-details/4"
                    className="block text-lg font-bold text-[#022d62]"
                  >
                    Financeoont
                  </Link>
                  <span className="mb-[10px] block text-[#ef3139]">
                    Finance
                  </span>
                  <p className="mb-4 text-[#777777]">
                    It is truly amazing the damage that we, as parents, can
                    inflict on our children...
                  </p>
                  <Link
                    aria-label="arrow"
                    prefetch={false}
                    href="/case-study-details/4"
                    className="flex h-10 w-10 items-center justify-center rounded-[50px] bg-[#ef3139] text-center text-xs text-white"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex w-full justify-center px-3">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-[10px]">
              <LinkButton
                href="/case-study"
                title="View all Case Study"
                className="text-[#022d62] hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
