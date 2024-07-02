import { Input } from "@headlessui/react";
import { useForm } from "react-hook-form";

export const UserProfileSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-6 xl:col-span-9 lg:col-span-8 md:col-span-8">
      <div className="grid grid-cols-1 gap-6">
        <div className="relative p-6 bg-white rounded-md shadow">
          <h5 className="mb-4 text-lg font-semibold">Personal Detail :</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-left" htmlFor="firstname">
                  First Name : <span className="text-red-600">*</span>
                </label>
                <Input
                  type="text"
                  id="firstname"
                  {...register("firstname", { required: "First name is required" })}
                  placeholder="First Name:"
                  className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                />
                {errors.firstname && <span className="text-sm text-red-500">{errors.firstname.message}</span>}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-left" htmlFor="lastname">
                  Last Name : <span className="text-red-600">*</span>
                </label>
                <Input
                  type="text"
                  id="lastname"
                  {...register("lastname", { required: "Last name is required" })}
                  placeholder="Last Name:"
                  className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                />
                {errors.lastname && <span className="text-sm text-red-500">{errors.lastname.message}</span>}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-left" htmlFor="email">
                  Your Email : <span className="text-red-600">*</span>
                </label>
                <Input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  placeholder="Email"
                  className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                />
                {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-left" htmlFor="occupation">
                  Occupation :
                </label>
                <Input
                  type="text"
                  id="occupation"
                  {...register("occupation")}
                  placeholder="Occupation :"
                  className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 mt-5">
              <label className="block mb-2 text-sm font-medium text-left" htmlFor="description">
                Description :
              </label>
              <textarea
                id="description"
                {...register("description")}
                className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100 h-28 p-2"
                placeholder="Message :"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 py-2 mt-5 text-sm font-bold text-white rounded-lg bg-theme-color"
            >
              Save Changes
            </button>
          </form>
        </div>

        <div className="relative p-6 bg-white rounded-md shadow">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h5 className="mb-4 text-lg font-semibold">Contact Info :</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-left" htmlFor="number">
                      Phone No. :
                    </label>
                    <Input
                      type="tel"
                      id="number"
                      {...register("number")}
                      placeholder="Phone :"
                      className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-left" htmlFor="url">
                      Website :
                    </label>
                    <Input
                      type="url"
                      id="url"
                      {...register("url")}
                      placeholder="Url :"
                      className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 mt-5 text-sm font-bold text-white rounded-lg bg-theme-color"
                >
                  Add
                </button>
              </form>
            </div>

            <div>
              <h5 className="mb-4 text-lg font-semibold">Change password :</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-left" htmlFor="old-password">
                      Old password :
                    </label>
                    <Input
                      type="password"
                      id="old-password"
                      {...register("oldPassword", { required: "Old password is required" })}
                      placeholder="Old password"
                      className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-left" htmlFor="new-password">
                      New password :
                    </label>
                    <Input
                      type="password"
                      id="new-password"
                      {...register("newPassword", { required: "New password is required" })}
                      placeholder="New password"
                      className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-left" htmlFor="confirm-password">
                      Re-type New password :
                    </label>
                    <Input
                      type="password"
                      id="confirm-password"
                      {...register("confirmPassword", { required: "Please confirm your new password" })}
                      placeholder="Re-type New password"
                      className="w-full border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 mt-5 text-sm font-bold text-white rounded-lg bg-theme-color"
                >
                  Save password
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="relative p-6 mb-10 bg-white rounded-md shadow">
          <h5 className="mb-4 text-lg font-semibold text-red-600">Delete Account :</h5>
          <p className="mb-4 text-slate-400">
            Do you want to delete the account? Please press below "Delete" button
          </p>
          <button className="px-4 py-2 text-sm font-bold text-white bg-red-600 rounded-lg hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};