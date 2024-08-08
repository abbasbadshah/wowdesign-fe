import React, { useEffect, useState } from "react";
import { Input, Select } from "@headlessui/react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FileUpload,
  Loader,
  SiteLogo,
  Popup,
} from "../../../components/shared";
import { DashboardLayout } from "../../../components/layout/Dashboard Layout";

export const IndividualDetailFillup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const storedData = localStorage.getItem("userProfileData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const formDataWithFiles = {
      ...data,
      bannerImage: data.bannerImage ? data.bannerImage.name : null,
      profileImage: data.profileImage ? data.profileImage.name : null,
    };
    console.log(formDataWithFiles);
    localStorage.setItem("userProfileData", JSON.stringify(formDataWithFiles));

    setIsSubmitting(false);
    setShowSuccessPopup(true);
    reset();
  };

  const handleViewProfile = () => {
    setShowSuccessPopup(false);
    setIsSubmitting(true);
    setTimeout(() => {
      navigate("/user-profile");
      setIsSubmitting(false);
    }, 2000);
  };

  const companyCount = watch("companyCount", "1");

  const socialMedias = [
    { name: "linkedin", placeholder: "LinkedIn Profile URL" },
    { name: "twitter", placeholder: "Twitter Profile URL" },
    { name: "facebook", placeholder: "Facebook Profile URL" },
    { name: "instagram", placeholder: "Instagram Profile URL" },
  ];

  return (
    <DashboardLayout>
      <div className="max-h-[85vh] overflow-y-auto z-[99] p-10 bg-white shadow-md rounded text-left">
        <div className="bg-white overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Individual Profile Setting
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-y-6 gap-x-10 sm:grid-cols-2">
                <div className="space-y-6 shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Personal Details
                  </h3>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <Input
                      type="text"
                      id="fullName"
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.fullName && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Invalid email format",
                        },
                      })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phoneNumber"
                      {...register("phoneNumber")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <Input
                      type="text"
                      id="address"
                      {...register("address")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <Input
                      type="text"
                      id="country"
                      {...register("country")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      {...register("description")}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    ></textarea>
                  </div>
                </div>

                <div className="space-y-6 shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Social Media Profiles
                  </h3>
                  {socialMedias.map((social) => (
                    <div key={social.name}>
                      <label
                        htmlFor={social.name}
                        className="block text-sm font-medium text-gray-700"
                      >
                        {social.name.charAt(0).toUpperCase() +
                          social.name.slice(1)}
                      </label>
                      <Input
                        type="url"
                        id={social.name}
                        {...register(social.name)}
                        placeholder={social.placeholder}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-10 sm:grid-cols-2">
                <div className="space-y-6 shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Company Details
                  </h3>
                  <div>
                    <label
                      htmlFor="companyCount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Companies you work for
                    </label>
                    <Select
                      id="companyCount"
                      {...register("companyCount")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num.toString()}>
                          {num}
                        </option>
                      ))}
                    </Select>
                  </div>
                  {[...Array(parseInt(companyCount))].map((_, index) => (
                    <div key={index}>
                      <label
                        htmlFor={`company${index + 1}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company {index + 1}
                      </label>
                      <Input
                        type="text"
                        id={`company${index + 1}`}
                        {...register(`company${index + 1}`)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-6 shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Media</h3>
                  <Controller
                    name="bannerImage"
                    control={control}
                    render={({ field }) => (
                      <FileUpload
                        label="Banner Image"
                        onFileChange={(file) => field.onChange(file)}
                        multiple
                      />
                    )}
                  />
                  <Controller
                    name="profileImage"
                    control={control}
                    render={({ field }) => (
                      <FileUpload
                        label="Profile Image"
                        onFileChange={(file) => field.onChange(file)}
                        multiple
                        maxFiles={1}
                      />
                    )}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999]">
          <Loader />
        </div>
      )}

      {/* Success Popup */}
      <Popup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
      >
        <div className="text-center">
          <SiteLogo className="mx-auto mb-4 w-40" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Success!</h3>
          <p className="text-sm text-gray-500 mb-4">
            Your profile has been successfully updated.
          </p>
          <button
            onClick={handleViewProfile}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View Profile
          </button>
        </div>
      </Popup>
    </DashboardLayout>
  );
};
