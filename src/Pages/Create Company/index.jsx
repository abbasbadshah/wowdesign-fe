import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { StepOne } from "./StepOne/stepOne";
import { StepTwo } from "./StepTwo/stepTwo";
import { StepThree } from "./StepThree/stepThree";
import { FadingBackground, Popup, Loader, SiteLogo } from "../../components/shared/index";

import bgImage1 from "../../assets/images/Loginsignup/Background/img1.jpg";
import bgImage2 from "../../assets/images/Loginsignup/Background/img2.jpg";
import bgImage3 from "../../assets/images/Loginsignup/Background/img3.jpg";
import bgImage4 from "../../assets/images/Loginsignup/Background/img4.jpg";
import bgImage5 from "../../assets/images/Loginsignup/Background/img5.jpg";
import { Helmet } from "react-helmet";

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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [step, setStep] = useState(0);
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

  const validateStep = async (stepNumber) => {
    console.log(`Validating step ${stepNumber}`);
    switch (stepNumber) {
      case 0:
        return await trigger(["options"]);
      case 1:
        return await trigger(["companyName", "description"]);
      case 2:
        return await trigger([
          "businessType",
          "employeeCount",
          "annualRevenue",
        ]);
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
    <section className="min-h-screen flex items-center justify-center bg-no-repeat inset-0 bg-cover relative">
      <Helmet>
        <title>Create Company</title>
      </Helmet>
      <FadingBackground images={backgroundImages} />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
          style={{ width: "95vw", height: "95vh" }}
        >
          <div className="p-10 h-full">
            <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <AnimatePresence custom={direction} mode="wait">
                    {step === 0 && (
                      <motion.div
                        key="step0"
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
                        <StepTwo
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
                        custom={direction}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={slideVariants}
                        transition={{ duration: 0.5 }}
                      >
                        <StepThree register={register} errors={errors} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between mt-8">
                    {step > 0 && (
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
                <Popup
                  isOpen={isPopupOpen}
                  onClose={() => setIsPopupOpen(false)}
                >
                  <div className="flex flex-col items-center justify-center min-h-[300px] space-y-6">
                    <SiteLogo className="w-32 md:w-40 lg:w-48" />
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                      Success!
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl lg:text-2xl text-center">
                      Thank you for register your Company in Wow Community.
                    </p>
                    <Loader />
                    <p className="text-sm md:text-base lg:text-lg text-gray-500 text-center">
                      Redirecting to sign-in page...
                    </p>
                  </div>
                </Popup>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
