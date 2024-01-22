import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import services1 from "@/public/services-img1.jpg";
import awwwards from "@/public/svg/awwwards.svg";
import barate from "@/public/svg/barate.svg";
import mojang from "@/public/svg/mojang.svg";
import papertrail from "@/public/svg/papertrail.svg";

import { Separator } from "./ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { clientStories } from "@/data/data";
import { LinkButton } from "./link-button";

export const ClientSuccess = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="max-w-full font-body md:mx-auto md:max-w-[96%] lg:max-w-[1140px]">
        <div className="flex flex-col items-center lg:flex-row">
          {/* TESTIMONIAL */}
          <div className="w-full px-3 lg:w-7/12">
            <div className="overflow-hidden rounded-[5px] pb-10 shadow-lg">
              <Image
                src={services1}
                alt="services"
                placeholder="blur"
                className="h-auto max-w-full"
              />
              <Carousel className="-mt-[60px] w-full lg:pb-12">
                <CarouselContent className="mx-0 w-full px-0">
                  {clientStories.map((client, index) => (
                    <CarouselItem key={index} className="px-[100px]">
                      <div className="mx-auto mb-5 flex h-[120px] w-[120px] items-center overflow-hidden rounded-[50%] bg-white">
                        <Image
                          src={client.imageUrl}
                          width={120}
                          height={120}
                          alt="client"
                        />
                      </div>
                      <div className="mb-5 text-center">
                        <p className="text-lg italic text-black">
                          {client.content}
                        </p>
                      </div>
                      <div className="text-center">
                        <h6 className="mb-[5px] font-bold text-[#022d62]">
                          {client.name}
                        </h6>
                        <span className="text-[#777777]">
                          {client.position}
                        </span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="left-[5%] text-[#022d62]/40 hover:bg-none hover:text-[#022d62]"
                  variant="ghost"
                />
                <CarouselNext
                  className="right-[5%] text-[#022d62]/40 hover:text-[#022d62]"
                  variant="ghost"
                />
              </Carousel>
            </div>
          </div>
          {/* AWARDS */}
          <div className="mt-12 w-full pr-3 lg:mt-0 lg:w-5/12 lg:pl-12">
            <div className="pl-6">
              <h2 className="mb-12 text-2xl font-bold leading-[43.2px] text-[#022d62] xs:text-[28px] md:text-4xl">
                Over 500 clients and 5,000 projects across the globe.
              </h2>
              <LinkButton
                href="/contact"
                title="Client Success Stories"
                className="text-[#022d62] hover:text-white"
              />
              <Separator className="my-12" />
              <h5 className="text-lg font-semibold text-[#ef3139]">
                Awards and Nominees
              </h5>
              <div className="mt-12 grid grid-cols-2 gap-x-[30px] gap-y-[50px] xs:grid-cols-4 lg:grid-cols-2">
                <div className="grayscale transition duration-300 ease-in-out hover:grayscale-0">
                  <Image src={awwwards} width={150} alt="awwwards" />
                </div>
                <div className="grayscale transition duration-300 ease-in-out hover:grayscale-0">
                  <Image src={barate} width={150} alt="barateiro" />
                </div>
                <div className="grayscale transition duration-300 ease-in-out hover:grayscale-0">
                  <Image src={mojang} width={150} alt="mojang" />
                </div>
                <div className="grayscale transition duration-300 ease-in-out hover:grayscale-0">
                  <Image src={papertrail} width={150} alt="papertrail" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
