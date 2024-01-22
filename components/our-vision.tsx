import Image from "next/image";
import { ArrowRight, Crosshair, Eye } from "lucide-react";

import bullseye from "@/public/bullseye.jpg";

export const OurVision = () => {
  return (
    <section className="pb-12 md:pb-16 lg:pb-24">
      <div className="mx-auto max-w-full px-3 font-body md:max-w-[96%] lg:max-w-[1140px]">
        <div className="flex justify-center pb-4 md:pb-12">
          <div className="w-full max-w-full basis-auto md:w-5/6 md:px-3">
            <div className="block items-center md:flex">
              <div className="mr-6">
                <p className="text-[#777777]">Established in</p>
                <h3 className="text-5xl font-bold text-[#ef3139] lg:text-7xl">
                  2023
                </h3>
              </div>
              <div className="mr-4">
                <h2 className="text-2xl font-bold text-[#022d62] xs:text-[28px] md:text-4xl">
                  We enable constant enterprise transformation at speed and
                  scale.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-3">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4">
              <div className="flex h-full">
                <div className="flex w-full flex-wrap gap-x-[30px] gap-y-[15px] md:flex-col md:gap-0 lg:self-center">
                  <div>
                    <button className="group flex w-full items-center py-[5px] text-base font-medium leading-[18px] text-[#022d62] transition-all duration-300 ease-in-out hover:text-[#ef3139] focus:text-[#ef3139] md:py-5 lg:text-[22px]">
                      <span>Mission and vision</span>
                      <ArrowRight className="ml-auto hidden h-6 w-6 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:opacity-100 group-focus:opacity-100 md:block" />
                    </button>
                  </div>
                  <div>
                    <button className="group flex w-full items-center py-[5px] text-base font-medium leading-[18px] text-[#022d62] transition-all duration-300 ease-in-out hover:text-[#ef3139] focus:text-[#ef3139] md:py-5 lg:text-[22px]">
                      <span>Our challenges</span>
                      <ArrowRight className="ml-auto hidden h-6 w-6 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:opacity-100 group-focus:opacity-100 md:block" />
                    </button>
                  </div>
                  <div>
                    <button className="group flex w-full items-center py-[5px] text-base font-medium leading-[18px] text-[#022d62] transition-all duration-300 ease-in-out hover:text-[#ef3139] focus:text-[#ef3139] md:py-5 lg:text-[22px]">
                      <span>Technology partners</span>
                      <ArrowRight className="ml-auto hidden h-6 w-6 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:opacity-100 group-focus:opacity-100 md:block" />
                    </button>
                  </div>
                  <div>
                    <button className="group flex w-full items-center py-[5px] text-base font-medium leading-[18px] text-[#022d62] transition-all duration-300 ease-in-out hover:text-[#ef3139] focus:text-[#ef3139] md:py-5 lg:text-[22px]">
                      <span>Meet the team</span>
                      <ArrowRight className="ml-auto hidden h-6 w-6 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:opacity-100 group-focus:opacity-100 md:block" />
                    </button>
                  </div>
                  <div>
                    <button className="group flex w-full items-center py-[5px] text-base font-medium leading-[18px] text-[#022d62] transition-all duration-300 ease-in-out hover:text-[#ef3139] focus:text-[#ef3139] md:py-5 lg:text-[22px]">
                      <span>Careers with us</span>
                      <ArrowRight className="ml-auto hidden h-6 w-6 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-3 group-hover:opacity-100 group-focus:opacity-100 md:block" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-6 max-w-full md:my-0 md:w-3/4 md:px-3">
              <div className="md:ml-6">
                <div className="flex flex-col flex-wrap xs:flex-row">
                  <div className="max-w-full pr-3 xs:w-5/12 md:px-3">
                    <Image
                      src={bullseye}
                      placeholder="blur"
                      alt="bulls"
                      className="h-auto max-w-full"
                    />
                  </div>
                  <div className="max-w-full pl-3 xs:w-7/12 md:pl-0 md:pr-3 lg:pl-12">
                    <div className="mb-6">
                      <div className="flex items-center">
                        <Crosshair className="mr-5 h-6 w-6 text-[#ef3139]" />
                        <h4 className="text-2xl font-semibold text-[#022d62]">
                          Our Mission
                        </h4>
                      </div>
                      <div className="mt-[15px] text-[15px] leading-[26px] text-[#777777]">
                        Our mission is as an IT tech startup with bias in
                        software as a services (SaaS) is to help a wide range of
                        clients develop customized software that will help them
                        simplify their businesses and operations.
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-center">
                        <Eye className="mr-5 h-6 w-6 text-[#ef3139]" />
                        <h4 className="text-2xl font-semibold text-[#022d62]">
                          Our Vision
                        </h4>
                      </div>
                      <div className="mt-[15px] text-[15px] leading-[26px] text-[#777777]">
                        Our vision is to build an IT tech startup company that
                        will be among the forerunners when it comes to offering
                        software as a service (SaaS) in the world.
                      </div>
                    </div>
                    <p className="mb-4 text-[15px] leading-[25px] text-[#777777]">
                      Our Vision and Mission are both encouraging our team to
                      accomplish the goal. We recognize the clients&apos;
                      requirements, analyze them, and provide the best
                      solutions. We satisfy our clients by our services and
                      implements it with more capable software solution
                      approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
