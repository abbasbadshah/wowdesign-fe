// StepFour.js
import React from "react";
import { Input } from "@headlessui/react";

export const StepFour = ({ register, errors }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h3 className="text-xl font-bold mb-4 text-left">Business Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label
            className="font-medium text-sm text-left block mb-2"
            htmlFor="businessType"
          >
            Business Type
          </label>
          <select
            id="businessType"
            {...register("businessType", {
              required: "Business type is required",
            })}
            className="w-full border rounded-lg p-2"
          >
            <option value="">Select business type</option>
            <option value="sole_proprietorship">Sole Proprietorship</option>
            <option value="partnership">Partnership</option>
            <option value="corporation">Corporation</option>
            <option value="llc">LLC</option>
          </select>
          {errors.businessType && (
            <p className="text-red-500 text-sm">
              {errors.businessType.message}
            </p>
          )}
        </div>
        <div>
          <label
            className="font-medium text-sm text-left block mb-2"
            htmlFor="employeeCount"
          >
            Number of Employees
          </label>
          <Input
            type="number"
            id="employeeCount"
            {...register("employeeCount", {
              required: "Employee count is required",
              min: 1,
            })}
            className="w-full border rounded-lg p-2"
          />
          {errors.employeeCount && (
            <p className="text-red-500 text-sm">
              {errors.employeeCount.message}
            </p>
          )}
        </div>
        <div>
          <label
            className="font-medium text-sm text-left block mb-2"
            htmlFor="annualRevenue"
          >
            Annual Revenue
          </label>
          <Input
            type="number"
            id="annualRevenue"
            {...register("annualRevenue", {
              required: "Annual revenue is required",
              min: 0,
            })}
            className="w-full border rounded-lg p-2"
          />
          {errors.annualRevenue && (
            <p className="text-red-500 text-sm">
              {errors.annualRevenue.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label
          className="font-medium text-sm text-left block mb-2"
          htmlFor="companyLocation"
        >
          Company Location
        </label>
        <Input
          type="text"
          id="companyLocation"
          {...register("companyLocation", {
            required: "Company location is required",
          })}
          placeholder="Enter company location"
          className="w-full border rounded-lg p-2"
        />
        {errors.companyLocation && (
          <span className="text-red-500 text-sm">
            {errors.companyLocation.message}
          </span>
        )}
      </div>

      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6177455759703!2d75.80922237600166!3d22.705269628093465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd7acfafc65%3A0x2844ae94d8305a5d!2sNoorani%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452006!5e0!3m2!1sen!2sin!4v1719028405777!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - Noorani Nagar, Indore"
        />
      </div>
    </div>
  );
};
