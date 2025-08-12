import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ProjectDetails from "../pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "projectDetails/:projectId",
        Component: ProjectDetails,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);
