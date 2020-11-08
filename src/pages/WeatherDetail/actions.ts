import { ActionType, createAction, createAsyncAction } from "typesafe-actions";
import { ILocation } from "../../services/typings/location";

const actions = createAsyncAction(
  "GET_LOCATION_WEATHER_REQUEST",
  "GET_LOCATION_WEATHER_SUCCESS",
  "GET_LOCATION_WEATHER_FAIL"
)<string, ILocation, { error: any; id: string }>();

const reset = createAction("GET_LOCATION_WEATHER_RESET")();

const locationActions = {
  ...actions,
  reset,
};

export default locationActions;

export type LocationAction = ActionType<typeof locationActions>;
