import { ISearchLocation } from "../../services/typings/location";

export const stateContext = "location/search";

export interface ISearchLocationState {
  action: string;
  error?: any;
  data: ISearchLocation[];
}

export const initialState: ISearchLocationState = {
  action: "",
  error: null,
  data: [],
};

export type SearchLocationGlobalState = {
  [stateContext]: ISearchLocationState;
};
