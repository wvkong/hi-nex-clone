"use client";

import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { FolderCheck, Laugh, Megaphone, Trophy } from "lucide-react";

export const Counter = () => {
  const [counter, setCounter] = useState(false);
  return (
    <section className="bg-[#022d62] py-12 md:py-16 lg:py-16">
      {/* @ts-ignore */}
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="max-w-full font-body md:mx-auto md:max-w-[96%] lg:max-w-[1140px]">
          <div className="grid grid-cols-1 gap-y-12 xs:grid-cols-2 lg:flex">
            <div className="flex w-full px-3 lg:w-1/4">
              <div className="mr-6">
                <Laugh className="h-20 w-20 text-[#ef3139]" />
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-4xl font-semibold leading-9 text-white">
                    {counter && <CountUp end={1790} />}
                  </span>
                </div>
                <span className="mt-2 text-white">Happy Clients</span>
              </div>
            </div>
            <div className="flex w-full px-3 lg:w-1/4">
              <div className="mr-6">
                <Trophy className="h-20 w-20 text-[#ef3139]" />
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-4xl font-semibold leading-9 text-white">
                    {/* @ts-ignore */}
                    {counter && <CountUp end={245} />}
                  </span>
                </div>
                <span className="mt-2 text-white">Skilled Experts</span>
              </div>
            </div>
            <div className="flex w-full px-3 lg:w-1/4">
              <div className="mr-6">
                <FolderCheck className="h-20 w-20 text-[#ef3139]" />
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-4xl font-semibold leading-9 text-white">
                    {/* @ts-ignore */}
                    {counter && <CountUp end={491} />}
                  </span>
                </div>
                <span className="mt-2 text-white">Finished Projects</span>
              </div>
            </div>
            <div className="flex w-full px-3 lg:w-1/4">
              <div className="mr-6">
                <Megaphone className="h-20 w-20 text-[#ef3139]" />
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-4xl font-semibold leading-9 text-white">
                    {/* @ts-ignore */}
                    {counter && <CountUp end={1090} />}
                  </span>
                </div>
                <span className="mt-2 text-white">Media Posts</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};
