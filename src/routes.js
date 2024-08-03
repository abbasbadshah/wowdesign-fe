import { AboutCompany } from "./Pages/About";
import { CompanyBrowsing } from "./Pages/Company Browsing";
import { CompanyProfile } from "./Pages/Company Profile";
import { CreateCompany } from "./Pages/Create Company";
import { DashboardProjects } from "./Pages/Dashboard/Projects";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Portfolios";
import { ProductsDetails } from "./Pages/Portfolios/Portfolio Details";
import { Projects } from "./Pages/Projects";
import { ProjectDetails } from "./Pages/Projects/Project Details";
import { Signin } from "./Pages/Signin";
import { Signup } from "./Pages/Signup";
import { UserProfile } from "./Pages/User Profile";
import DashboardCreateCompany from "./Pages/Dashboard/Create Company";
import { UserSocialMediaSettings } from "./Pages/Dashboard/Social Media";
import { DashboardProfile } from "./Pages/Dashboard/Profile";
import { IndividualDetailFillup } from "./Pages/Dashboard/Individual Profile Settings";

export const routes = [
  {
    path: "/",
    component: Home,
    expect: true,
  },
  {
    path: "/projects",
    component: Projects,
    exact: true,
  },
  {
    path: "/projects/project-details",
    component: ProjectDetails,
    exact: true,
  },
  {
    path: "/sign-in",
    component: Signin,
    exact: true,
  },
  {
    path: "/sign-up",
    component: Signup,
    exact: true,
  },
  {
    path: "/create-company",
    component: CreateCompany,
    exact: true,
  },
  {
    path: "/products",
    component: Products,
    exact: true,
  },
  {
    path: "/products/product-details",
    component: ProductsDetails,
    exact: true,
  },
  {
    path: '/user-profile',
    component: UserProfile,
    exact: true,
  },
  {
    path: "/company",
    component: CompanyBrowsing,
    exact: true,
  },
  {
    path: "/about-wow-designs-and-products",
    component: AboutCompany,
    exact: true,
  },  
  {
    path: "/admin/add-projects",
    component: DashboardProjects,
    exact: true,
  },  
  {
    path: "/company-profile",
    component: CompanyProfile,
    exact: true,
  },  
  {
    path: "/dashboard/create-company",
    component: DashboardCreateCompany,
    exact: true,
  },  
  {
    path: "/dashboard/social-profile-settings",
    component: UserSocialMediaSettings,
    exact: true,
  },  
  {
    path: "/dashboard/profile-settings",
    component: IndividualDetailFillup,
    exact: true,
  },  
  {
    path: "/dashboard",
    component: DashboardProfile,
    exact: true,
  }
];
