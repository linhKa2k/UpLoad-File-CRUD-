import { put, takeEvery } from "redux-saga/effects";
import * as types from "../constants";
import * as actions from "../actions/action";
import { getDataApi } from "../fetchAPIs/get";
import { addDataApi } from "../fetchAPIs/add";
import { deleteDataApi } from "../fetchAPIs/delete";
import { updataDataApi } from "../fetchAPIs/update";
import { searchDataApi } from "../fetchAPIs/search";

function* getApi() {
  try {
    const res = yield getDataApi();
    yield put(actions.getSuccess({listData: res.data}));
  } catch (error) {
    yield put(actions.getFailure({ errorMessage: error.message }));
  }
}

function* addApi(action) {
  console.log(action, "saga");
  try {
    yield addDataApi(action.payload.form);
    yield put(actions.addSuccess());
    yield put(actions.getRequest());
  } catch (error) {
    yield put(actions.addFailure({ errorMessage: error.message }));
  }
}

function* deleteApi(action) {
  try {
    yield deleteDataApi(action.payload);
    yield put(actions.deleteSuccess());
    yield put(actions.getRequest());
  } catch (error) {
    yield put(actions.deleteFailure({ errorMessage: error.message }));
  }
}

function* updateApi(action) {
  try {
    yield updataDataApi(action.payload.form);
    yield put(actions.updateSuccess());
    yield put(actions.getRequest());
  } catch (error) {
    yield put(actions.updateFailure({ errorMessage: error.message }));
  }
}

function* searchApi(action) {
  try {
    const search = yield searchDataApi(action.payload);
    yield put(actions.searchSuccess({listData: search.data,textSearch: search.textSearch }));
    console.log(search.textSearch, "sagaaaaaaaaa");
  } catch (error) {
    yield put(actions.searchFailure({ errorMessage: error.message }));
  }
}

export const itemSaga = [
  takeEvery(types.GET_ITEM_REQUEST, getApi),
  takeEvery(types.ADD_ITEM_REQUEST, addApi),
  takeEvery(types.DELETE_ITEM_REQUEST, deleteApi),
  takeEvery(types.UPDATE_ITEM_REQUEST, updateApi),
  takeEvery(types.SEARCH_ITEM_REQUEST, searchApi),
];
