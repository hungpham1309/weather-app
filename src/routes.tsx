import { lazy } from "react";
import { IRouteConfig } from "./services/typings/route";

const routes: IRouteConfig[] = [
  {
    component: lazy(() => import("./layouts/BlankLayout")),
    routes: [
      {
        path: "/",
        component: require("./layouts/MainLayout").default,
        routes: [
          {
            path: "/",
            component: lazy(() => import("./pages/HomePage")),
            exact: true,
          },
          {
            path: "/weather/:id",
            component: lazy(() => import("./pages/WeatherDetail")),
          },
          {
            path: "*",
            component: lazy(() => import("./components/base/NotFound")),
          },
        ],
      },
    ],
  },
];

export default routes;
