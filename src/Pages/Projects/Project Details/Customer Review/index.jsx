import CustomerReviews from "./Review Section/review";
export const CustomerReview = () => {
  const reviews = [
    {
      name: "Faddie Jaction",
      date: "26 Oct, 2022 9:34 pm",
      rating: 5,
      location: "San Diago CA",
      comment:
        "I bought two of these hoodies - one for my husband, and an xs for myself. I don't find the quality of this cashmere to be any better than what you'd find at a major retailer. It's fine for the price point, but we both experienced pilling on the very first wear, and it gets worse with each wear. So it probably will not have a long life. That said, it's a great leisure-wear piece that looks more pulled together than wearing a yoga brand zip-up, and I would buy another if they made this piece in grey.",
      avatar: "/path/to/avatar.jpg",
    },
    {
      name: "Faddie Jaction",
      date: "26 Oct, 2022 9:34 pm",
      rating: 5,
      location: "San Diago CA",
      comment:
        "I bought two of these hoodies - one for my husband, and an xs for myself. I don't find the quality of this cashmere to be any better than what you'd find at a major retailer. It's fine for the price point, but we both experienced pilling on the very first wear, and it gets worse with each wear. So it probably will not have a long life. That said, it's a great leisure-wear piece that looks more pulled together than wearing a yoga brand zip-up, and I would buy another if they made this piece in grey.",
      avatar: "/path/to/avatar.jpg",
    },
    {
      name: "Faddie Jaction",
      date: "26 Oct, 2022 9:34 pm",
      rating: 5,
      location: "San Diago CA",
      comment:
        "I bought two of these hoodies - one for my husband, and an xs for myself. I don't find the quality of this cashmere to be any better than what you'd find at a major retailer. It's fine for the price point, but we both experienced pilling on the very first wear, and it gets worse with each wear. So it probably will not have a long life. That said, it's a great leisure-wear piece that looks more pulled together than wearing a yoga brand zip-up, and I would buy another if they made this piece in grey.",
      avatar: "/path/to/avatar.jpg",
    },
    // Add more review objects here...
  ];
  return (
    <div>
      <section className="scroll-mt-20 py-5 xl:py-7" id="reviews">
        <header className="flex justify-between capitalize">
          <div>
            <h2 className="md:text-h2 font-bold text-gray-dark text-xl md:!text-[22px] 2xl:!text-2xl hidden md:block">
              35 reviews
            </h2>
          </div>
          <div>
            <button
              type="button"
              className="p-2 text-sm font-semibold leading-6 text-white border-2 rounded bg-theme-color hover:bg-transparent hover:text-theme-color border-theme-color"
            >
              Add Review
            </button>
          </div>
        </header>
        <h2 className="md:text-h2 font-bold text-gray-dark mb-2 flex items-center gap-2 text-xl md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-auto w-6"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          4.9 - 35 Reviews
        </h2>
        <div className="mt-8 hidden items-center md:mt-8 md:flex">
          <div className="flex-shrink-0 border-r-[1px] border-gray-lighter py-3 pr-5 md:pr-14">
            <h3 className="text-center text-3xl font-bold sm:text-6xl md:text-left">
              4.5
            </h3>
            <p className="mt-3 text-sm capitalize md:text-base">35 Ratings</p>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 pl-5 md:pl-14">
            <div className="flex items-center gap-3 sm:gap-4">
              <p className="text-sm capitalize text-gray-dark sm:text-base">
                5 Star
              </p>
              <div className="w-28 overflow-hidden rounded-lg bg-gray-lighter sm:w-[200px]">
                <div
                  className="h-1 rounded-lg bg-gray-dark transition-all duration-300 sm:h-[6px]"
                  style={{ width: "84%" }}
                />
              </div>
              <p className="text-xs capitalize text-gray sm:text-sm">84 %</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <p className="text-sm capitalize text-gray-dark sm:text-base">
                4 Star
              </p>
              <div className="w-28 overflow-hidden rounded-lg bg-gray-lighter sm:w-[200px]">
                <div
                  className="h-1 rounded-lg bg-gray-dark transition-all duration-300 sm:h-[6px]"
                  style={{ width: "9%" }}
                />
              </div>
              <p className="text-xs capitalize text-gray sm:text-sm">09 %</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <p className="text-sm capitalize text-gray-dark sm:text-base">
                3 Star
              </p>
              <div className="w-28 overflow-hidden rounded-lg bg-gray-lighter sm:w-[200px]">
                <div
                  className="h-1 rounded-lg bg-gray-dark transition-all duration-300 sm:h-[6px]"
                  style={{ width: "4%" }}
                />
              </div>
              <p className="text-xs capitalize text-gray sm:text-sm">04 %</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <p className="text-sm capitalize text-gray-dark sm:text-base">
                2 Star
              </p>
              <div className="w-28 overflow-hidden rounded-lg bg-gray-lighter sm:w-[200px]">
                <div
                  className="h-1 rounded-lg bg-gray-dark transition-all duration-300 sm:h-[6px]"
                  style={{ width: "2%" }}
                />
              </div>
              <p className="text-xs capitalize text-gray sm:text-sm">02 %</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <p className="text-sm capitalize text-gray-dark sm:text-base">
                1 Star
              </p>
              <div className="w-28 overflow-hidden rounded-lg bg-gray-lighter sm:w-[200px]">
                <div
                  className="h-1 rounded-lg bg-gray-dark transition-all duration-300 sm:h-[6px]"
                  style={{ width: "1%" }}
                />
              </div>
              <p className="text-xs capitalize text-gray sm:text-sm">01 %</p>
            </div>
          </div>
        </div>
        <div className="md:mt-8">
          <CustomerReviews reviews={reviews} />
        </div>
      </section>
    </div>
  );
};
