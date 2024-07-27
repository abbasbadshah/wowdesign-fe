import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="aegon-rate md:mt-2">
      <ul
        className="rc-rate flex items-center [&>li]:cursor-pointer [&.rc-rate-disabled>li]:cursor-default [&>li]:relative [&>li]:mr-0.5 rtl:[&>li]:ml-0.5 [&>li]:inline-block text-gray-200 [&>li>div>.rc-rate-star-first]:absolute [&>li>div>.rc-rate-star-first]:left-0 rtl:[&>li>div>.rc-rate-star-first]:right-0 [&>li>div>.rc-rate-star-first]:top-0 [&>li>div>.rc-rate-star-first]:w-1/2 [&>li>div>.rc-rate-star-first]:h-full [&>li>div>.rc-rate-star-first]:overflow-hidden [&>.rc-rate-star-half>div>.rc-rate-star-first]:text-gray-dark [&>.rc-rate-star-full>div]:text-gray-dark [&>li>div]:transition-all [&>li>div]:duration-300 [&>.rc-rate-star:hover]:scale-110"
        tabIndex={0}
        role="radiogroup"
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <li
            key={star}
            className={`rc-rate-star rc-rate-star-${
              star <= rating ? "full" : "zero"
            }`}
          >
            <div
              role="radio"
              aria-checked={star <= rating}
              aria-posinset={star}
              aria-setsize={5}
              tabIndex={0}
            >
              <div className="rc-rate-star-first">
                <div className="[&>svg]:fill-current h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="rc-rate-star-second">
                <div className="[&>svg]:fill-current h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CustomerReview = ({ review }) => {
  return (
    <div className="border-b-[1px] border-gray-200 py-6 md:py-7">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="relative h-12 w-12 overflow-hidden rounded-full md:h-16 md:w-16">
            <img
              alt="icon"
              src={review.avatar}
              className="aspect-[1/1] rounded-full object-cover"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
          <div className="ml-3 md:ml-5">
            <h6 className="md:text-h6 font-bold text-gray-dark uppercase leading-[22px]">
              {review.name}
            </h6>
            <p className="mt-0.5 text-sm leading-[22px] text-gray-dark md:mt-2 md:text-secondary">
              {review.date}
            </p>
          </div>
        </div>
        <div className="text-end">
          <StarRating rating={review.rating} />
          <p className="mt-1 text-sm leading-5 text-gray-dark md:mt-2">
            {review.location}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-medium leading-7 tracking-wide text-secondary">
          {review.comment}
        </p>
      </div>
    </div>
  );
};

const CustomerReviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <CustomerReview key={index} review={review} />
      ))}
    </div>
  );
};

export default CustomerReviews;
