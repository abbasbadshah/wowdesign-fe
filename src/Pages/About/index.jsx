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
      <section class="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div class="px-4 sm:px-6 lg:px-24 relative text-center">
          <h1 class=" mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
          Discover Spaces, Connect with Visionaries
          </h1>
          <p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
          Your Gateway to Exceptional Architecture and Interior Design Professionals
          </p>
        </div>
      </section>
      <section class="py-14 lg:py-24 relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div class="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034769.png"
                alt="About Us tailwind page"
                class="max-lg:mx-auto"
              />
            </div>
            <div class="lg:pl-[100px] flex items-center">
              <div class="data w-full">
                <h2 class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                Bridging Dreams and Design{" "}
                </h2>
                <p class="font-normal text-base leading-8 text-black max-lg:text-center max-w-2xl mx-auto">
                At Wow Designs, we're passionate about bringing visionary spaces to life. Our platform serves as the vital link between discerning clients and top-tier architecture and interior design professionals. We curate a diverse community of creative talents, from avant-garde architects pushing the boundaries of form to interior designers who transform houses into homes. Our mission is to simplify your search for the perfect design partner, ensuring that your space – whether it's a cozy apartment, a sprawling estate, or a cutting-edge commercial project – is crafted with expertise, innovation, and your unique vision in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-14 lg:py-24 relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div class="lg:pr-24 flex items-center">
              <div class="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  class="block lg:hidden mb-9 mx-auto"
                />
                <h2 class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                Our Path to Design Excellence
                </h2>
                <p class="font-normal text-base leading-8 text-black max-lg:text-center max-w-2xl mx-auto">
                <span className="font-bold text-theme-color">Wow Designs and Products</span> began as a simple idea in 2015: to create a seamless connection between design visionaries and those seeking to bring their space dreams to reality. What started as a local directory quickly blossomed into a global platform, driven by our commitment to quality and innovation. Over the years, we've fostered collaborations that have resulted in award-winning designs, sustainable architectural marvels, and interiors that redefine comfort and style. Our journey has been marked by continuous growth, adapting to new design trends, embracing technology, and always putting our users first. Today, we stand proud as the go-to resource for anyone looking to transform their space, big or small, with the help of world-class design professionals. As we look to the future, we remain dedicated to our core mission: making exceptional design accessible to all.
                </p>
              </div>
            </div>
            <div class="img-box ">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                class="hidden lg:block "
              />
            </div>
          </div>
        </div>
      </section>
      <section class="py-20 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div class="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-theme-color">
                  240%
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    Company's remarkable growth journey as we continually
                    innovate and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-theme-color">
                  175+
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    Our very talented team members are the powerhouse of
                    pagedone and pillars of our success.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-theme-color">
                  625+
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Projects Completed
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    We have accomplished more than 625 projects worldwide and we
                    are still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-20 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="bg-theme-color rounded-2xl p-8 xl:p-11">
            <h2 class="font-manrope text-4xl text-black text-center font-bold mb-4">
              Subscribe to the latest offer
            </h2>
            <p class="text-black text-center mb-11 max-lg:max-w-2xl mx-auto">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div class="max-w-md mx-auto lg:bg-transparent max-lg:py-3 lg:rounded-full border-b lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
              <input
                type="text"
                name="email"
                class="py-2 px-6 bg-transparent rounded-full border-0  text-gray-100 max-lg:text-center placeholder:text-black focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                placeholder="Enter your email.."
              />
              <button
                type="submit"
                class="py-2 px-5 text-sm bg-black shadow-md rounded-full  text-white font-semibold hover:bg-gray-400"
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
