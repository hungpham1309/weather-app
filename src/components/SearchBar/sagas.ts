import searchLocationActions from "./actions";
import { call, put } from "../../utils/redux-saga/effects";
import { ISaga } from "../../services/typings/redux";
import { createSagas } from "../../utils/redux";
import locationService from "../../services/locationService";
import { ISearchLocation } from "../../services/typings/location";

export const searchLocationSaga: ISaga = {
  on: searchLocationActions.request,
  *worker(action: ReturnType<typeof searchLocationActions.request>) {
    try {
      const res: ISearchLocation[] = yield call(locationService.search, action.payload);
      yield put(searchLocationActions.success(res));
    } catch (error) {
      yield put(searchLocationActions.failure({ error }));
    }
  },
};

export default createSagas([searchLocationSaga]);
