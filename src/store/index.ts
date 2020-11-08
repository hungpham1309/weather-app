import { createStore, applyMiddleware, compose, Store } from "redux";
import getRootReducers from "../reducers";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import getRootSaga from "../sagas";
import history from "./history";
import { GlobalState, RootAction } from "services/typings/redux";

const configureStore = (): { store: Store<GlobalState, RootAction> } => {
  const routeMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [applyMiddleware(routeMiddleware, sagaMiddleware)];
  const store: any = createStore(
    getRootReducers(history),
    {},
    compose(...enhancers)
  );
  sagaMiddleware.run(getRootSaga());

  return { store };
};

export default configureStore;
