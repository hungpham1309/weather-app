import locationActions from "./actions";
import { call, put } from "../../utils/redux-saga/effects";
import { ISaga } from "../../services/typings/redux";
import { createSagas } from "../../utils/redux";
import locationService from "../../services/locationService";
import { ILocation } from "../../services/typings/location";

const weatherSaga: ISaga = {
  on: locationActions.request,
  *worker(action: ReturnType<typeof locationActions.request>) {
    try {
      const res: ILocation = yield call(
        locationService.getLocation,
        action.payload
      );
      yield put(locationActions.success(res));
    } catch (error) {
      yield put(locationActions.failure({ error, id: action.payload }));
    }
  },
};

export default createSagas([weatherSaga]);
