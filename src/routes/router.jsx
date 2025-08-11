import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

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
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);
