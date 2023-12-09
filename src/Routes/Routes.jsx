import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/Home/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",

    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/pages",
        element: <h2>This is page</h2>,
      },
    ],
  },
]);

export default router;
