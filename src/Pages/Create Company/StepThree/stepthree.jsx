import { useState } from "react";
import { FileUpload } from "../../../components/shared";

export const StepThree = ({ register, errors, setValue, watch }) => {
  const [bannerPhoto, setBannerPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleBannerPhotoChange = (file) => {
    setBannerPhoto(file);
    setValue("bannerPhoto", file);
  };

  const handleProfilePhotoChange = (file) => {
    setProfilePhoto(file);
    setValue("profilePhoto", file);
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-left">Media</h3>
      <div className="mb-4 flex flex-col md:flex-row justify-start gap-10">
        <div className="flex flex-col md:flex-row-reverse items-center justify-start gap-5">
          <div className="flex flex-col gap-5">
            <label
              className="block mb-2 font-medium text-sm text-left"
              htmlFor="bannerPhoto"
            >
              Banner Photo
            </label>
            <p className="font-medium text-sm text-left">
              We recommend an image <br />
              of at least 1920x1080
            </p>
          </div>
          <FileUpload
            onFileChange={handleBannerPhotoChange}
            label="Upload Banner Image"
            multiple={false}
            maxFiles={1}
          />
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-start gap-5 mt-4 md:mt-0">
          <div className="flex flex-col gap-5">
            <label
              className="block mb-2 font-medium text-sm text-left"
              htmlFor="profilePhoto"
            >
              Upload Logo
            </label>
            <p className="font-medium text-sm text-left">
              We recommend an image <br />
              of at least 200x200
            </p>
          </div>
          <FileUpload
            onFileChange={handleProfilePhotoChange}
            label="Upload Profile Image"
            multiple={false}
            maxFiles={1}
          />
        </div>
      </div>
    </div>
  );
};
