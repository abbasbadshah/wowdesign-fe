import icon_flower from "../../../assets/images/About/icons/icon-flower.svg";
import IconRight from "../../../assets/images/About/icons/icon-right.svg";
import iconMap from "../../../assets/images/About/icons/icon-map.svg";
import iconPin from "../../../assets/images/About/icons/icon-pine.svg";

import {
  MapPinIcon,
  CloudIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
export const AboutSectionFour = () => {
  return (
    <div className="px-4 lg:px-72 mt-[70px] lg:mt-[150px]">
      <div className="text-center">
        <span className=" inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[19px]">
          What We Do, What You Get
        </span>
      </div>
      <div className="text-center mb-[70px]">
        <h2 className="font-bold  mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] md:w-[19ch]">
          Bringing the world's ideas to life
        </h2>
        <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[63ch]">
          Developers are trusted to create an engaging experience for their
          companies, so we build tools to help them.
        </p>
      </div>
      <div className="lg:flex lg:gap-5 xl:gap-[30px]">
        <div className="rounded relative mb-5 flex flex-col justify-between transition-all duration-300 border-[#F4E1CD] border-[10px] p-[30px] md:py-[53px] md:px-[48px] hover:translate-y-[-2px]">
          <div>
            <img
              className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
              src={icon_flower}
              alt="icon"
            />
            <h2 className="font-bold  text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
              Business strategy
            </h2>
            <p className="text-excerpt text-gray-600 mb-[30px]">
              You are always welcome to visit our little den. Professional in
              teir craft! All products were super amazing with strong attension
              to details, comps and overall vibe.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-full"
          >
            <span className="block text-inherit w-full h-full rounded-[50px] text-lg  font-semibold">
              Learn More
            </span>
            <ArrowRightIcon className="text-black w-4 group-hover:text-white" />
          </button>
        </div>
        <div className="rounded relative mb-5 flex flex-col justify-between transition-all duration-300 border-[#F4E1CD] border-[10px] p-[30px] md:py-[53px] md:px-[48px] hover:translate-y-[-2px]">
          <div>
            <img
              className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
              src={iconMap}
              alt="icon"
            />
            <h2 className="font-bold  text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
              Local Marketing
            </h2>
            <p className="text-excerpt text-gray-600 mb-[30px]">
              You are always welcome to visit our little den. Professional in
              teir craft! All products were super amazing with strong attension
              to details, comps and overall vibe.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-full"
          >
            <span className="block text-inherit w-full h-full rounded-[50px] text-lg  font-semibold">
              Learn More
            </span>
            <ArrowRightIcon className="text-black w-4 group-hover:text-white" />
          </button>
        </div>
        <div className="rounded relative mb-5 flex flex-col justify-between transition-all duration-300 border-[#F4E1CD] border-[10px] p-[30px] md:py-[53px] md:px-[48px] hover:translate-y-[-2px]">
          <div>
            <CloudIcon className="w-20 text-black" />
            <h2 className="font-bold  text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
              Social Media
            </h2>
            <p className="text-excerpt text-gray-600 mb-[30px]">
              You are always welcome to visit our little den. Professional in
              teir craft! All products were super amazing with strong attension
              to details, comps and overall vibe.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-full"
          >
            <span className="block text-inherit w-full h-full rounded-[50px] text-lg  font-semibold">
              Learn More
            </span>
            <ArrowRightIcon className="text-black w-4 group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
