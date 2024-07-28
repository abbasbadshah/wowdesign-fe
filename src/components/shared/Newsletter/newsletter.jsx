import React from "react";
import { useForm } from "react-hook-form";
import CTAImage from "../../../assets/images/Projects/restaurant.jpg";

const NewsletterCTA = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Email submitted:", data.email);
    reset();
  };

  return (
    <div className="container-fluid my-12 !px-0 md:!px-6 lg:my-16 2xl:!px-7 3xl:!px-8 3xl:!px-12 4xl:!px-12">
      <div className="relative md:px-12 md:py-12 lg:px-14 xl:px-20 xl:py-16 3xl:px-32 3xl:py-20 4xl:px-40 4xl:py-[88px] py-20 px-4 md:pl-0 md:!pb-16 xl:!py-20">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <img
          alt="Call to action Banner"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="aspect-[18/5] bg-gray-lighter object-cover md:max-h-full md:rounded-2xl"
          sizes="100vw"
          src={CTAImage}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: 0,
            color: "transparent",
          }}
        />
        <div className="relative bg-white shadow-card md:bg-transparent md:shadow-none max-w-[500px] md:max-w-[380px] rounded-lg m-auto md:!ml-auto md:!mr-0 lg:max-w-[440px] xl:max-w-[500px] px-4 pb-4 pt-8 md:px-0 md:pb-0 md:pt-0">
          <h2 className="text-center text-2xl font-bold text-white md:text-left md:text-3xl xl:mb-6 3xl:text-5xl !text-primary md:!text-white text-2xl 3xl:text-[44px] 3xl:leading-[64px] mb-2 xl:mb-5">
            Subscribe and get exclusive deals &amp; offer
          </h2>
          <p className="mb-7 leading-[1.78] text-white md:text-base xl:mb-10 3xl:text-lg text-sm md:text-base !text-primary md:!text-white text-center md:text-left leading-[22px] md:leading-6 3xl:leading-8 mb-6 md:!mb-8">
            Find and book your dream boat. The world's leading luxury boat
            comparison site.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
            <div className="relative">
              <div className="flex flex-col mb-3 rounded-none border-none md:mb-0 lg:!rounded-xl">
                <label className="block text-base font-bold leading-7">
                  <div className="relative">
                    <input
                      {...register("email", { 
                        required: "Email is required", 
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      spellCheck="false"
                      placeholder="Your email address"
                      className="block peer w-full bg-transparent font-normal focus:outline-none focus:ring-[1px] transition duration-200 disabled:bg-gray-100 disabled:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200 px-4 py-2 text-sm h-10 lg:h-11 2xl:h-12 leading-[40px] lg:leading-[44px] 2xl:leading-[48px] rounded-md bg-transparent border border-gray-300 read-only:border-gray-300 read-only:focus:ring-0 placeholder:text-gray-500 not-read-only:hover:enabled:border-gray-1000 focus:border-gray-1000 not-read-only:focus:enabled:border-gray-1000 focus:ring-gray-900/20 !bg-white h-[54px] md:!h-[56px] 3xl:!h-[60px] !pr-[140px]"
                      type="text"
                      style={{
                        backgroundImage: 'url("data:image/png',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: 20,
                        backgroundPosition: "97% center",
                        cursor: "auto",
                      }}
                      data-temp-mail-org={0}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                  </div>
                </label>
              </div>
              <button
                type="submit"
                className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-4 py-2 text-sm rounded-md border border-transparent bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 right-[5px] block w-full py-4 text-sm tracking-wide md:absolute md:top-[5px] md:h-[46px] md:w-auto md:px-7 lg:!rounded-lg 3xl:h-[50px]"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCTA;