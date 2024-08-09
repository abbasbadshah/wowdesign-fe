// Steps/StepFour.jsx

import React from "react";
import { Controller } from "react-hook-form";
import { FileUpload } from "../../../../components/shared";

export const IndividualProfileSetupStepFour = ({ control }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Media</h3>
      <Controller
        name="bannerImage"
        control={control}
        render={({ field }) => (
          <FileUpload
            label="Banner Image"
            onFileChange={(file) => field.onChange(file)}
            multiple
          />
        )}
      />
      <Controller
        name="profileImage"
        control={control}
        render={({ field }) => (
          <FileUpload
            label="Profile Image"
            onFileChange={(file) => field.onChange(file)}
            multiple={false}
            maxFiles={1}
          />
        )}
      />
    </div>
  );
};
