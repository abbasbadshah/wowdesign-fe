import { useState, useEffect } from 'react';

export const useUserProfileData = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userProfileData');
    if (storedData) {
      setProfileData(JSON.parse(storedData));
    }
  }, []);

  return profileData;
};