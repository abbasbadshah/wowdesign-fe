import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { StepOne } from "./StepOne/stepOne";
import { StepTwo } from "./StepTwo/stepTwo";
import { SiteLogo, FadingBackground } from "../../components/shared/index";

import bgImage1 from "../../assets/images/Loginsignup/Background/img1.jpg";
import bgImage2 from "../../assets/images/Loginsignup/Background/img2.jpg";
import bgImage3 from "../../assets/images/Loginsignup/Background/img3.jpg";
import bgImage4 from "../../assets/images/Loginsignup/Background/img4.jpg";
import bgImage5 from "../../assets/images/Loginsignup/Background/img5.jpg";

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

export const CreateCompany = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [direction, setDirection] = useState("next");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    setValue,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
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
      handleSubmit(onSubmit)();
    } else {
      console.log("Either not valid or last step reached.");
    }
  };

  const prevStep = () => {
    setDirection("prev");
    setStep(step - 1);
  };

  return (
    <section className="px-6 lg:px-0 min-h-screen max-h-full flex items-center justify-center bg-no-repeat inset-0 bg-cover">
      <FadingBackground images={backgroundImages} />
      <div className="container 2xl:px-80 xl:px-52 z-[99]">
        <div className="bg-white rounded-lg p-5 shadow-2xl overflow-hidden">
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 gap-6">
            <div className="xl:col-span-2 lg:col-span-1 hidden lg:block">
              <div className="bg-theme-color text-white rounded-lg flex flex-col justify-between gap-10 h-full w-full p-7 max-h-[580px]">
                <SiteLogo white={true} className="w-55" />
                <div>
                  <h1 className="text-3xl/tight mb-4">
                    We're here to help you level up.
                  </h1>
                  <p className="text-black font-normal leading-relaxed">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
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
              </div>
            </div>

            <div className="xl:col-span-3 lg:col-span-2 lg:m-10 overflow-y-auto max-h-[80vh] custom-scrollbar">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                      className="bg-theme-color text-white font-bold text-sm rounded-lg px-4 py-2"
                      whileHover={{ scale: 1.05 }}
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
        </div>
      </div>
    </section>
  );
};
