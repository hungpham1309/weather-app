import { renderRoutes } from "./utils/route";
import { ConnectedRouter } from "connected-react-router";
import React, { Suspense } from "react";
import history from "./store/history";
import PageLoading from "./components/base/PageLoading";
import routes from './routes';

const AppRoute = () => {
  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<PageLoading loading={true} />}>
        {renderRoutes(routes)}
      </Suspense>
    </ConnectedRouter>
  );
};

export default AppRoute;
