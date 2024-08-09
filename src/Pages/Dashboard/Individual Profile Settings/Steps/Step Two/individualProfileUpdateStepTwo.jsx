// Steps/StepTwo.jsx

import React from "react";
import { Input } from "@headlessui/react";

export const IndividualProfileUpdateStepTwo = ({ register }) => {
  const socialMedias = [
    { name: "linkedin", placeholder: "LinkedIn Profile URL" },
    { name: "twitter", placeholder: "Twitter Profile URL" },
    { name: "facebook", placeholder: "Facebook Profile URL" },
    { name: "instagram", placeholder: "Instagram Profile URL" },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Social Media Profiles
      </h3>
      <div className="space-y-6 grid grid-col lg:grid-col-2">
        {socialMedias.map((social) => (
          <div key={social.name}>
            <label
              htmlFor={social.name}
              className="block text-sm font-medium text-gray-700"
            >
              {social.name.charAt(0).toUpperCase() + social.name.slice(1)}
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
  );
};
