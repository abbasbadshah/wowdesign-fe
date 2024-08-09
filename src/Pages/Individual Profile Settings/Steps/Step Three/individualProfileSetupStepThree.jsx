// Steps/StepThree.jsx

import React from "react";
import { Input, Select } from "@headlessui/react";

export const IndividualProfileSetupStepThree = ({ register, watch }) => {
  const companyCount = watch("companyCount", "1");

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Company Details</h3>
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
  );
};