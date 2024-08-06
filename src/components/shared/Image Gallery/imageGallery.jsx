import React, { useState } from 'react';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const ImageGalleryStyleTwo = ({ images, imagesPerRow = 3 }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto">
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${imagesPerRow} gap-4`}>
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover cursor-pointer"
              onClick={() => openImage(index)}
            />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white z-60"
          >
            <XIcon className="h-8 w-8" />
          </button>
          <div className="relative max-w-[80vw] max-h-[80vh]">
            <img
              src={images[selectedImage]}
              alt={`Full size image ${selectedImage + 1}`}
              className="max-h-[80vh] max-w-[80vw] object-contain"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 -left-16 text-white transform -translate-y-1/2"
            >
              <ChevronLeftIcon className="h-12 w-12" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 -right-16 text-white transform -translate-y-1/2"
            >
              <ChevronRightIcon className="h-12 w-12" />
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-[90vw]">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer flex-shrink-0 ${
                  index === selectedImage ? 'border-2 border-white' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryStyleTwo;
