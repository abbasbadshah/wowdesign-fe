import { Leaf } from "lucide-react";
import { PhotoDisplay } from "../../../components/shared";
export const AboutSectionThree = () => {
  return (
    <div className="px-6 my-24 lg:px-24">
      <div className="bg-opacity-50 rounded-full opacity-50 blur-2xl absolute -translate-x-4 max-w-full bg-[#F5E2C6] w-[562px] h-[562px] translate-y-1/3"></div>
      <div className="lg:grid lg:grid-cols-2 gap-[100px]">
        <div className="relative">
          <PhotoDisplay
            className={
              "h-full w-full object-cover mx-auto mb-[30px] lg:mb-0 lg:flex-1 max-w-[70%]"
            }
            photoId={"p6p6TYnDgrw"}
          />
        </div>
        <div className="flex-1 lg:gap-[30px] xl:gap-[64px]">
          <h3 className="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
            Our Process
          </h3>
          <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
            How we work
          </p>
          <div className="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
            <div className="mb-[30px] lg:mb-0">
              <h1 className="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-theme-color mb-[14px]">
                01
              </h1>
              <div className="flex items-center mb-[17px] gap-2">
                <Leaf className="w-4 text-theme-color" />
                <h4 className="font-bold text-heading-6 font-chivo">
                  Boost your sale
                </h4>
              </div>
              <p className="text-gray-600 text-excerpt">
                The latest design trends meet hand-crafted templates.
              </p>
            </div>
            <div className="mb-[30px] lg:mb-0">
              <h1 className="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-theme-color mb-[14px]">
                02
              </h1>
              <div className="flex items-center mb-[17px] gap-2">
                <Leaf className="w-4 text-theme-color" />
                <h4 className="font-bold text-heading-6 font-chivo">
                  Smart Installation Tools
                </h4>
              </div>
              <p className="text-gray-600 text-excerpt">
                The latest design trends meet hand-crafted templates.
              </p>
            </div>
            <div className="mb-[30px] lg:mb-0">
              <h1 className="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-theme-color mb-[14px]">
                03
              </h1>
              <div className="flex items-center mb-[17px] gap-2">
                <Leaf className="w-4 text-theme-color" />
                <h4 className="font-bold text-heading-6 font-chivo">
                  Introducing New Features
                </h4>
              </div>
              <p className="text-gray-600 text-excerpt">
                The latest design trends meet hand-crafted templates.
              </p>
            </div>
            <div className="mb-[30px] lg:mb-0">
              <h1 className="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-theme-color mb-[14px]">
                04
              </h1>
              <div className="flex items-center mb-[17px] gap-2">
                <Leaf className="w-4 text-theme-color" />
                <h4 className="font-bold text-heading-6 font-chivo">
                  Dynamic Boosting
                </h4>
              </div>
              <p className="text-gray-600 text-excerpt">
                The latest design trends meet hand-crafted templates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
