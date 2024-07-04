import fbIcon from "../../../assets/images/About/icons/icon-facebook-gray.svg";
import inIcon from "../../../assets/images/About/icons/icon-instagram-gray.svg";
import IconRight from "../../../assets/images/About/icons/icon-right.svg";
import IconButton from "../../../assets/images/About/icons/icon-button.svg";
import aboutTopImage1 from "../../../assets/images/About/abt1.png";
import aboutTopImage2 from "../../../assets/images/About/abt2.png";
import circleblur1 from "../../../assets/images/About/circle-blur-1.svg";
import circleblur2 from "../../../assets/images/About/circle-blur-2.svg";
export const AboutSectionOne = () => {
  return (
    <div className="relative full-width">
      <img
        className="absolute top-0 left-0 max-w-[607px]"
        src={circleblur1}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 max-w-[562px]"
        src={circleblur2}
        alt=""
      />
      <div className="mx-auto max-w-[1320px]">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex flex-col gap-10 lg:mt-[111px] lg:flex-row xl:gap-[150px]">
          <div className="flex-1">
            <h1 className="font-chivo md:text-display-4 text-[35px] leading-[42px] mb-10">
              Advanced analytics to grow your business
            </h1>
            <div className="flex items-center gap-5">
              <div className="bg-gray-300 w-[82px] h-[1px]"></div>
              <div className="z-50 flex items-center justify-center gap-4">
                <a
                  className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                  href="/"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={fbIcon}
                    alt="facebook icon"
                  />
                </a>
                <a
                  className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                  href="/"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={inIcon}
                    alt="instagram icon"
                  />
                </a>
                <a
                  className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                  href="/"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={inIcon}
                    alt="twitter icon"
                  />
                </a>
                <a
                  className="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                  href="/"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={inIcon}
                    alt="linkedin icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-600 text-quote md:text-lead-lg mb-11">
              Feugiat primis ligula risus auctor egestas and augue viverra mauri
              tortor in iaculis magna a feugiat mauris ipsum and placerat
              viverra
            </p>
            <div className="flex items-center justify-start">
              <button type="button">
                {" "}
                <a
                  className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px]"
                  href="#"
                >
                  <span className="block w-full h-full text-lg font-semibold rounded-md text-inherit font-chivo">
                    Get Start
                  </span>
                  <i>
                    {" "}
                    <img
                      className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                      src={IconRight}
                      alt="arrow right icon"
                    />
                  </i>
                </a>
              </button>
              <div className="flex items-center gap-3">
                <i>
                  {" "}
                  <img src={IconButton} alt="" />
                </i>
                <a
                  className="text-base flex items-center font-chivo font-medium text-[18px] leading-[18px] gap-[5px]"
                  href="/"
                >
                  How it works
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex flex-col gap-5 relative lg:mt-[108px] lg:flex-row">
          <div className="flex-[1.4]">
            <img
              className="object-cover w-full h-full"
              src={aboutTopImage1}
              alt="Agon"
            />
          </div>
          <div className="flex-1">
            <img
              className="object-cover w-full h-full"
              src={aboutTopImage2}
              alt="Agon"
            />
          </div>
        </div>
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[88px]">
          <div className="grid grid-cols-2 flex-1 text-center gap-2 gap-y-8 md:grid-cols-2 xl:gap-y-[70px] lg:grid-cols-4">
            <div>
              <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-theme-color">
                17+
              </h1>
              <p className="mb-3 font-bold text-quote">Our Office</p>
              <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
            <div>
              <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-theme-color">
                2K+
              </h1>
              <p className="mb-3 font-bold text-quote">Completed Cases</p>
              <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
            <div>
              <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-theme-color">
                28+
              </h1>
              <p className="mb-3 font-bold text-quote">Happy Clients</p>
              <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
            <div>
              <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-theme-color">
                86
              </h1>
              <p className="mb-3 font-bold text-quote">Skilled People</p>
              <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
