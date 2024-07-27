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
        <div className="relative hidden h-40 w-64 md:block">
          <img
            alt="questions"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="h-full w-full object-contain"
            sizes="(min-width: 320) 100vw, 100vw"
            srcSet="/_next/image?url=%2Fimages%2Fquestions.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fquestions.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fquestions.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fquestions.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fquestions.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fquestions.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fquestions.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fquestions.png&w=3840&q=75 3840w"
            src="/_next/image?url=%2Fimages%2Fquestions.png&w=3840&q=75"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              color: "transparent",
            }}
          />
        </div>
      </div>
    </section>
  );
};
