import React, { useState } from "react";
import { Popup, Loader } from "../../../components/shared/index";
import Broucher from "../../../assets/images/Company/DummyBrocher.pdf";
import { useForm } from "react-hook-form";
const CompanyBrochure = () => {
  const [isBlurred, setIsBlurred] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPopup(false);
      setIsBlurred(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <div className={`relative ${isBlurred ? "filter blur-md" : ""}`}>
        <iframe
          src={Broucher}
          className="w-full h-[800px]"
          title="Company Brochure"
        />
      </div>
      {isBlurred && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-theme-color text-black font-bold py-2 px-4 rounded"
          >
            View Brochure
          </button>
        </div>
      )}
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <div className="h-[500px] overflow-y-auto">
          {loading ? (
            <div className="h-full flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Access Brochure</h2>
              <div>
                <label htmlFor="firstName" className="block mb-1">
                  First Name
                </label>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1">
                  Last Name
                </label>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="contact" className="block mb-1">
                  Contact Number
                </label>
                <input
                  {...register("contact", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid contact number",
                    },
                  })}
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.contact && (
                  <span className="text-red-500 text-sm">
                    {errors.contact.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-theme-color text-black font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </Popup>
    </div>
  );
};

export default CompanyBrochure;
