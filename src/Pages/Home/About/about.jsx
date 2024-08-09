import { PhotoDisplay } from "../../../components/shared";
import { PencilRulerIcon } from "lucide-react";

const HomeAboutSection = () => {
  return (
    <div className="px-6 lg:px-24 my-24">
      <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
        <div className="relative">
          <PhotoDisplay
            photoId={"Vew4xyLkpdY"}
            className="rounded mb-[30px] lg:mb-0 lg:flex-1 max-h-[700px]"
          />
        </div>
        <div className="flex-1 order-1">
          <span className="font-chivo inline-block bg-[#FBF5EE] text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
            What We Do, What You Get
          </span>
          <h3 className="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
            We believe that our works can contribute to a better world.
          </h3>
          <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
            Necessary to deliver white glove, fully managed campaigns that
            surpass industry benchmarks.Take your career to next level. Apply to
            our team and see what we can do together. You’re good enough.
          </p>
          <div className="border border-green-900 border-dashed mb-[48px]" />
          <div className="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
            <div className="mb-[30px] lg:mb-0">
              <div className="flex items-center mb-[17px] gap-2">
                <PencilRulerIcon className="text-theme-color w-4" />
                <h4 className="text-heading-6 font-chivo font-bold">
                  Boost your sale
                </h4>
              </div>
              <p className="text-excerpt text-gray-600">
                The latest design trends meet hand-crafted templates.
              </p>
            </div>
            <div className="mb-[30px] lg:mb-0 gap-2">
              <div className="flex gap-2 items-center mb-[17px]">
                <PencilRulerIcon className="text-theme-color w-4" />
                <h4 className="text-heading-6 font-chivo font-bold">
                  Smart Installation Tools
                </h4>
              </div>
              <p className="text-excerpt text-gray-600">
                The latest design trends meet hand-crafted templates.
              </p>
            </div>
            <div className="mb-[30px] lg:mb-0 gap-2">
              <div className="flex items-center mb-[17px] gap-2">
                <PencilRulerIcon className="text-theme-color w-4" />
                <h4 className="text-heading-6 font-chivo font-bold">
                  Introducing New Features
                </h4>
              </div>
              <p className="text-excerpt text-gray-600">
                The latest design trends meet hand-crafted templates.
              </p>
            </div>
            <div className="mb-[30px] lg:mb-0">
              <div className="flex items-center mb-[17px] gap-2">
                <PencilRulerIcon className="text-theme-color w-4" />
                <h4 className="text-heading-6 font-chivo font-bold">
                  Dynamic Boosting
                </h4>
              </div>
              <p className="text-excerpt text-gray-600">
                The latest design trends meet hand-crafted templates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
