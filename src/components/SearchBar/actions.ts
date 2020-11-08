import { ActionType, createAction, createAsyncAction } from "typesafe-actions";
import { ISearchLocation } from "../../services/typings/location";

const actions = createAsyncAction(
  "SEARCH_LOCATION_REQUEST",
  "SEARCH_LOCATION_SUCCESS",
  "SEARCH_LOCATION_FAIL"
)<string, ISearchLocation[], { error: any }>();

const reset = createAction("SEARCH_RESET")();

const searchLocationActions = {
  ...actions,
  reset,
};

export default searchLocationActions;

export type SearchLocationAction = ActionType<typeof searchLocationActions>;
