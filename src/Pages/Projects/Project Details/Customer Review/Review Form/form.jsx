import React from "react";
import { useForm } from "react-hook-form";

export const ReviewForm = ({ onSubmit, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      rating: 5,
      comment: "",
    },
  });

  const onSubmitForm = (data) => {
    const newReview = {
      ...data,
      date: new Date().toLocaleString(),
      location: "Unknown",
      avatar: "/path/to/default-avatar.jpg",
    };
    onSubmit(newReview);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-theme-color focus:ring-theme-color"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-700"
        >
          Rating
        </label>
        <select
          id="rating"
          {...register("rating", { required: "Rating is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-theme-color focus:ring-theme-color"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        {errors.rating && (
          <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700"
        >
          Comment
        </label>
        <textarea
          id="comment"
          rows={4}
          {...register("comment", { required: "Comment is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-theme-color focus:ring-theme-color"
        />
        {errors.comment && (
          <p className="mt-1 text-sm text-red-600">{errors.comment.message}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-theme-color py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit Review
        </button>
      </div>
    </form>
  );
};
