import { useRoutes, RouteObject } from "react-router-dom";
import _ from "lodash";
import About from "@/pages/About";
import Article from "@/pages/Article";
import BaseLayout from "@/layout/BaseLayout";
import Login from "@/pages/Login";
import OrderDetail from "@/pages/OrderDetail";
import BaseTable from "@/pages/Tables/BaseTable";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "dashboard",
        id:'1',
        children: [
          {
            path: "about",
            id:'11',
            element: <About />,
          },
          {
            path: "article",
            id:'12',
            element: <Article />,
          },
          {
            id:'13',
            path: "orderDetail",
            element: <OrderDetail />,
          },
        ]
      },
      {
        path: "tables",
        id:'2',
        children: [
          {
            id:'21',
            path: "baseTable",
            element: <BaseTable />,
          },
        ]
      },

    ],
  },
  {
    path: "/login",
    element: <Login />
  },

];

export default function Routes() {
  const element = useRoutes(routes);
  return element;
}
