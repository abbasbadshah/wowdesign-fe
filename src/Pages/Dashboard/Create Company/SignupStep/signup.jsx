import React from "react";

export const SignupStep = ({ register, errors }) => {
  return (
    <div className="text-left">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", { required: "First name is required" })}
          className="w-full border rounded-lg p-2"
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", { required: "Last name is required" })}
          className="w-full border rounded-lg p-2"
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
          className="w-full border rounded-lg p-2"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone", { required: "Phone number is required" })}
          className="w-full border rounded-lg p-2"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="role">
          I am
        </label>
        <select
          id="role"
          {...register("role", { required: "Role is required" })}
          className="w-full border rounded-lg p-2"
        >
          <option value="">Select your role</option>
          <option value="architecture">Architecture</option>
          <option value="interior_designer">Interior Designer</option>
          <option value="manufacturer">Manufacturer</option>
          <option value="supplier">Supplier</option>
          <option value="owner">Owner</option>
        </select>
        {errors.role && <p className="text-red-500">{errors.role.message}</p>}
      </div>
    </div>
  );
};
