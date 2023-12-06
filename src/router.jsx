import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import NotFound from "./not-found";

const Home = lazy(() => import("./pages/Home/Home"))
const Games = lazy(() => import("./pages/Juegos/Games"))
const TriviaPescar = lazy(() => import("./pages/Juegos/TriviaPescar/TriviaPescar"))
const MemoTest = lazy(() => import("./pages/Juegos/MemoTest/MemoTest"))
const Students = lazy(() => import("./pages/Students/Students"))
const Testimonials = lazy(() => import("./pages/Testimonials/Testimonials"))
const Entrepreneurs = lazy(() => import("./pages/Entrepreneurs/Entrepreneurs"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "alumnos",
        element: <Students />
      },
      {
        path: "juegos",
        children: [
          {
            index: true,
            element: <Games />,
          },
          {
            path: "memotest",
            element: <MemoTest />,
          },
          {
            path: "trivia",
            element: <TriviaPescar />,
          },
        ],
      },
      {
        path: "testimonios",
        element: <Testimonials />
      },
      {
        path: "emprendedores",
        element: <Entrepreneurs />
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default function Routers() {
  return (
    <RouterProvider router={router} />
  )
}