import fbIcon from "../../../assets/images/About/icons/icon-facebook-gray.svg";
import inIcon from "../../../assets/images/About/icons/icon-instagram-gray.svg";
import IconRight from "../../../assets/images/About/icons/icon-right.svg";
import IconPlayButton from "../../../assets/images/About/icons/icon-button.svg";
import aboutTopImage1 from "../../../assets/images/About/abt1.png";
import aboutTopImage2 from "../../../assets/images/About/abt2.png";
import circleblur1 from "../../../assets/images/About/circle-blur-1.svg";
import circleblur2 from "../../../assets/images/About/circle-blur-2.svg";

const socialIcons = [
  { src: fbIcon, alt: "facebook icon", link: "/" },
  { src: inIcon, alt: "instagram icon", link: "/" },
  { src: inIcon, alt: "twitter icon", link: "/" },
  { src: inIcon, alt: "linkedin icon", link: "/" },
];

const stats = [
  { value: "17+", label: "Our Office" },
  { value: "2K+", label: "Completed Cases" },
  { value: "28+", label: "Happy Clients" },
  { value: "86", label: "Skilled People" },
];

export const AboutSectionOne = () => {
  return (
    <div className="relative w-full">
      <img
        className="absolute top-0 left-0 lg:max-w-md"
        src={circleblur1}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 max-w-xs"
        src={circleblur2}
        alt=""
      />
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-10 mt-16 lg:mt-28 lg:flex-row xl:gap-40">
          <div className="flex-1">
            <h1 className="mb-10 text-2xl leading-tight font-chivo md:text-4xl">
              Advanced analytics to grow your business
            </h1>
            <div className="flex items-center gap-5">
              <div className="w-20 h-px bg-gray-300"></div>
              <div className="flex items-center gap-4">
                {socialIcons.map((icon, index) => (
                  <a
                    key={index}
                    className="w-6 h-6 transition-transform duration-200 hover:-translate-y-1"
                    href={icon.link}
                  >
                    <img
                      className="w-full h-full"
                      src={icon.src}
                      alt={icon.alt}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-600 md:text-xl mb-11">
              Feugiat primis ligula risus auctor egestas and augue viverra mauri
              tortor in iaculis magna a feugiat mauris ipsum and placerat
              viverra
            </p>
            <div className="flex items-center">
              <a
                className="flex items-center transition-all duration-200 group px-7 py-3 rounded bg-black text-white hover:bg-theme-color hover:text-black hover:-translate-y-0.5 text-lg font-semibold mr-6"
                href="#"
              >
                Get Start
                <i>
                  <img
                    className="w-3 ml-2 group-hover:filter-black"
                    src={IconRight}
                    alt="arrow right icon"
                  />
                </i>
              </a>
              <div className="flex items-center gap-3">
                <i>
                  <img src={IconPlayButton} alt="" />
                </i>
                <a
                  className="flex items-center gap-1 text-lg font-medium"
                  href="/"
                >
                  How it works
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-16 lg:mt-28 lg:flex-row">
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
          <div className="flex-1">
            <img
              className="object-cover w-full h-full"
              src={aboutTopImage2}
              alt="Agon"
            />
          </div>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 gap-2 text-center gap-y-8 md:grid-cols-2 xl:gap-y-16 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index}>
                <h1 className="mb-1 text-3xl font-bold font-chivo md:text-4xl text-theme-color">
                  {stat.value}
                </h1>
                <p className="mb-3 text-lg font-bold">{stat.label}</p>
                <p className="mx-auto text-gray-500 md:max-w-xs">
                  We always provide people a complete solution upon focused of
                  any business
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
