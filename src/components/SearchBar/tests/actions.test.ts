import { getType } from "typesafe-actions";
import { LocationType } from "../../../constants";
import { ISearchLocation } from "../../../services/typings/location";
import actions from "../actions";

test("searchLocationActions.request should return correct payload", () => {
  const expected = {
    type: getType(actions.request),
    payload: "test",
  };
  expect(actions.request("test")).toEqual(expected);
});

test("searchLocationActions.failure should return correct payload", () => {
  const error = {
    message: "Not found",
    status: 404,
  };
  const expected = {
    type: getType(actions.failure),
    payload: { error },
  };
  expect(actions.failure({ error })).toEqual(expected);
});

test("searchLocationActions.success should return correct payload", () => {
  const payload: ISearchLocation[] = [
    {
      title: "HCMC",
      location_type: LocationType.STATE,
      latt_long: "1,2",
      woeid: 1,
      distance: 1,
    },
  ];
  const expected = {
    type: getType(actions.success),
    payload,
  };
  expect(actions.success(payload)).toEqual(expected);
});

test("searchLocationActions.reset should return correct payload", () => {
  const expected = {
    type: getType(actions.reset),
  };
  expect(actions.reset()).toEqual(expected);
});
