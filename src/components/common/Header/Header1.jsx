import { SiteLogo } from "../../shared/index";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import {
  Dialog,
  DialogPanel,
  // Disclosure,
  // DisclosureButton,
  // DisclosurePanel,
  // Popover,
  // PopoverButton,
  PopoverGroup,
  // PopoverPanel,
} from "@headlessui/react";
import {
  // ArrowPathIcon,
  Bars3Icon,
  // ChartPieIcon,
  // CursorArrowRaysIcon,
  // FingerPrintIcon,
  // SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import // ChevronDownIcon,
// PhoneIcon,
// PlayCircleIcon,
"@heroicons/react/20/solid";
import { Link } from "react-router-dom";

// const products = [
//   {
//     name: "Analytics",
//     description: "Get a better understanding of your traffic",
//     href: "#",
//     icon: ChartPieIcon,
//   },
//   {
//     name: "Engagement",
//     description: "Speak directly to your customers",
//     href: "#",
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: "Security",
//     description: "Your customers’ data will be safe and secure",
//     href: "#",
//     icon: FingerPrintIcon,
//   },
//   {
//     name: "Integrations",
//     description: "Connect with third-party tools",
//     href: "#",
//     icon: SquaresPlusIcon,
//   },
//   {
//     name: "Automations",
//     description: "Build strategic funnels that will convert",
//     href: "#",
//     icon: ArrowPathIcon,
//   },
// ];
// const callsToAction = [
//   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "#", icon: PhoneIcon },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const HeaderStyleOne = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      if (currentScrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <header
        className={classNames(
          "z-[99] transition-all duration-300 ease-in-out",
          isSticky
            ? "fixed top-0 left-0 w-full bg-white shadow-lg"
            : "relative",
          isSticky && scrollDirection === "down"
            ? "-translate-y-full"
            : "translate-y-0",
          !isSticky && "bg-transparent"
        )}
      >
        <nav
          className={classNames(
            "mx-auto flex items-center justify-between p-6 lg:px-24",
            isSticky ? "text-black" : "text-white"
          )}
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <SiteLogo white={!isSticky} width={"200px"} />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            {/* 
            <Popover className="relative">
            <PopoverButton className="flex items-center text-sm font-semibold leading-6 gap-x-1">
              Product
              <ChevronDownIcon
                className="flex-none w-5 h-5"
                aria-hidden="true"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-white/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="w-6 h-6 text-gray-600 group-hover:text-theme-color"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          */}

            <Link to="/projects" className="text-sm font-semibold leading-6">
              Projects
            </Link>
            <Link to="/Products" className="text-sm font-semibold leading-6">
              Products
            </Link>
            <Link to="/company-browsing" className="text-sm font-semibold leading-6">
              Company Browsing
            </Link>
          </PopoverGroup>
          <div className="items-center hidden gap-5 lg:flex lg:flex-1 lg:justify-end">
              <Link to="/sign-in" className="text-sm font-semibold leading-6">
              Sign in <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              to="/create-company"
              className="p-2 text-sm font-semibold leading-6 text-white border-2 rounded bg-theme-color hover:bg-transparent border-theme-color"
            >
              Create Company
            </Link>
            <div>
              <Bars3Icon
                className={classNames(
                  "cursor-pointer w-12",
                  isSticky ? "text-black" : "text-white"
                )}
                onClick={toggleSidebar}
              />
            </div>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-[99999] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <SiteLogo width={"150px"} />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-10">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {/*
                  <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                */}
                  <Link
                    to="/projects"
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    Projects
                  </Link>
                  <Link
                    to="/products"
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    Products
                  </Link>
                  <Link
                    to="#"
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    Company
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};
