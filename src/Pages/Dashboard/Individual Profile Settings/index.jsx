import { Input, Select } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { DashboardLayout } from "../../../components/layout/Dashboard Layout";
export const IndividualDetailFillup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const companyCount = watch("companyCount", "1");

  const socialMedias = [
    { name: "linkedin", placeholder: "LinkedIn Profile URL" },
    { name: "twitter", placeholder: "Twitter Profile URL" },
    { name: "facebook", placeholder: "Facebook Profile URL" },
  ];

  return (
    <DashboardLayout>
    <div className="max-w-[90rem] w-[85rem] max-h-[85vh] overflow-y-auto z-[99] p-10 bg-white shadow-md rounded text-left">
      <h2 className="text-2xl font-semibold mb-6">Individual Profile Setting</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium" htmlFor="firstname">
              First Name: <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              id="firstname"
              {...register("firstname", { required: "First name is required" })}
              className="w-full border rounded-lg"
            />
            {errors.firstname && <span className="text-sm text-red-500">{errors.firstname.message}</span>}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium" htmlFor="lastname">
              Last Name: <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              id="lastname"
              {...register("lastname", { required: "Last name is required" })}
              className="w-full border rounded-lg"
            />
            {errors.lastname && <span className="text-sm text-red-500">{errors.lastname.message}</span>}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium" htmlFor="email">
              Email: <span className="text-red-600">*</span>
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
              className="w-full border rounded-lg"
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium" htmlFor="phoneNumber">
              Phone Number:
            </label>
            <Input
              type="tel"
              id="phoneNumber"
              {...register("phoneNumber")}
              className="w-full border rounded-lg"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium" htmlFor="address">
              Address:
            </label>
            <Input
              type="text"
              id="address"
              {...register("address")}
              className="w-full border rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium" htmlFor="country">
              Country:
            </label>
            <Input
              type="text"
              id="country"
              {...register("country")}
              className="w-full border rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium" htmlFor="companyCount">
              Companies you work for:
            </label>
            <Select
              id="companyCount"
              {...register("companyCount")}
              className="w-full border rounded-lg"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num.toString()}>
                  {num}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {[...Array(parseInt(companyCount))].map((_, index) => (
          <div key={index} className="mt-4">
            <label className="block mb-2 text-sm font-medium" htmlFor={`company${index + 1}`}>
              Company {index + 1}:
            </label>
            <Input
              type="text"
              id={`company${index + 1}`}
              {...register(`company${index + 1}`)}
              className="w-full border rounded-lg"
            />
          </div>
        ))}

        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            {...register("description")}
            className="w-full border rounded-lg h-32 p-2"
          ></textarea>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Social Media Profiles</h3>
          {socialMedias.map((social) => (
            <div key={social.name} className="mb-4">
              <label className="block mb-2 text-sm font-medium" htmlFor={social.name}>
                {social.name.charAt(0).toUpperCase() + social.name.slice(1)}:
              </label>
              <Input
                type="url"
                id={social.name}
                {...register(social.name)}
                placeholder={social.placeholder}
                className="w-full border rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Image Uploads</h3>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="bannerUpload">
              Banner Image:
            </label>
            <input
              type="file"
              id="bannerUpload"
              {...register("bannerUpload")}
              accept="image/*"
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium" htmlFor="profileUpload">
              Profile Image:
            </label>
            <input
              type="file"
              id="profileUpload"
              {...register("profileUpload")}
              accept="image/*"
              className="w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 mt-6 text-sm font-bold text-white rounded-lg bg-blue-600 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
    </DashboardLayout>
  );
};