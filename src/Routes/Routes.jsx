import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/Home/Home/HomePage";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Categories from "../Components/Categories/Categories";
import ShopCart from "../Components/ShoppingCart/ShopCart";

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
        path: "/cart",
        element: <ShopCart />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/pages",
        element: <h2>This is page</h2>,
      },
    ],
  },
]);

export default router;
