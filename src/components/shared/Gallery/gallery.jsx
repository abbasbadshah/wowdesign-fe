import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = ({ images }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openGallery = useCallback(() => {
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false);
    setIsCarouselOpen(false);
    document.body.style.overflow = '';
  }, []);

  const openCarousel = useCallback((index) => {
    setActiveImageIndex(index);
    setIsCarouselOpen(true);
  }, []);

  const nextImage = useCallback(() => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape' && isGalleryOpen) {
      closeGallery();
    }
  }, [isGalleryOpen, closeGallery]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <button
        onClick={openGallery}
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="mr-2 h-3 w-3">
          <g fill="currentColor">
            <path d="M2.5 0h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm0 4.5h-2A.5.5 0 0 0 0 5v2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 3 7V5a.5.5 0 0 0-.5-.5zm0 4.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM7 0H5a.5.5 0 0 0-.5.5v2A.5.5 0 0 0 5 3h2a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 7 0zm0 4.5H5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5zM7 9H5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 7 9zm4.5-9h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm0 4.5h-2A.5.5 0 0 0 9 5v2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 12 7V5a.5.5 0 0 0-.5-.5zm0 4.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" />
          </g>
        </svg>
        View more photos
      </button>

      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-white bg-opacity-90"
          >
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-4xl text-gray-800 hover:text-gray-600"
            >
              ×
            </button>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-6xl w-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  onClick={() => openCarousel(index)}
                  className="w-full h-48 object-cover cursor-pointer rounded-lg"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCarouselOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-90"
          >
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-4xl text-white hover:text-gray-300"
            >
              ×
            </button>
            <div className="flex flex-col items-center">
              <img
                src={images[activeImageIndex]}
                alt={`Carousel image ${activeImageIndex + 1}`}
                className="max-w-[750px] max-h-[70vh] object-contain"
              />
              <div className="flex justify-center mt-4 space-x-2 overflow-x-auto max-w-full">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-16 h-16 object-cover cursor-pointer transition-opacity duration-300 ${
                      index === activeImageIndex ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-white hover:text-gray-300"
              >
                &#10094;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-white hover:text-gray-300"
              >
                &#10095;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
