import { Layout } from "../../components/layout/layout";
import { BreadcrumbComponent } from "../../components/shared/Breadcrumb/breadcrumb";
import BGImage from "../../assets/images/Projects/hospitality.jpeg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const companyCategories = [
  { title: "Civil Engineer", image: BGImage, link: "/civil-engineer" },
  {
    title: "Sanitaryware Suppliers",
    image: BGImage,
    link: "/sanitaryware-suppliers",
  },
  { title: "Interior Designers", image: BGImage, link: "/interior-designers" },
  {
    title: "Fit-Out Contractors",
    image: BGImage,
    link: "/fit-out-contractors",
  },
  { title: "Surfaces Suppliers", image: BGImage, link: "/surfaces-suppliers" },
  {
    title: "Furniture Suppliers",
    image: BGImage,
    link: "/furniture-suppliers",
  },
];

export const CompanyBrowsing = () => {
  const scrollContainerRef = useRef(null);
  const [state, setState] = useState({
    showLeftArrow: false,
    showRightArrow: true,
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setState((prevState) => ({
        ...prevState,
        showLeftArrow: container.scrollLeft > 0,
        showRightArrow:
          container.scrollLeft < container.scrollWidth - container.clientWidth,
      }));
    };

    const handleWheel = (e) => {
      if (container.contains(e.target)) {
        e.preventDefault();
        const cardWidth = container.offsetWidth;
        const scrollAmount = Math.sign(e.deltaY) * cardWidth;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction * container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    setState((prevState) => ({
      ...prevState,
      isDragging: true,
      startX: e.pageX - scrollContainerRef.current.offsetLeft,
      scrollLeft: scrollContainerRef.current.scrollLeft,
    }));
  };

  const handleMouseUp = () => {
    setState((prevState) => ({ ...prevState, isDragging: false }));
  };

  const handleMouseMove = (e) => {
    if (!state.isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - state.startX) * 2;
    scrollContainerRef.current.scrollLeft = state.scrollLeft - walk;
  };

  return (
    <Layout>
      <BreadcrumbComponent
        title="Company Browsing"
        breadcrumb={["Company Browsing"]}
        bgImage={BGImage}
      />
      <section className="py-28">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-5xl font-bold text-theme-color">
            Wow Communities
          </h2>
          <p className="mt-4 text-base font-medium text-black">
            Get inspired, join the community, and reach the right audience! This
            is your best place to find and collaborate with designers from all
            over the world.
          </p>
        </div>
        <div className="relative px-6 lg:px-24 mt-14">
          <div
            ref={scrollContainerRef}
            className="flex pb-4 space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {companyCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="flex-shrink-0 bg-white rounded-md shadow snap-center w-full min-w-full sm:min-w-[calc(50%-12px)] sm:w-[calc(50%-12px)] lg:min-w-[300px] lg:w-[300px]"
              >
                <div className="relative">
                  <img
                    src={category.image}
                    className="object-cover w-full rounded h-72"
                    alt={category.title}
                  />
                  <div className="absolute inset-x-0 bottom-0 top-auto p-2">
                    <div className="p-4 rounded-md bg-white/50 backdrop-blur-xl">
                      <div className="text-center text-white">
                        <h4 className="text-lg font-semibold text-black">
                          {category.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {state.showLeftArrow && (
            <button
              onClick={() => scroll(-1)}
              className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md left-2 top-1/2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
          )}
          {state.showRightArrow && (
            <button
              onClick={() => scroll(1)}
              className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md right-2 top-1/2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          )}
        </div>
      </section>
    </Layout>
  );
};
