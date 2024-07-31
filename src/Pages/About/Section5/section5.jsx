import React, { useState } from "react";

export const AboutSectionFive = () => {
  return (
    <section classname="relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div classname="container mx-auto">
        <div classname="flex flex-wrap -mx-4">
          <div classname="w-full px-4">
            <div className="text-center mb-[70px]">
              <h2 className="font-bold  mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] md:w-[19ch]">
                FAQ's
              </h2>
              <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[63ch]">
                Developers are trusted to create an engaging experience for
                their companies, so we build tools to help them.
              </p>
            </div>
          </div>
        </div>
        <div classname="flex flex-wrap -mx-4">
          <div classname="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            >
              <AccordionItem
                header="How long we deliver your first blog post?"
                text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
              >
                <AccordionItem
                  header="How long we deliver your first blog post?"
                  text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                ></AccordionItem>
              </AccordionItem>
            </AccordionItem>
          </div>
          <div classname="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            >
              <AccordionItem
                header="How long we deliver your first blog post?"
                text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
              >
                <AccordionItem
                  header="How long we deliver your first blog post?"
                  text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                ></AccordionItem>
              </AccordionItem>
            </AccordionItem>
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div className="w-full p-4 mb-8 bg-white rounded-lg shadow-xl sm:p-8 lg:px-6 xl:px-8">
      <button className="flex w-full text-left faq-btn" onClick={handleToggle}>
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-black">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color">{text}</p>
      </div>
    </div>
  );
};
