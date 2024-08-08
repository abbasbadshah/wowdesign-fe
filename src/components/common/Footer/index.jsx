import { Link } from "react-router-dom";
import { SiteLogo } from "../../shared/index";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24">
      <div className="">
        <div className="flex flex-col items-center gap-8 mb-14 md:flex-row md:justify-between">
          <SiteLogo width="250px" />
          <div className="flex items-center flex-col gap-5 md:flex-row md:gap-12">
            <p className="text-lg font-bold font-chivo">
              Ready to get started?
            </p>
            <button type="button">
              <Link
                className="flex items-center z-10 relative transition-all duration-200 group px-6 py-4 lg:px-8 lg:py-5 rounded-md bg-gray-900 text-white hover:bg-theme-color hover:text-gray-900 hover:-translate-y-0.5"
                to="/"
              >
                <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                  Create an Account
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-px mb-12"></div>
        <div className="text-gray-600 grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-5 xl:gap-24">
          <div>
            <h5 className="text-lg font-bold font-chivo text-gray-900 mb-5">
              Contact
            </h5>
            <p className="text-base mb-5">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <p className="text-base underline">(239) 555-0108</p>
            <p className="text-base underline">contact@agon.com</p>
          </div>
          <div>
            <h5 className="text-lg font-bold font-chivo text-gray-900 mb-5">
              About Us
            </h5>
            <ul>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Mission & Vision
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Our Team
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Press & Media
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Advertising
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold font-chivo text-gray-900 mb-5">
              Discover
            </h5>
            <ul>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Our Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Plans & Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Knowledge Base
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Cookie Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Office Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  News & Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold font-chivo text-gray-900 mb-5">
              Support
            </h5>
            <ul>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  FAQs
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Editor Help
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Community
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Live Chatting
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold font-chivo text-gray-900 mb-5">
              Useful links
            </h5>
            <ul>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Request an offer
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  How it works
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Reviews
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="transition-all duration-200 hover:text-green-900 hover:pl-1"
                  to="/"
                >
                  Stories
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-px mb-11"></div>
        <div className="text-gray-400 lg:flex lg:items-center lg:justify-between my-5">
          <div className="md:flex md:items-center md:gap-6">
            <p className="text-base font-bold">© Wow Design & Products 2024</p>
            <div className="flex items-center justify-between md:gap-6">
              <Link className="text-base" to="/">
                Privacy policy
              </Link>
              <Link className="text-base" to="/">
                Cookies
              </Link>
              <Link className="text-base" to="/">
                Terms of service
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mt-5 lg:mt-0">
            <Link
              className="w-4 h-4 transition-all duration-300 hover:opacity-70 hover:-translate-y-0.5"
              to="/"
            >
              <FaFacebookF className="h-full w-full" />
            </Link>
            <Link
              className="w-4 h-4 transition-all duration-300 hover:opacity-70 hover:-translate-y-0.5"
              to="/"
            >
              <FaInstagram className="h-full w-full" />
            </Link>
            <Link
              className="w-4 h-4 transition-all duration-300 hover:opacity-70 hover:-translate-y-0.5"
              to="/"
            >
              <FaTwitter className="h-full w-full" />
            </Link>
            <Link
              className="w-4 h-4 transition-all duration-300 hover:opacity-70 hover:-translate-y-0.5"
              to="/"
            >
              <FaLinkedinIn className="h-full w-full" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
