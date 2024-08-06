import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const getPhotoById = async (photoId) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/${photoId}`, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching photo:", error);
    throw error;
  }
};

const PhotoDisplay = ({ photoId, className }) => {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const fetchedPhoto = await getPhotoById(photoId);
        setPhoto(fetchedPhoto);
      } catch (error) {
        setError("Failed to load photo");
      }
    };

    fetchPhoto();
  }, [photoId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        src={photo.urls.regular}
        alt={photo.description || 'Unsplash Photo'}
        className={className}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default PhotoDisplay;
