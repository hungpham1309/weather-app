import { takeLatest } from "redux-saga/effects";
import {
  createAsyncAction as baseCreateAsyncAction,
  createReducer as baseCreateReducer,
} from "typesafe-actions";
import { ISaga } from "../services/typings/redux";

export function createAsyncAction<T1 = unknown, T2 = unknown, T3 = unknown>(
  type: string
) {
  const { request, success, failure } = baseCreateAsyncAction(
    "type",
    `${type}_SUCCESS`,
    `${type}_FAIL`
  )<T1, T2, T3>();
  return [request, success, failure] as const;
}

export const createReducer = baseCreateReducer;

export function createSagas(sagas: ISaga[]) {
  return sagas.map(
    (saga: any) =>
      function* () {
        yield (saga.effect || takeLatest)(saga.on, saga.worker);
      }
  );
}
