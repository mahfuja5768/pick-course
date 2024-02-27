import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <ErrorPagee></ErrorPagee>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
