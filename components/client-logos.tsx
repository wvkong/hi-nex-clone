import Image from "next/image";

import butterfly from "@/public/svg/butterfly.svg";
import coporate from "@/public/svg/coporate.svg";
import healthylife from "@/public/svg/healthylife.svg";
import allorganic from "@/public/svg/allorganic.svg";
import realvilla from "@/public/svg/realvilla.svg";
import { LinkButton } from "./link-button";

export const ClientLogos = () => {
  return (
    <section className="relative z-[1] -mt-12 font-body lg:px-3">
      <div className="relative mx-auto block w-full max-w-[96%] items-center justify-between rounded-[5px] bg-[#022d62] lg:flex lg:h-32 lg:max-w-[1116px] lg:px-5 lg:py-10">
        <div className="rounded-t-[5px] bg-[#ef3139] p-5 lg:flex-[0_0_13%] lg:bg-inherit lg:p-0">
          <h5 className="relative z-10 text-center text-lg font-semibold text-white lg:text-start">
            Our Clients
          </h5>
          <div className="absolute left-0 top-0 hidden h-full w-full overflow-hidden rounded-[5px] before:absolute before:-left-[49px] before:-top-[30px] before:h-[200px] before:w-[200px] before:rounded-full before:bg-[#ef3139] before:content-[''] after:absolute after:-bottom-10 after:left-20 after:h-[70px] after:w-[70px] after:rounded-full after:bg-[#ef3139] after:content-[''] lg:block"></div>
        </div>
        <div className="px-[30px] py-10 lg:pl-4 lg:pr-6">
          <div className="flex items-center justify-evenly">
            <div className="mr-[30px]">
              <Image src={butterfly} alt="client logo" />
            </div>
            <div className="mr-[30px]">
              <Image src={coporate} alt="client logo" />
            </div>
            <div className="mr-[30px]">
              <Image src={healthylife} alt="client logo" />
            </div>
            <div className="mr-[30px]">
              <Image src={allorganic} alt="client logo" />
            </div>
            <div className="">
              <Image src={realvilla} alt="client logo" />
            </div>
          </div>
        </div>
        <div className="z-[2] pb-5 pl-5 text-center lg:flex-[0_0_18%] lg:p-0 lg:text-start">
          <LinkButton href="/case-study" title="Case Studies" />
        </div>
      </div>
    </section>
  );
};
