import { ISearchLocation } from "services/typings/location";

export const stateContext = "location/recent";

export interface IRecentViewedState {
  data: ISearchLocation[];
}

export const initialState: IRecentViewedState = {
  data: [],
};

export type RecentViewedGlobalState = {
  [stateContext]: IRecentViewedState;
};
