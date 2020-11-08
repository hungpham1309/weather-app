import { RouterState } from "connected-react-router";
import { LocationGlobalState } from "pages/WeatherDetail/state";
import { SearchLocationGlobalState } from "components/SearchBar/state";
import { SearchLocationAction } from "components/SearchBar/actions";
import { LocationAction } from "pages/WeatherDetail/actions";
import { RecentViewedAction } from "pages/HomePage/components/RecentViewed/actions";
import { RecentViewedGlobalState } from "pages/HomePage/components/RecentViewed/state";

export interface ISaga<A = any> {
  on: A;
  effect?: any;
  worker: any;
}

type RouteGlobalState = { route: RouterState };

export type GlobalState = RouteGlobalState &
  SearchLocationGlobalState &
  LocationGlobalState & RecentViewedGlobalState;

export type RootAction = SearchLocationAction | LocationAction | RecentViewedAction;

declare module "typesafe-actions" {
  interface Types {
    RootAction: RootAction;
  }
}
