import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import NotFound from "./not-found";
import { Home, Games, MemoTest, TriviaPescar, Students, Entrepreneurs, Testimonials } from "./pages/index" ;

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