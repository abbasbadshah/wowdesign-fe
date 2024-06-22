import React, { useState, useEffect } from 'react';

export const FadingBackground = ({ images, interval = 5000, transitionDuration = 1000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(true);
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setFadeIn(false);
      }, transitionDuration);
    }, interval);

    return () => clearInterval(intervalId);
  }, [nextImageIndex, images, interval, transitionDuration]);

  return (
    <div>
      <div
        className="absolute inset-0 bg-no-repeat bg-cover transition-opacity ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transitionDuration: `${transitionDuration}ms`,
        }}
      />
      <div
        className={`absolute inset-0 bg-no-repeat bg-cover transition-opacity ease-in-out ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${images[nextImageIndex]})`,
          transitionDuration: `${transitionDuration}ms`,
        }}
      />
    </div>
  );
};