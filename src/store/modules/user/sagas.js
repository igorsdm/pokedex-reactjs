import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { nameSuccess, nameFailure, typeSuccess, typeFailure } from './actions';

export function* requestName({ payload }) {
  try {
    const { name } = payload;

    yield put(nameSuccess(name));
  } catch (error) {
    toast.error('Something went wrong, please try again latter!');
    yield put(nameFailure());
  }
}
export function* requestType({ payload }) {
  try {
    const { type } = payload;

    yield put(typeSuccess(type));
  } catch (error) {
    toast.error('Something went wrong, please try again latter!');
    yield put(typeFailure());
  }
}

export default all([
  takeLatest('@user/NAME_REQUEST', requestName),
  takeLatest('@user/TYPE_REQUEST', requestType),
]);
