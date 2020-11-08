import reducers from "../reducers";
import { stateContext, initialState } from "../state";
import actions from "../actions";
import { getType } from "typesafe-actions";
import { ISearchLocation } from "services/typings/location";
import { LocationType } from "../../../constants";

const searchLocationReducers = reducers[stateContext];

describe("searchLocationReducers", () => {});

test("request", () => {
  const payload = "1";
  const action = actions.request(payload);
  expect(searchLocationReducers(initialState, action).action).toEqual(
    getType(actions.request)
  );
});

test("success", () => {
  const payload: ISearchLocation[] = [
    {
      title: "HCMC",
      location_type: LocationType.STATE,
      latt_long: "1,2",
      woeid: 1,
      distance: 1,
    },
  ];
  const action = actions.success(payload);
  expect(searchLocationReducers(initialState, action)).toEqual({
    action: getType(actions.success),
    data: payload,
    error: null,
  });
});

test("error", () => {
    const error = {
        message: "Not found",
        status: 404,
      };
    const action = actions.failure({ error });
    const state = searchLocationReducers(initialState, action);
    expect({ action: state.action, error: state.error }).toEqual({
      action: getType(actions.failure),
      error,
    });
  });

  test("reset", () => {
    const action = actions.reset();
    const state = searchLocationReducers(initialState, action);
    expect({ action: state.action, error: state.error }).toEqual({
      action: initialState.action,
      error: initialState.error,
    });
  });
