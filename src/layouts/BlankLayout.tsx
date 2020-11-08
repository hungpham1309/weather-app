import React from "react";
import { renderRoutes } from "../utils/route";
import { IRouteConfig } from "../services/typings/route";

interface IProps {
  route: IRouteConfig;
}

const BlankLayout = (props: IProps) => {
  const { route } = props;
  return <React.Fragment>{renderRoutes(route?.routes)}</React.Fragment>;
};

export default BlankLayout;
