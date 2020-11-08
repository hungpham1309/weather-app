import { put as basePut } from 'redux-saga/effects';
import { RootAction } from 'services/typings/redux';

export * from 'redux-saga/effects';

export const put = (action: RootAction) => basePut<RootAction>(action);