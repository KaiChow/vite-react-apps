import { useRoutes, RouteObject } from "react-router-dom";
import _ from "lodash";
import About from "@/pages/About";
import Article from "@/pages/Article";
import Base from "@/layout/Base";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import OrderDetail from "@/pages/OrderDetail";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Base />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "article",
        element: <Article />,
      },
      {
        path: "orderDetail",
        element: <OrderDetail />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
];

export default function Routes() {
  const element = useRoutes(routes);
  return element;
}
