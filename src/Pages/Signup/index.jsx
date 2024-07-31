import { Input } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  SiteLogo,
  FadingBackground,
  Popup,
  Loader,
} from "../../components/shared/index";
import bgImage1 from "../../assets/images/Loginsignup/Background/img1.jpg";
import bgImage2 from "../../assets/images/Loginsignup/Background/img2.jpg";
import bgImage3 from "../../assets/images/Loginsignup/Background/img3.jpg";
import bgImage4 from "../../assets/images/Loginsignup/Background/img4.jpg";
import bgImage5 from "../../assets/images/Loginsignup/Background/img5.jpg";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
const backgroundImages = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];
export const Signup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsPopupOpen(true);
  };

  useEffect(() => {
    let timer;
    if (isPopupOpen) {
      timer = setTimeout(() => {
        setIsPopupOpen(false);
        navigate("/sign-in");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isPopupOpen, navigate]);
  return (
    <section className="px-6 lg:px-0 h-screen flex items-center justify-center bg-no-repeat inset-0 bg-cover">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <FadingBackground images={backgroundImages} />
      <div className="container 2xl:px-80 xl:px-52 z-[99]">
        <div className="bg-white rounded-lg p-5 shadow-2xl">
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 gap-6">
            <div className="xl:col-span-2 lg:col-span-1 hidden lg:block">
              <div className="bg-theme-color text-white rounded-lg flex flex-col justify-between gap-10 h-full w-full p-7">
                <SiteLogo white={true} className="w-55" />
                <div>
                  <h1 className="text-3xl/tight mb-4">Joint Wow Community</h1>
                  <p className="text-gray-200 font-normal leading-relaxed">
                    Instead of Signup as individual, Joint Wow community by
                    registering your company and get wow benifits.
                  </p>
                </div>

                <div>
                  <div className="bg-[#DA9B58] rounded-lg p-5">
                    <p className="text-gray-200 text-sm font-normal leading mb-4">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority in some form
                    </p>
                    <div className="flex items-center gap-4">
                      <img src={bgImage1} alt="" className="h-12 rounded-lg" />
                      <div>
                        <p className="font-normal">Timson K</p>
                        <span className="text-xs font-normal">Freelancer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to={"/"}>
                    <p className="text-white text-sm font-bold flex gap-2 items-center justify-center">
                      Back to Website{" "}
                      <GlobeAltIcon className="w-3 text-sm font-bold" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="xl:col-span-3 lg:col-span-2 lg:m-10">
              <div>
                <h1 className="text-2xl/tight mb-3">Sign Up</h1>
                <p className="text-sm font-medium leading-relaxed">
                  We are here to help you and we'd love to connect with you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 mt-10"
              >
                <div>
                  <label
                    className="font-medium text-sm text-left block mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    placeholder="John"
                    className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="font-medium text-sm text-left block mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    {...register("lastName", {
                      required: "First Name is required",
                    })}
                    placeholder="John"
                    className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="font-medium text-sm text-left block mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Input
                    type="text"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                    placeholder="johnsmith@gmail.com"
                    className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="font-medium text-sm text-left block mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Input
                    type="password"
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters",
                      },
                    })}
                    placeholder="xxxxxxxxx"
                    className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="font-medium text-sm text-left block mb-2"
                    htmlFor="role"
                  >
                    I am a
                  </label>
                  <select
                    id="role"
                    {...register("role", {
                      required: "Please select your role",
                    })}
                    className="w-full border rounded-lg p-2 data-[hover]:shadow data-[focus]:bg-blue-100"
                  >
                    <option value="">Select your role</option>
                    <option value="architect">Architect</option>
                    <option value="interior_designer">Interior Designer</option>
                    <option value="engineer">Engineer</option>
                    <option value="supplier">Supplier</option>
                    <option value="manufacturer">Manufacturer</option>
                  </select>
                  {errors.role && (
                    <span className="text-red-500 text-sm">
                      {errors.role.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-6 mt-8">
                  <button
                    type="submit"
                    className="bg-theme-color text-white font-bold text-sm rounded-lg px-4 py-2"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm font-medium text-gray-500">
                    <Link
                      to="/create-company"
                      className="ms-2 underline font-bols text-black"
                    >
                      registering your Company
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <div className="flex flex-col items-center justify-center min-h-[300px] space-y-6">
          <SiteLogo className="w-32 md:w-40 lg:w-48" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Success!
          </h2>
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl text-center">
            Thank you for signing up.
          </p>
          <Loader />
          <p className="text-sm md:text-base lg:text-lg text-gray-500 text-center">
            Redirecting to sign-in page...
          </p>
        </div>
      </Popup>
    </section>
  );
};
