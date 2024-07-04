import fbIcon from "../../../assets/images/About/icons/icon-facebook-gray.svg";
import inIcon from "../../../assets/images/About/icons/icon-instagram-gray.svg";
import IconRight from "../../../assets/images/About/icons/icon-right.svg";
import IconButton from "../../../assets/images/About/icons/icon-button.svg";
import aboutTopImage1 from "../../../assets/images/About/abt1.png";
import aboutTopImage2 from "../../../assets/images/About/abt2.png";
import circleblur1 from "../../../assets/images/About/circle-blur-1.svg";
import circleblur2 from "../../../assets/images/About/circle-blur-2.svg";
import Avatar from "../../../assets/images/User Profile/man.jpg";
export const AboutSectionTwo = () => {
  return (
    <div className="full-width bg-[#F0D7BC]">
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex flex-col gap-6 mx-auto py-[98px] lg:flex-row max-w-[1320px]">
        <div className="flex-[1.36] mr-[90px]">
          <span className="font-chivo inline-block bg-bg-3 text-gray-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[36px]">
            Built Exclusively For You
          </span>
          <h1 className="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 mb-[25px]">
            Don’t take our word for it. See what our clients say.
          </h1>
          <p className="text-quote md:text-lead-lg text-gray-600 mb-[55px]">
            Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor
            primis libero tempus, blandit
          </p>
          <button type="button">
            {" "}
            <a
              className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] text-gray-900 bg-white w-fit"
              href="#"
            >
              <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                Learn More
              </span>
              <i>
                {" "}
                <img
                  className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                  src={IconRight}
                  alt="arrow right icon"
                />
              </i>
            </a>
          </button>
        </div>
        <div className="flex flex-col flex-1 gap-8">
          <div className="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]">
            <p className="text-text mb-[15px]">
              &quot;No matter where you go, It's is the coolest, most happening
              thing around! Not able to tell you how happy I am with it.&quot;
            </p>
            <div className="flex items-center gap-6">
              <img
                className="h-[80px] w-[80px] object-cover rounded-full"
                src={Avatar}
                alt="avatar"
              />
              <div>
                <p className="text-lead line-clamp-2 font-bold mb-[3px]">
                  Jenny Wilson
                </p>
                <p className="text-gray-500 text-md">Biffco Enterprises Ltd.</p>
              </div>
            </div>
          </div>
          <div className="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]">
            <p className="text-text mb-[15px]">
              &quot;Wow what great service, I love it! It's is the most valuable
              business resource we have EVER purchased. We can't understand how
              we've been living without it. I couldn't have asked for more than
              this.&quot;
            </p>
            <div className="flex items-center gap-6">
              <img
                className="h-[80px] w-[80px] object-cover rounded-full"
                src={Avatar}
                alt="avatar"
              />
              <div>
                <p className="text-lead line-clamp-2 font-bold mb-[3px]">
                  Jenny Wilson
                </p>
                <p className="text-gray-500 text-md">Biffco Enterprises Ltd.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-8">
          <div className="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]">
            <p className="text-text mb-[15px]">
              &quot;Your company is truly upstanding and is behind its product
              100%. It's the perfect solution for our business. It has really
              helped our business. Needless to say we are extremely satisfied
              with the results. &quot;
            </p>
            <div className="flex items-center gap-6">
              <img
                className="h-[80px] w-[80px] object-cover rounded-full"
                src={Avatar}
                alt="avatar"
              />
              <div>
                <p className="text-lead line-clamp-2 font-bold mb-[3px]">
                  Jenny Wilson
                </p>
                <p className="text-gray-500 text-md">Biffco Enterprises Ltd.</p>
              </div>
            </div>
          </div>
          <div className="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]">
            <p className="text-text mb-[15px]">
              &quot;It's is both attractive and highly adaptable. It's exactly
              what I've been looking for. Definitely worth the investment.&quot;
            </p>
            <div className="flex items-center gap-6">
              <img
                className="h-[80px] w-[80px] object-cover rounded-full"
                src={Avatar}
                alt="avatar"
              />
              <div>
                <p className="text-lead line-clamp-2 font-bold mb-[3px]">
                  Jenny Wilson
                </p>
                <p className="text-gray-500 text-md">Biffco Enterprises Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
