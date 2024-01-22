import {
  Circle,
  Megaphone,
  Monitor,
  Smartphone,
} from "lucide-react";

import { LinkButton } from "./link-button";

export const Services = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="max-w-full px-3 font-body md:mx-auto md:max-w-[96%] lg:max-w-[1140px]">
        <div>
          <div className="mb-[30px] text-center md:mb-[50px]">
            <h2 className="mb-4 text-2xl font-bold text-[#022d62] xs:text-[28px] md:text-4xl">
              Digital marketing services that help you grow.
            </h2>
            <p className="text-base font-medium text-[#121212] md:text-lg">
              Fortune 100 companies and established brands trust our enterprise
              software development.
            </p>
          </div>
        </div>
        <div className="grid xs:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6 px-3 lg:mb-0">
            <div className="rounded-[5px] bg-[#022d62] px-5 pb-[30px] pt-[60px]">
              <div className="mb-[30px] flex flex-col items-center justify-center">
                <Monitor className="mb-[25px] h-20 w-20 text-[#ef3139]" />
                <h5 className="text-lg font-semibold text-white">
                  Software Development
                </h5>
              </div>
              <div>
                <ul className="text-center text-white">
                  <li className="mb-[15px]">ERP software development</li>
                  <li className="mb-[15px]">BI software development</li>
                  <li className="mb-[15px]">CRM software development</li>
                  <li className="mb-[15px]">SCM software development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-6 px-3 lg:mb-0">
            <div className="group scale-[0.98] rounded-[5px] px-5 pb-[30px] pt-[60px] transition-all duration-300 ease-in-out hover:scale-100 hover:bg-[#022d62]">
              <div className="mb-[30px] flex flex-col items-center justify-center">
                <Smartphone className="mb-[25px] h-20 w-20 text-[#ef3139]" />
                <h5 className="text-lg font-semibold text-[#022d62] group-hover:text-white">
                  Mobile Development
                </h5>
              </div>
              <div>
                <ul className="text-center text-[#777777] group-hover:text-white">
                  <li className="mb-[15px]">iOS</li>
                  <li className="mb-[15px]">Android</li>
                  <li className="mb-[15px]">Hybrid platform</li>
                  <li className="mb-[15px]">User testing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-6 px-3 lg:mb-0">
            <div className="group scale-[0.98] rounded-[5px] px-5 pb-[30px] pt-[60px] transition-all duration-300 ease-in-out hover:scale-100 hover:bg-[#022d62]">
              <div className="mb-[30px] flex flex-col items-center justify-center">
                <Circle className="mb-[25px] h-20 w-20 text-[#ef3139]" />
                <h5 className="text-lg font-semibold text-[#022d62] group-hover:text-white">
                  Branding Services
                </h5>
              </div>
              <div>
                <ul className="text-center text-[#777777] group-hover:text-white">
                  <li className="mb-[15px]">Logo design</li>
                  <li className="mb-[15px]">UI/UX design</li>
                  <li className="mb-[15px]">Visual design</li>
                  <li className="mb-[15px]">Brand identity</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-6 px-3 lg:mb-0">
            <div className="group scale-[0.98] rounded-[5px] px-5 pb-[30px] pt-[60px] transition-all duration-300 ease-in-out hover:scale-100 hover:bg-[#022d62]">
              <div className="mb-[30px] flex flex-col items-center justify-center">
                <Megaphone className="mb-[25px] h-20 w-20 text-[#ef3139]" />
                <h5 className="text-lg font-semibold text-[#022d62] group-hover:text-white">
                  Digital Marketing
                </h5>
              </div>
              <div>
                <ul className="text-center text-[#777777] group-hover:text-white">
                  <li className="mb-[15px]">Marketing Strategy</li>
                  <li className="mb-[15px]">Paid Media</li>
                  <li className="mb-[15px]">Influencer Marketing</li>
                  <li className="mb-[15px]">Digital Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex justify-center px-3">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-[10px]">
              <p className="text-[#777777]">
                Contact us to discuss the goals for your brand
              </p>
              <LinkButton
                href="/contact"
                title="Get A Quote"
                className="text-[#022d62] hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
