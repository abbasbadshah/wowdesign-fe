export const ProjectPagination = () => {
  return (
    <div className="mt-8 hidden items-center justify-between md:flex xl:mt-12">
      <button
        type="button"
        className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-5 py-2 text-base rounded-md hover:text-gray-1000 focus:ring-gray-900/30 !p-0 !ring-0"
      >
        <span className="flex items-center gap-6 font-medium text-gray-dark drop-shadow-sm hover:text-gray">
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
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
          Previous Page
        </span>
      </button>
      <button
        type="button"
        className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-5 py-2 text-base rounded-md hover:text-gray-1000 focus:ring-gray-900/30 !p-0 !ring-0"
      >
        <span className="flex items-center gap-6 font-medium text-gray-dark drop-shadow-sm hover:text-gray">
          Next Page
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
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};
