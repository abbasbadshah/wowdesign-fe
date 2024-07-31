import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import React from "react";
import { SiteLogo } from "../../../components/shared";

export const StepOne = ({ register, watch, setValue, errors }) => {
  const selectedOptions = watch("options") || [];
  const isDisabled = selectedOptions.length >= 2;

  const options = [
    "Architects",
    "Interior Designer",
    "Landscape Designer",
    "Acoustic Consultant",
    "Engineering and Structural Consultant",
    "Facade / Enclosure Consultant",
    "Sustainability Consultant",
    "Artist and Art Designer",
    "MEP Consultant",
    "Urban Design and Planners",
    "Brand Designer",
    "General Contractor",
    "Fitout Contractor",
    "Design and Build Contractor",
    "Real Estate Developers",
    "Educational Institutions",
    "Government Agencies",
    "Law Firms",
    "Furniture supplier",
    "Lighting Supplier",
    "Acoustic supplier",
    "Sanitaryware Supplier",
    "Surfaces Supplier",
    "Flooring Supplier",
    "Decor supplier",
    "Partition Supplier",
    "Ceiling supplier",
    "Wall Covering Supplier",
    "Kitchen Supplier",
    "AV/IT Supplier",
    "Joinery",
    "Manufacturers",
    "Building Material Supplier",
    "Signage",
    "Technical Services and Installers",
    "Ceilings and Partition Installers",
    "Others"
  ];

  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option].slice(0, 2);

    setValue("options", updatedOptions, { shouldValidate: true });
  };

  return (
    <div>
      <div className="text-left flex flex-wrap">
        {options.map((option, index) => (
          <div key={index} className="w-1/3 mb-2 flex items-center">
            <Checkbox
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              disabled={isDisabled && !selectedOptions.includes(option)}
              className={({ checked }) =>
                `${
                  checked ? "bg-theme-color" : "bg-white"
                } relative inline-flex h-5 w-5 items-center justify-center rounded border mr-2 ${
                  isDisabled && !selectedOptions.includes(option)
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`
              }
            >
              {({ checked }) => (
                <CheckIcon
                  className={`${
                    checked ? "text-white" : "text-transparent"
                  } h-4 w-4`}
                />
              )}
            </Checkbox>
            <label htmlFor={`option-${index}`} className="select-none">
              {option}
            </label>
          </div>
        ))}
      </div>
      {errors.options && (
        <p className="text-red-500">{errors.options.message}</p>
      )}
    </div>
  );
};
