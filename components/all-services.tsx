import Link from "next/link";
import {
  AppWindow,
  ArrowRight,
  BookMarked,
  LineChart,
  Megaphone,
  Monitor,
  Network,
} from "lucide-react";
import { LinkButton } from "./link-button";

export const AllServices = () => {
  return (
    <section className="bg-[#f6f6f6] py-12 md:py-16 lg:py-24">
      <div className="max-w-full font-body md:mx-auto md:max-w-[96%] lg:max-w-[1140px]">
        <div className="flex flex-wrap">
          <div className="mb-12 max-w-full px-3 lg:mb-0 lg:w-1/3">
            <div className="top-[125px] z-[1] transition-all duration-300 ease-in-out lg:sticky">
              <div className="mb-6">
                <h2 className="mb-4 text-2xl font-bold text-[#022d62] xs:text-[28px] md:text-4xl">
                  This is what we do and we do it perfectly.
                </h2>
                <p className="text-base font-medium md:text-lg">
                  Please take a look at the range of IT solution services we
                  offer to your brand as a full-service leading marketing
                  agency.
                </p>
              </div>
              <LinkButton
                href="/contact"
                title="See All Services"
                className="text-[#022d62] hover:text-white"
              />
            </div>
          </div>
          <div className="w-full max-w-full px-3 lg:w-2/3">
            <div className="grid grid-cols-1 gap-[30px] xs:grid-cols-2">
              {/* Software Development */}
              <div className="group relative overflow-hidden rounded-[7px] bg-white p-[45px] shadow-[0_5px_30px_rgba(2,45,98,0.1)] transition-all duration-300 ease-in-out hover:bg-[#022d62]">
                <div className="absolute top-[45px] mb-[25px] opacity-100 transition-all duration-300 ease-in-out group-hover:-top-[90px] group-hover:opacity-0">
                  <Monitor className="h-[60px] w-[60px] text-[#ef3139]" />
                </div>
                <div className="mt-20 transition-all duration-300 ease-in-out group-hover:mb-20 group-hover:mt-0">
                  <h5 className="mb-4 text-lg font-bold text-[#022d62] group-hover:text-white">
                    Software Development
                  </h5>
                  <p className="text-[#777] group-hover:text-white">
                    Our Software development services offer some of the unique
                    perks, including creative inputs, latest features, and
                    appealing app design. We excel in building a mobile app
                    well-suited for your requirements, falling in your budget
                    and delivered within the timeline.
                  </p>
                  <Link
                    prefetch={false}
                    href="/service-details/1"
                    className="absolute -bottom-[90px] flex h-10 w-10 items-center justify-center rounded-[50px] bg-[#ef3139] opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-[45px] group-hover:opacity-100"
                  >
                    <ArrowRight className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </div>
              {/* IT Services */}
              <div className="group relative overflow-hidden rounded-[7px] bg-white p-[45px] shadow-[0_5px_30px_rgba(2,45,98,0.1)] transition-all duration-300 ease-in-out hover:bg-[#022d62]">
                <div className="absolute top-[45px] mb-[25px] opacity-100 transition-all duration-300 ease-in-out group-hover:-top-[90px] group-hover:opacity-0">
                  <BookMarked className="h-[60px] w-[60px] text-[#ef3139]" />
                </div>
                <div className="mt-20 transition-all duration-300 ease-in-out group-hover:mb-20 group-hover:mt-0">
                  <h5 className="mb-4 text-lg font-bold text-[#022d62] group-hover:text-white">
                    IT Services
                  </h5>
                  <p className="text-[#777] group-hover:text-white">
                    We offer a wide range of IT services designed to promote and
                    stimulate the use of technology by businesses and end-users.
                    In the digital age, organizations use technology services to
                    build and develop specialized technology-based solutions by
                    incorporating software, hardware, telecommunications
                    networks, and electronics processes..
                  </p>
                  <Link
                    prefetch={false}
                    href="/service-details/2"
                    className="absolute -bottom-[90px] flex h-10 w-10 items-center justify-center rounded-[50px] bg-[#ef3139] opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-[45px] group-hover:opacity-100"
                  >
                    <ArrowRight className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </div>
              {/* Mobile Platforms */}
              <div className="group relative overflow-hidden rounded-[7px] bg-white p-[45px] shadow-[0_5px_30px_rgba(2,45,98,0.1)] transition-all duration-300 ease-in-out hover:bg-[#022d62]">
                <div className="absolute top-[45px] mb-[25px] opacity-100 transition-all duration-300 ease-in-out group-hover:-top-[90px] group-hover:opacity-0">
                  <Megaphone className="h-[60px] w-[60px] text-[#ef3139]" />
                </div>
                <div className="mt-20 transition-all duration-300 ease-in-out group-hover:mb-20 group-hover:mt-0">
                  <h5 className="mb-4 text-lg font-bold text-[#022d62] group-hover:text-white">
                    Mobile Platforms
                  </h5>
                  <p className="text-[#777] group-hover:text-white">
                    hi-Nex works across the mobile platforms, frameworks &
                    environments to mobilize your business. Its mobile
                    application development services spans from idea
                    conceptualization to delivery. hi-Nex works with following
                    mobile platforms, frameworks & environments
                  </p>
                  <Link
                    prefetch={false}
                    href="/service-details/3"
                    className="absolute -bottom-[90px] flex h-10 w-10 items-center justify-center rounded-[50px] bg-[#ef3139] opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-[45px] group-hover:opacity-100"
                  >
                    <ArrowRight className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </div>
              {/* Process Automation */}
              <div className="group relative overflow-hidden rounded-[7px] bg-white p-[45px] shadow-[0_5px_30px_rgba(2,45,98,0.1)] transition-all duration-300 ease-in-out hover:bg-[#022d62]">
                <div className="absolute top-[45px] mb-[25px] opacity-100 transition-all duration-300 ease-in-out group-hover:-top-[90px] group-hover:opacity-0">
                  <LineChart className="h-[60px] w-[60px] text-[#ef3139]" />
                </div>
                <div className="mt-20 transition-all duration-300 ease-in-out group-hover:mb-20 group-hover:mt-0">
                  <h5 className="mb-4 text-lg font-bold text-[#022d62] group-hover:text-white">
                    Process Automation
                  </h5>
                  <p className="text-[#777] group-hover:text-white">
                    We are specialized in providing DevOps as a managed service
                    to various development teams and businesses who wish to run
                    applications on the cloud. Our experts guide the teams to
                    successfully leverage the benefits of the cloud and make
                    sure that their environment runs efficiently and
                    effectively.
                  </p>
                  <Link
                    prefetch={false}
                    href="/service-details/4"
                    className="absolute -bottom-[90px] flex h-10 w-10 items-center justify-center rounded-[50px] bg-[#ef3139] opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-[45px] group-hover:opacity-100"
                  >
                    <ArrowRight className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </div>
              {/* Event Processing */}
              <div className="group relative overflow-hidden rounded-[7px] bg-white p-[45px] shadow-[0_5px_30px_rgba(2,45,98,0.1)] transition-all duration-300 ease-in-out hover:bg-[#022d62]">
                <div className="absolute top-[45px] mb-[25px] opacity-100 transition-all duration-300 ease-in-out group-hover:-top-[90px] group-hover:opacity-0">
                  <AppWindow className="h-[60px] w-[60px] text-[#ef3139]" />
                </div>
                <div className="mt-20 transition-all duration-300 ease-in-out group-hover:mb-20 group-hover:mt-0">
                  <h5 className="mb-4 text-lg font-bold text-[#022d62] group-hover:text-white">
                    Event Processing
                  </h5>
                  <p className="text-[#777] group-hover:text-white">
                    Event processing is the capture, enrichment, formatting and
                    emission of events, the subsequent routing and any further
                    processing of emitted events (sometimes in combination with
                    other events), and the consumption of the processed events.
                    Event processing provides filtering, capture, enrichment,
                    formatting, and routing of single business events,
                  </p>
                  <Link
                    prefetch={false}
                    href="/service-details/5"
                    className="absolute -bottom-[90px] flex h-10 w-10 items-center justify-center rounded-[50px] bg-[#ef3139] opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-[45px] group-hover:opacity-100"
                  >
                    <ArrowRight className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </div>
              {/* Content Management */}
              <div className="group relative overflow-hidden rounded-[7px] bg-white p-[45px] shadow-[0_5px_30px_rgba(2,45,98,0.1)] transition-all duration-300 ease-in-out hover:bg-[#022d62]">
                <div className="absolute top-[45px] mb-[25px] opacity-100 transition-all duration-300 ease-in-out group-hover:-top-[90px] group-hover:opacity-0">
                  <Network className="h-[60px] w-[60px] text-[#ef3139]" />
                </div>
                <div className="mt-20 transition-all duration-300 ease-in-out group-hover:mb-20 group-hover:mt-0">
                  <h5 className="mb-4 text-lg font-bold text-[#022d62] group-hover:text-white">
                    Content Management
                  </h5>
                  <p className="text-[#777] group-hover:text-white">
                    Content management (CM) is the creation, storage, access,
                    delivery, and optimization of digital media on one central
                    platform. Today’s consumers are engaging with content across
                    even more touchpoints, such as voice devices, IoT, and
                    wearables. When digital experiences are managed properly,
                    brands can see major benefits.
                  </p>
                  <Link
                    prefetch={false}
                    href="/service-details/6"
                    className="absolute -bottom-[90px] flex h-10 w-10 items-center justify-center rounded-[50px] bg-[#ef3139] opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-[45px] group-hover:opacity-100"
                  >
                    <ArrowRight className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
