import { Input } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { DashboardLayout } from "../../../components/layout/Dashboard Layout";

export const UserSocialMediaSettings = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const socialMedias = [
    {
      name: "twitter",
      icon: "fa-twitter",
      placeholder: "Twitter Profile Name",
    },
    {
      name: "facebook",
      icon: "fa-facebook",
      placeholder: "Facebook Profile Name",
    },
    {
      name: "instagram",
      icon: "fa-instagram",
      placeholder: "Instagram Profile Name",
    },
    {
      name: "linkedin",
      icon: "fa-linkedin",
      placeholder: "Linkedin Profile Name",
    },
    {
      name: "youtube",
      icon: "fa-youtube",
      placeholder: "Youtube url",
      type: "url",
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-[90rem] w-[85rem] max-h-[85vh] overflow-y-auto z-[99] p-10 bg-white shadow-md rounded text-left">
        <div className="grid grid-cols-1 gap-6">
          <div className="relative bg-white rounded-md shadow">
            <div className="p-6 border-b border-gray-100">
              <h5 className="text-lg font-semibold">Social Profiles :</h5>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                {socialMedias.map((social) => (
                  <div key={social.name} className="mt-8 md:flex first:mt-0">
                    <div className="md:w-1/3">
                      <span className="font-medium capitalize">
                        {social.name}
                      </span>
                    </div>

                    <div className="mt-4 md:w-2/3 md:mt-0">
                      <div className="relative">
                        <i
                          className={`fab ${social.icon} absolute top-3 left-3 text-gray-400`}
                        ></i>
                        <Input
                          type={social.type || "text"}
                          {...register(social.name)}
                          placeholder={social.placeholder}
                          className="w-full pl-10 border rounded-lg data-[hover]:shadow data-[focus]:bg-blue-100"
                        />
                      </div>
                      <p className="mt-1 text-slate-400">
                        Add your {social.name}{" "}
                        {social.name === "youtube" ? "url" : "username"}.
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-8">
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-bold text-white rounded-lg bg-theme-color"
                  >
                    Save Social Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
