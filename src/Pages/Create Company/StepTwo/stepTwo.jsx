import { Input, Textarea } from "@headlessui/react";
import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import data from "./data.json";

export const StepTwo = ({ register, errors, setValue, watch }) => {
  const [preview, setPreview] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [citiesByCountry, setCitiesByCountry] = useState({});

  useEffect(() => {
    setCountries(data.countries || []);
    setCitiesByCountry(data.citiesByCountry || []);
  }, []);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setValue("profilePhoto", file);
      setPreview(URL.createObjectURL(file));
    },
    [setValue]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setValue("country", country);
    setCityInput("");
    setValue("city", "");
  };

  const handleCityInputChange = (e) => {
    const input = e.target.value;
    setCityInput(input);
    setValue("city", input);

    if (input && selectedCountry && citiesByCountry[selectedCountry]) {
      const suggestions = citiesByCountry[selectedCountry].filter((city) =>
        city.toLowerCase().startsWith(input.toLowerCase())
      );
      setCitySuggestions(suggestions);
    } else {
      setCitySuggestions([]);
    }
  };

  const handleCitySuggestionClick = (city) => {
    setCityInput(city);
    setValue("city", city);
    setCitySuggestions([]);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            className="font-medium text-sm text-left block mb-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <Input
            type="text"
            id="companyName"
            {...register("companyName", {
              required: "Company Name is required",
            })}
            placeholder="Enter company name"
            className="w-full border rounded-lg p-2"
          />
          {errors.companyName && (
            <span className="text-red-500 text-sm">
              {errors.companyName.message}
            </span>
          )}
        </div>
        <div>
          <label
            className="font-medium text-sm text-left block mb-2"
            htmlFor="companyType"
          >
            Primary Company Type
          </label>
          <select
            id="companyType"
            {...register("companyType", {
              required: "Please select your company type",
            })}
            className="w-full border rounded-lg p-2"
          >
            <option value="">Select company type</option>
            <option value="architect">Architect</option>
            <option value="interior_designer">Interior Designer</option>
          </select>
          {errors.companyType && (
            <span className="text-red-500 text-sm">
              {errors.companyType.message}
            </span>
          )}
        </div>
        <div>
          <label
            className="font-medium text-sm text-left block mb-2"
            htmlFor="companyPhoneNumber"
          >
            Company Phone Number
          </label>
          <Input
            type="text"
            id="companyPhoneNumber"
            {...register("companyPhoneNumber", {
              required: "Company phone number is required",
            })}
            placeholder="Enter company phone number"
            className="w-full border rounded-lg p-2"
          />
          {errors.companyPhoneNumber && (
            <span className="text-red-500 text-sm">
              {errors.companyPhoneNumber.message}
            </span>
          )}
        </div>
        <div>
          <label
            className="font-medium text-sm text-left block mb-2"
            htmlFor="companyEmail"
          >
            Company Email
          </label>
          <Input
            type="email"
            id="companyEmail"
            {...register("companyEmail", {
              required: "Company email is required",
            })}
            placeholder="Enter company email"
            className="w-full border rounded-lg p-2"
          />
          {errors.companyEmail && (
            <span className="text-red-500 text-sm">
              {errors.companyEmail.message}
            </span>
          )}
        </div>
        <div>
          <label
            className="font-medium text-sm text-left block mb-2"
            htmlFor="country"
          >
            Country
          </label>
          <select
            id="country"
            {...register("country", { required: "Please select your country" })}
            className="w-full border rounded-lg p-2"
            onChange={handleCountryChange}
            value={selectedCountry}
          >
            <option value="">Select country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && (
            <span className="text-red-500 text-sm">
              {errors.country.message}
            </span>
          )}
        </div>
        <div>
          <label
            className="font-medium text-sm text-left block mb-2"
            htmlFor="city"
          >
            City
          </label>
          <div className="relative">
            <Input
              type="text"
              id="city"
              {...register("city", { required: "City is required" })}
              value={cityInput}
              onChange={handleCityInputChange}
              placeholder="Enter city name"
              className="w-full border rounded-lg p-2"
            />
            {citySuggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg">
                {citySuggestions.map((city, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCitySuggestionClick(city)}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {errors.city && (
            <span className="text-red-500 text-sm">{errors.city.message}</span>
          )}
        </div>
        <div className="md:col-span-2">
          <label
            className="font-medium text-sm text-left block mb-2"
            htmlFor="description"
          >
            Company Description
          </label>
          <Textarea
            id="description"
            {...register("description", {
              required: "Company description is required",
              minLength: {
                value: 50,
                message: "Description must be at least 50 characters long",
              },
            })}
            className="w-full border rounded-lg p-2 min-h-[100px] resize-y"
            placeholder="Enter your company description here..."
          />
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-lg font-bold text-left">Company Location</p>
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
      </div>

    </div>
  );
};
