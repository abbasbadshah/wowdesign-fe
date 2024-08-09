import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../../components/layout/Dashboard Layout";
import {
  IndividualProfileUpdateStepOne,
  IndividualProfileUpdateStepTwo,
  IndividualProfileUpdateStepThree,
  IndividualProfileUpdateStepFour,
} from "./Steps";
import {
  FadingBackground,
  Popup,
  Loader,
  SiteLogo,
} from "../../../components/shared";
import { Helmet } from "react-helmet";

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
};

const stepTitles = [
  "Personal Details",
  "Social Media",
  "Company Details",
  "Media",
];

export const IndividualProfileStepForm = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    setValue,
    control,
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("userProfileData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  const onSubmit = (data) => {
    console.log(data);
    const formDataWithFiles = {
      ...data,
      bannerImage: data.bannerImage ? data.bannerImage.name : null,
      profileImage: data.profileImage ? data.profileImage.name : null,
    };
    localStorage.setItem("userProfileData", JSON.stringify(formDataWithFiles));
    setIsSubmitted(true);
    setIsPopupOpen(true);
  };

  useEffect(() => {
    let timer;
    if (isPopupOpen) {
      timer = setTimeout(() => {
        setIsPopupOpen(false);
        navigate("/user-profile");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isPopupOpen, navigate]);

  const validateStep = async (stepNumber) => {
    console.log(`Validating step ${stepNumber}`);
    switch (stepNumber) {
      case 0:
        return await trigger([
          "fullName",
          "email",
          "phoneNumber",
          "address",
          "country",
          "description",
        ]);
      case 1:
        return await trigger(["linkedin", "twitter", "facebook", "instagram"]);
      case 2:
        return await trigger([
          "companyCount",
          "company1",
          "company2",
          "company3",
          "company4",
          "company5",
        ]);
      case 3:
        return await trigger(["bannerImage", "profileImage"]);
      default:
        return false;
    }
  };

  const nextStep = async (event) => {
    event.preventDefault();
    const isValid = await validateStep(step);
    if (isValid && step < 3) {
      setStep(step + 1);
    } else if (isValid && step === 3) {
      handleSubmit(onSubmit)();
    } else {
      console.log("Either not valid or last step reached.");
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <DashboardLayout>
      <Helmet>
        <title>Individual Profile Setup</title>
      </Helmet>
      <div className="max-h-[85vh] overflow-y-auto z-[99] bg-white shadow-md rounded text-left">
        <header className="bg-white p-6 flex flex-col items-center justify-between shadow-md">
          <SiteLogo className="w-32 mb-4" />
          <ol className="hidden md:flex items-center w-full space-x-4">
            {stepTitles.map((title, index) => (
              <li key={index} className="flex-1">
                <a
                  href="#"
                  className={`flex items-center font-medium px-4 py-5 w-full rounded-lg ${
                    index === step
                      ? "bg-[#EFD8BD]"
                      : index < step
                      ? "bg-[#FBF5EE]"
                      : ""
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10 ${
                      index < step
                        ? "bg-black text-white"
                        : index === step
                        ? "bg-[#FBF5EE] border border-black text-black"
                        : "bg-gray-50 border border-gray-200 text-gray-500"
                    }`}
                  >
                    {index < step
                      ? "✓"
                      : (index + 1).toString().padStart(2, "0")}
                  </span>
                  <h4
                    className={`text-base ${
                      index <= step ? "text-black" : "text-gray-900"
                    }`}
                  >
                    {title}
                  </h4>
                </a>
              </li>
            ))}
          </ol>
          <div className="md:hidden flex items-center">
            <a
              href="#"
              className="flex items-center font-medium px-4 py-5 w-full rounded-lg bg-[#FBF5EE]"
            >
              <span className="w-8 h-8 rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10 bg-[#FBF5EE] border border-black text-black">
                {(step + 1).toString().padStart(2, "0")}
              </span>
              <h4 className="text-base text-black">{stepTitles[step]}</h4>
            </a>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step0"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <IndividualProfileUpdateStepOne
                    register={register}
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                  />
                </motion.div>
              )}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <IndividualProfileUpdateStepTwo
                    register={register}
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                  />
                </motion.div>
              )}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <IndividualProfileUpdateStepThree
                    register={register}
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                  />
                </motion.div>
              )}
              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <IndividualProfileUpdateStepFour
                    control={control}
                    errors={errors}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        <footer className="bg-[#FBF5EE] p-4">
          <div className="w-full max-w-md mx-auto border-2 border-theme-color rounded-md">
            <div className="flex items-center justify-between gap-3 p-3 bg-white rounded">
              <button
                onClick={prevStep}
                disabled={step === 0}
                className={`flex items-center gap-1.5 border-none text-base font-medium py-2.5 ${
                  step === 0
                    ? "text-gray-400"
                    : "text-gray-700 hover:text-theme-color"
                } transition-all duration-300`}
              >
                <svg
                  className="rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                >
                  <path
                    d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </button>
              <ul className="flex gap-1 items-center">
                {[0, 1, 2, 3].map((index) => (
                  <li
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index <= step ? "bg-theme-color" : "bg-indigo-100"
                    }`}
                  ></li>
                ))}
              </ul>
              <button
                onClick={nextStep}
                className="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-theme-color"
              >
                {step === 3 ? "Submit" : "Next"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                >
                  <path
                    d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
      {isSubmitted && (
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <div className="flex flex-col items-center justify-center min-h-[300px] space-y-6">
            <SiteLogo className="w-32 md:w-40 lg:w-48" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              Success!
            </h2>
            <p className="text-gray-600 text-lg md:text-xl lg:text-2xl text-center">
              Your individual profile has been successfully updated.
            </p>
            <Loader />
            <p className="text-sm md:text-base lg:text-lg text-gray-500 text-center">
              Redirecting to user profile page...
            </p>
          </div>
        </Popup>
      )}
    </DashboardLayout>
  );
};
