import { createBrowserRouter } from "react-router-dom";
function ErrorBoundary() {
  // Uncaught ReferenceError: path is not defined
  return <div>Error!</div>;
}

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
          const { Projects } = await import("../pages/Projects");
          return {
            Component: Projects,
          };
        },
      },
      {
        path: "/*",
        element: <ErrorBoundary />,
      },
    ],
  },
]);

export default router;
