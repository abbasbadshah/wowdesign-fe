import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Input } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FadingBackground } from "../../components/shared/index";
import bgImage1 from "../../assets/images/Loginsignup/Background/img1.jpg";
import bgImage2 from "../../assets/images/Loginsignup/Background/img2.jpg";
import bgImage3 from "../../assets/images/Loginsignup/Background/img3.jpg";
import bgImage4 from "../../assets/images/Loginsignup/Background/img4.jpg";
import bgImage5 from "../../assets/images/Loginsignup/Background/img5.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { StepOne } from "../Create Company/StepOne/stepOne";
import { StepTwo } from "../Create Company/StepTwo/stepTwo";

const backgroundImages = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];

const slideVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction === "next" ? 100 : -100,
  }),
  animate: { opacity: 1, x: 0 },
  exit: (direction) => ({
    opacity: 0,
    x: direction === "next" ? -100 : 100,
  }),
};

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    setValue,
  } = useForm();

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [direction, setDirection] = useState("next");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onCompanySubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  const validateStep = async (stepNumber) => {
    console.log(`Validating step ${stepNumber}`);
    switch (stepNumber) {
      case 1:
        return await trigger(["options"]);
      case 2:
        return await trigger(["companyName", "description"]);
      default:
        return false;
    }
  };

  const nextStep = async (event) => {
    event.preventDefault();
    const isValid = await validateStep(step);
    if (isValid && step < 2) {
      setDirection("next");
      setStep(step + 1);
    } else if (isValid && step === 2) {
      handleSubmit(onCompanySubmit)();
    } else {
      console.log("Either not valid or last step reached.");
    }
  };

  const prevStep = () => {
    setDirection("prev");
    setStep(step - 1);
  };

  return (
    <section className="lg:px-0 h-full lg:h-screen flex items-center justify-center bg-no-repeat inset-0 bg-cover">
      <FadingBackground images={backgroundImages} />
      <div className="container mt-5 lg:mt-0 px-4 lg:px-52 z-[99]">
        <div className="bg-white rounded-lg p-5 shadow-2xl">
          <div className="hidden lg:grid lg:grid-cols-2 gap-6">
            <div className="lg:col-span-1 lg:m-10">
              <h1 className="text-2xl/tight mb-3">Sign Up</h1>
              <p className="text-sm font-medium leading-relaxed">
                We are here to help you and we'd love to connect with you.
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 mt-0 lg:mt-10"
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
                      required: "Last Name is required",
                    })}
                    placeholder="Doe"
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
                    Already have an account?{" "}
                    <Link
                      to="/sign-in"
                      className="ms-2 underline font-bold text-black"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="lg:col-span-1 lg:m-10 overflow-y-auto overflow-x-hidden max-h-[80vh] custom-scrollbar">
              <h2 className="text-2xl/tight mb-3 p-2 bg-theme-color rounded text-white ">
                Better Signup with Company
              </h2>
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit(onCompanySubmit)}
                  className="space-y-5"
                >
                  <AnimatePresence custom={direction} mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        custom={direction}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={slideVariants}
                        transition={{ duration: 0.5 }}
                      >
                        <StepOne
                          register={register}
                          watch={watch}
                          errors={errors}
                          setValue={setValue}
                        />
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        custom={direction}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={slideVariants}
                        transition={{ duration: 0.5 }}
                      >
                        <StepTwo
                          register={register}
                          errors={errors}
                          watch={watch}
                          setValue={setValue}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="flex justify-between mt-8">
                    {step > 1 && (
                      <motion.button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-300 text-black font-bold text-sm rounded-lg px-4 py-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Back
                      </motion.button>
                    )}
                    <motion.button
                      type="button"
                      onClick={(e) => nextStep(e)}
                      className="bg-theme-color text-white font-bold text-sm rounded-lg px-4 py-2 origin-center"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {step < 2 ? "Next" : "Finish"}
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h2 className="text-2xl font-bold mb-4">
                    Company Created Successfully!
                  </h2>
                  <p className="mb-8">
                    Your company profile has been set up. You can now explore
                    our platform.
                  </p>
                  <motion.button
                    onClick={() => navigate("/")}
                    className="bg-theme-color text-white font-bold text-sm rounded-lg px-6 py-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Go to Home Page
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
          <div className="lg:hidden">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-[#F8EBDE] p-1 mb-4">
                <Tab
                  className={({ selected }) =>
                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black
                  ${
                    selected
                      ? "bg-white shadow"
                      : "text-black hover:bg-white/[0.12] hover:text-black"
                  }`
                  }
                >
                  Sign Up
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black
                  ${
                    selected
                      ? "bg-white shadow"
                      : "text-black hover:bg-white/[0.12] hover:text-black"
                  }`
                  }
                >
                  Create Company
                </Tab>
              </Tab.List>
              <Tab.Panels className="space-y-4">
                <Tab.Panel>
                  <h1 className="text-2xl/tight mb-3">Sign Up</h1>
                  <p className="text-sm font-medium leading-relaxed">
                    We are here to help you and we'd love to connect with you.
                  </p>
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
                          required: "Last Name is required",
                        })}
                        placeholder="Doe"
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
                            message:
                              "Entered value does not match email format",
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
                        <option value="interior_designer">
                          Interior Designer
                        </option>
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
                        Already have an account?{" "}
                        <Link
                          to="/sign-in"
                          className="ms-2 underline font-bold text-black"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </form>
                </Tab.Panel>
                <Tab.Panel className="max-h-[80vh] lg:max-h-max lg:overscroll-none overflow-scroll">
                  <h2 className="text-2xl/tight mb-3 p-2 bg-theme-color rounded text-white ">
                    Better Signup with Company
                  </h2>
                  {!isSubmitted ? (
                    <form
                      onSubmit={handleSubmit(onCompanySubmit)}
                      className="space-y-5"
                    >
                      <AnimatePresence custom={direction} mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            custom={direction}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={slideVariants}
                            transition={{ duration: 0.5 }}
                          >
                            <StepOne
                              register={register}
                              watch={watch}
                              errors={errors}
                              setValue={setValue}
                            />
                          </motion.div>
                        )}
                        {step === 2 && (
                          <motion.div
                            key="step2"
                            custom={direction}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={slideVariants}
                            transition={{ duration: 0.5 }}
                          >
                            <StepTwo
                              register={register}
                              errors={errors}
                              watch={watch}
                              setValue={setValue}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div className="flex justify-between mt-8">
                        {step > 1 && (
                          <motion.button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-300 text-black font-bold text-sm rounded-lg px-4 py-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Back
                          </motion.button>
                        )}
                        <motion.button
                          type="button"
                          onClick={(e) => nextStep(e)}
                          className="bg-theme-color text-white font-bold text-sm rounded-lg px-4 py-2 origin-center"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {step < 2 ? "Next" : "Finish"}
                        </motion.button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <h2 className="text-2xl font-bold mb-4">
                        Company Created Successfully!
                      </h2>
                      <p className="mb-8">
                        Your company profile has been set up. You can now
                        explore our platform.
                      </p>
                      <motion.button
                        onClick={() => navigate("/")}
                        className="bg-theme-color text-white font-bold text-sm rounded-lg px-6 py-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Go to Home Page
                      </motion.button>
                    </motion.div>
                  )}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </section>
  );
};
