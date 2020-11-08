import React from "react";
import { Route, Switch, SwitchProps } from "react-router";
import { IRouteConfig } from "../services/typings/route";

export const renderRoutes = (
  routes?: IRouteConfig[],
  extraProps: object = {},
  switchProps: SwitchProps = {}
) => {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        const Component = route?.component as any;
        return (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) =>
              route.render ? (
                route.render({ ...props, ...extraProps, route: route })
              ) : (
                <Component {...props} {...extraProps} route={route} />
              )
            }
          />
        );
      })}
    </Switch>
  ) : null;
};
