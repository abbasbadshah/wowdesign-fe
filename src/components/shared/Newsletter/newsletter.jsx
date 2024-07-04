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
    <div className="flex flex-col max-w-xl px-4 py-10 mx-auto my-10 text-center bg-gray-700 border rounded sm:px-10 lg:max-w-screen-lg lg:flex-row lg:text-left">
      <div className="mx-auto w-[15rem] max-w-full lg:mx-0 lg:w-[40rem]">
        <img
          className="object-cover w-full h-96"
          src={CTAImage}
          alt="Interior design sketch"
        />
      </div>
      <div className="lg:pl-10">
        <h1 className="mt-8 text-4xl font-bold text-white md:text-5xl md:leading-snug">
          Stay Inspired with <br className="hidden sm:block" />
          Design Trends
        </h1>
        <p className="mt-4 text-xl text-white">
          Join our newsletter to receive the latest updates on architectural
          innovations, interior design tips, and exclusive listings from top
          professionals in the industry.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mt-8 bg-white border rounded-md sm:flex-row"
        >
          <div className="relative flex-grow">
            <input
              className="w-full h-12 px-4 m-2 text-gray-500 border-0 rounded-md focus:outline-none focus:ring-0"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="absolute bottom-0 text-xs text-red-500 left-2">
                {errors.email.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="px-8 py-3 m-2 font-medium text-white rounded-md bg-theme-color shrink-0 hover:bg-red-700 focus:bg-red-700 focus:outline-none"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterCTA;
