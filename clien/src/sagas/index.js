import { all } from 'redux-saga/effects';
import {itemSaga} from './saga'

export default function* rootSaga() {
  yield all([
    ...itemSaga
  ]);
}