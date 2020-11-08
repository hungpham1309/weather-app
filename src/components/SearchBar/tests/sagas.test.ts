import { expectSaga } from "redux-saga-test-plan";
import sagas, { searchLocationSaga } from "../sagas";
import actions from "../actions";
import locationService from "../../../services/locationService";
import * as matchers from "redux-saga-test-plan/matchers";
import { LocationType } from "../../../constants";
import { throwError } from "redux-saga-test-plan/providers";

const action = actions.request("1");

const fakeLocations = [
  {
    title: "HCMC",
    location_type: LocationType.STATE,
    latt_long: "1,2",
    woeid: 1,
    distance: 1,
  },
];


it("should take request action", () => {
  return expectSaga(sagas[0]).take(actions.request).run()
});

it("should put result to success action", () => {
  return expectSaga(searchLocationSaga.worker, action)
    .provide([[matchers.call.fn(locationService.search), fakeLocations]])
    .put(actions.success(fakeLocations))
    .run();
});

it("should put error to failure action", () => {
  const error = new Error("Not Found");
  return expectSaga(searchLocationSaga.worker, action)
    .provide([[matchers.call.fn(locationService.search), throwError(error)]])
    .put(actions.failure({ error }))
    .run();
});
