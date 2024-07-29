export const Query = () => {
  return (
    <section className="py-5 xl:py-7">
      <div className="flex justify-between">
        <div>
          <h3 className="md:text-h3 font-bold text-gray-dark mb-3 text-xl capitalize md:mb-2 md:!text-[22px] 2xl:!text-2xl">
            Still have questions?
          </h3>
          <p className="mb-8 leading-6 text-gray">
            Get a fast response about property amenities, check-in times, and
            general questions.
          </p>
          <button
            type="button"
            className="p-2 px-10 text-sm font-semibold leading-6 text-white border-2 rounded bg-theme-color hover:bg-transparent hover:text-theme-color border-theme-color"
          >
            Chat now
          </button>
        </div>
      </div>
    </section>
  );
};
