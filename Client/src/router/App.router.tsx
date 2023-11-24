import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",

    async lazy() {
      const { Layout } = await import("../pages/layout");
      return {
        Component: Layout,
      };
    },

    children: [
      {
        index: true,
        async lazy() {
          const { Home } = await import("../pages/Home");
          return {
            Component: Home,
          };
        },
      },
      {
        path: "/office",
        async lazy() {
          const { Office } = await import("../pages/Office");
          return {
            Component: Office,
          };
        },
        // element: <Office />,
      },
      {
        path: "/contact",
        async lazy() {
          const { Contact } = await import("../pages/Contact");
          return {
            Component: Contact,
          };
        },
      },
      {
        path: "/project/:id",
        async lazy() {
          const { ProjectsById } = await import("../pages/Projects");
          return {
            Component: ProjectsById,
          };
        },
      },
      {
        path: "/category/:category",
        async lazy() {
          const { ProjectsByCategory } = await import("../pages/Projects");
          return {
            Component: ProjectsByCategory,
          };
        },
      },
      {
        path: "/dashboard",
        async lazy() {
          const { Dashboard } = await import("../pages/Dashboard");
          return {
            Component: Dashboard,
          };
        },
      },
      {
        path: "/*",
        async lazy() {
          const { ErrorPage } = await import("../pages/ErrorPage");
          return {
            Component: ErrorPage,
          };
        },
      },
    ],
  },
]);

export default router;
