import { createBrowserRouter } from "react-router-dom";
import Download from "../pages/Download";
import Error from "../pages/Error";
import Features from "../pages/Features";
import Home from "../pages/Home";
import Lifestyle from "../pages/Lifestyle";
import Pricing from "../pages/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/features",
    element: <Features />,
    errorElement: <Error />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
    errorElement: <Error />,
  },
  {
    path: "/download",
    element: <Download />,
    errorElement: <Error />,
  },
  {
    path: "/lifestyle",
    element: <Lifestyle />,
    errorElement: <Error />,
  },
]);
