import { Checkbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import React from 'react';

export const StepOne = ({ register, watch, setValue, errors }) => {
  const selectedOptions = watch('options') || [];
  const isDisabled = selectedOptions.length >= 2;

  const options = [
   "Architect",
    "PR Consultancy",
    "Sanitaryware Supplier",
    "Interior Designer",
    "Manufacturer",
    "Cellings Supplier",
    "Fit Out Contractor",
    "Furniture Supplier",
    "Finishes Supplier",
    "Design & Build Contractor",
    "Flooring Supplier",
    "Wall Covering Supplier",
    "Project Managers",
    "Acoustic Supplier",
    "Product Designer",
    "Photographer",
    "Lighting Supplier",
    "Landscaping Contractor",
    "Lighting Consultant",
    "Partition Supplier",
    "Joinery",
  ];

  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option].slice(0, 2);
    
    setValue('options', updatedOptions, { shouldValidate: true });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Company</h2>
      <div className="text-left flex flex-wrap">
        {options.map((option, index) => (
          <div key={index} className="w-1/2 mb-2 flex items-center">
            <Checkbox
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              disabled={isDisabled && !selectedOptions.includes(option)}
              className={({ checked }) =>
                `${
                  checked ? 'bg-theme-color' : 'bg-white'
                } relative inline-flex h-5 w-5 items-center justify-center rounded border mr-2 ${
                  isDisabled && !selectedOptions.includes(option) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`
              }
            >
              {({ checked }) => (
                <CheckIcon
                  className={`${
                    checked ? 'text-white' : 'text-transparent'
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
      {errors.options && <p className="text-red-500">{errors.options.message}</p>}
    </div>
  );
};