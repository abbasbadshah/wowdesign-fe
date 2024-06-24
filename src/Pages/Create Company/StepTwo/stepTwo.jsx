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

  const profilePhoto = watch("profilePhoto");

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
    <div className="mr-2">
      <h2 className="text-2xl font-bold mb-4">Company Profile</h2>
      {/* Profile Image Part */}
      <div className="mb-4 flex justify-start">
        <div className="flex flex-row-reverse items-center justify-start gap-5">
          <div className="flex flex-col gap-5">
            <label
              className="block mb-2 font-medium text-sm text-left"
              htmlFor="profilePhoto"
            >
              Profile Photo
            </label>
            <p className="font-medium text-sm text-left">
              We recommend an image <br />
              of at least 200x200
            </p>
          </div>
          <div
            {...getRootProps()}
            className="w-48 h-48 border-2 border-dashed rounded-full flex items-center justify-center cursor-pointer"
          >
            <Input {...getInputProps()} id="profilePhoto" />
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="text-center">
                <p>Upload Profile Image</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
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
        <div className="w-1/2">
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
      </div>

      <div className="flex gap-5 mt-4">
        <div className="w-1/2">
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
        <div className="w-1/2">
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
      </div>

      <div className="flex gap-5 mt-4">
        <div className="w-1/2">
          <label
            className="font-medium text-sm text-left block mb-2"
            htmlFor="country"
          >
            Country
          </label>
          <select
            id="country"
            {...register("country", {
              required: "Please select your country",
            })}
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
        <div className="w-1/2">
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
              {...register("city", {
                required: "City is required",
              })}
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
      </div>

      <div className="mt-4">
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

      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6177455759703!2d75.80922237600166!3d22.705269628093465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd7acfafc65%3A0x2844ae94d8305a5d!2sNoorani%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452006!5e0!3m2!1sen!2sin!4v1719028405777!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
