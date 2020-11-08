import { ILocation } from "../../services/typings/location";

export const stateContext = 'location/detail';

export interface ILocationState {
  action: string;
  error: any;
  data?: ILocation;
}

export interface ILocationsState {
  [id: string]: ILocationState;
}

export const initialLocationState: ILocationState = {
  action: "",
  error: null,
};

export const initialState: ILocationsState = {};

export type LocationGlobalState = {
  [stateContext]: ILocationsState;
};
