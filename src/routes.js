import { CreateCompany } from "./Pages/Create Company";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";
import { ProjectDetails } from "./Pages/Projects/Project Details";
import { Signin } from "./Pages/Signin";
import { Signup } from "./Pages/Signup";

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
];
