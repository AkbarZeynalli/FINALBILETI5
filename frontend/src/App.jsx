import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Catagori from "./pages/Catagori";
import Latest from "./pages/Latest";
import Blog from "./pages/Blog";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import Basket from "./pages/Basket";
import Wishlist from "./pages/Wishlist";
import Admin from "./pages/Admin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/catagori",
          element: <Catagori />,
        },
        {
          path: "/latest",
          element: <Latest />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/pages",
          element: <Pages />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/heart",
          element: <Wishlist />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
