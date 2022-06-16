import * as types from "../constants";

export function getRequest(payload) {
  return {
    type: types.GET_ITEM_REQUEST,
    payload,
  };
}

export function getSuccess(payload) {
  return {
    type: types.GET_ITEM_SUCCESS,
    payload,
  };
}

export function getFailure(payload) {
  return {
    type: types.GET_ITEM_FAILURE,
    payload,
  };
}

export function addRequest(payload) {
  return {
    type: types.ADD_ITEM_REQUEST,
    payload,
  };
}

export function addSuccess(payload) {
  return {
    type: types.ADD_ITEM_SUCCESS,
    payload,
  };
}

export function addFailure(payload) {
  return {
    type: types.ADD_ITEM_FAILURE,
    payload,
  };
}

export function deleteRequest(payload) {
  return {
    type: types.DELETE_ITEM_REQUEST,
    payload,
  };
}

export function deleteSuccess(payload) {
  return {
    type: types.DELETE_ITEM_SUCCESS,
    payload,
  };
}

export function deleteFailure(payload) {
  return {
    type: types.DELETE_ITEM_FAILURE,
    payload,
  };
}

export function updateRequest(payload) {
  return {
    type: types.UPDATE_ITEM_REQUEST,
    payload,
  };
}


export function updateSuccess(payload) {
  return {
    type: types.UPDATE_ITEM_SUCCESS,
    payload,
  };
}

export function updateFailure(payload) {
  return {
    type: types.UPDATE_ITEM_FAILURE,
    payload,
  };
}


export function searchRequest(payload) {
  return {
    type: types.SEARCH_ITEM_REQUEST,
    payload, 
  };
}

export function searchSuccess(payload) {
  return {
    type: types.SEARCH_ITEM_SUCCESS,
    payload,
  };
}

export function searchFailure(payload) {
  return {
    type: types.SEARCH_ITEM_FAILURE,
    payload,
  };
}

//
export function deleteImageRequest(payload) {
  return {
      type: types.DELETE_IMAGE_REQUEST, 
      payload
  }
}
export function deleteImageSuccess(payload) {
  return {
      type: types.DELETE_IMAGE_SUCCESS,
      payload
  }
}
export function deleteImageFailure(payload) {
  return {
      type: types.DELETE_IMAGE_FAILURE,
      payload
  }
}