import { Layout } from "../../components/layout/layout";
import { BreadcrumbComponent } from "../../components/shared";
import AboutBreadCrumbImage from "../../assets/images/About/aboutbg.jpg";

export const AboutCompany = () => {
  return (
    <Layout>
      <BreadcrumbComponent
        title={"About Us"}
        breadcrumb={["About Us"]}
        bgImage={AboutBreadCrumbImage}
      />
      <section className="relative z-0 py-14 lg:py-24 bg-gray-50">
        <div className="relative px-4 text-center sm:px-6 lg:px-24">
          <h1 className="mx-auto mb-5 text-4xl font-bold text-center text-gray-900  font-manrope md:text-5xl md:leading-normal">
            Discover Spaces, Connect with Visionaries
          </h1>
          <p className="max-w-sm mx-auto text-base font-normal leading-7 text-center text-gray-500 mb-9">
            Your Gateway to Exceptional Architecture and Interior Design
            Professionals
          </p>
        </div>
      </section>
      <section className="relative py-14 lg:py-24">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034769.png"
                alt="About Us tailwind page"
                className="max-lg:mx-auto"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="w-full data">
                <h2 className="relative text-4xl font-bold text-black font-manrope lg:text-5xl mb-9 max-lg:text-center">
                  Bridging Dreams and Design{" "}
                </h2>
                <p className="max-w-2xl mx-auto text-base font-normal leading-8 text-black max-lg:text-center">
                  At Wow Designs, we're passionate about bringing visionary
                  spaces to life. Our platform serves as the vital link between
                  discerning clients and top-tier architecture and interior
                  design professionals. We curate a diverse community of
                  creative talents, from avant-garde architects pushing the
                  boundaries of form to interior designers who transform houses
                  into homes. Our mission is to simplify your search for the
                  perfect design partner, ensuring that your space – whether
                  it's a cozy apartment, a sprawling estate, or a cutting-edge
                  commercial project – is crafted with expertise, innovation,
                  and your unique vision in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-14 lg:py-24">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="flex items-center lg:pr-24">
              <div className="w-full data">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  className="block mx-auto lg:hidden mb-9"
                />
                <h2 className="text-4xl font-bold text-black font-manrope lg:text-5xl mb-9 max-lg:text-center">
                  Our Path to Design Excellence
                </h2>
                <p className="max-w-2xl mx-auto text-base font-normal leading-8 text-black max-lg:text-center">
                  <span classNameName="font-bold text-theme-color">
                    Wow Designs and Products
                  </span>{" "}
                  began as a simple idea in 2015: to create a seamless
                  connection between design visionaries and those seeking to
                  bring their space dreams to reality. What started as a local
                  directory quickly blossomed into a global platform, driven by
                  our commitment to quality and innovation. Over the years,
                  we've fostered collaborations that have resulted in
                  award-winning designs, sustainable architectural marvels, and
                  interiors that redefine comfort and style. Our journey has
                  been marked by continuous growth, adapting to new design
                  trends, embracing technology, and always putting our users
                  first. Today, we stand proud as the go-to resource for anyone
                  looking to transform their space, big or small, with the help
                  of world-className design professionals. As we look to the
                  future, we remain dedicated to our core mission: making
                  exceptional design accessible to all.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                className="hidden lg:block "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 font-manrope mb-14">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full p-6 mx-auto bg-white shadow-md max-lg:max-w-2xl lg:mx-0 lg:w-1/3 rounded-2xl shadow-gray-100">
              <div className="flex gap-5">
                <div className="text-2xl font-bold font-manrope text-theme-color">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Company growth
                  </h4>
                  <p className="text-xs leading-5 text-gray-500">
                    Company's remarkable growth journey as we continually
                    innovate and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-6 mx-auto bg-white shadow-md max-lg:max-w-2xl lg:mx-0 lg:w-1/3 rounded-2xl shadow-gray-100">
              <div className="flex gap-5">
                <div className="text-2xl font-bold font-manrope text-theme-color">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Company growth
                  </h4>
                  <p className="text-xs leading-5 text-gray-500">
                    Our very talented team members are the powerhouse of
                    pagedone and pillars of our success.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-6 mx-auto bg-white shadow-md max-lg:max-w-2xl lg:mx-0 lg:w-1/3 rounded-2xl shadow-gray-100">
              <div className="flex gap-5">
                <div className="text-2xl font-bold font-manrope text-theme-color">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Projects Completed
                  </h4>
                  <p className="text-xs leading-5 text-gray-500">
                    We have accomplished more than 625 projects worldwide and we
                    are still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="p-8 bg-theme-color rounded-2xl xl:p-11">
            <h2 className="mb-4 text-4xl font-bold text-center text-black font-manrope">
              Subscribe to the latest offer
            </h2>
            <p className="mx-auto text-center text-black mb-11 max-lg:max-w-2xl">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="max-w-md mx-auto lg:bg-transparent max-lg:py-3 lg:rounded-full border-b lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
              <input
                type="text"
                name="email"
                className="flex-1 w-full px-6 py-2 text-gray-100 bg-transparent border-0 rounded-full max-lg:text-center placeholder:text-black focus:outline-none lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                placeholder="Enter your email.."
              />
              <button
                type="submit"
                className="px-5 py-2 text-sm font-semibold text-white bg-black rounded-full shadow-md hover:bg-gray-400"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
