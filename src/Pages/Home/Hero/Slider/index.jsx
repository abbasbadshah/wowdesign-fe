import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SliderImageOne from "../../../../assets/images/Home/Hero/hero1.jpg";
import SliderImageTwo from "../../../../assets/images/Home/Hero/hero2.jpg";
import SliderImageThree from "../../../../assets/images/Home/Hero/hero3.jpg";
import SliderImageFour from "../../../../assets/images/Home/Hero/hero4.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const slides = [
  {
    image: SliderImageOne,
    title: "Elevate Your Space",
    subtitle: "Discover Top Architects & Interior Designers",
  },
  {
    image: SliderImageTwo,
    title: "Design Dreams Realized",
    subtitle: "Connect with Industry-Leading Professionals",
  },
  {
    image: SliderImageThree,
    title: "Inspire Your Living",
    subtitle: "Explore Innovative Design Solutions",
  },
  {
    image: SliderImageFour,
    title: "Craft Your Vision",
    subtitle: "Collaborate with Visionary Designers",
  },
];

const HomeSliderTwo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden -mt-[6.3rem]">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  {slides[currentSlide].title.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * index }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-center"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgb(230,188,142)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-theme-color text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-all duration-300"
              >
                Explore Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-6 h-1  ${
              currentSlide === index
                ? "bg-theme-color"
                : "bg-white bg-opacity-50"
            } transition-all duration-300`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 h-1/3 w-12 flex items-center justify-center">
        <motion.button
          className="text-white text-4xl w-full h-full flex items-center justify-center"
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeftIcon className="text-white w-10 hover:bg-theme-color hover:text-black border-theme-color hover:border-white"/>
        </motion.button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 h-1/3 w-12 flex items-center justify-center">
        <motion.button
          className="text-white text-4xl w-full h-full flex items-center justify-center"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRightIcon className="text-white w-10 hover:bg-theme-color hover:text-black border-theme-color hover:border-white"/>
        </motion.button>
      </div>
    </div>
  );
};

export default HomeSliderTwo;
