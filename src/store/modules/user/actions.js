export function nameRequest(name) {
  return {
    type: '@user/NAME_REQUEST',
    payload: { name },
  };
}

export function nameSuccess(name) {
  return {
    type: '@user/NAME_SUCCESS',
    payload: { name },
  };
}

export function nameFailure() {
  return {
    type: '@user/NAME_FAILURE',
  };
}

export function nameRemove() {
  return {
    type: '@user/NAME_REMOVE',
  };
}

export function typeRequest(type) {
  return {
    type: '@user/TYPE_REQUEST',
    payload: { type },
  };
}

export function typeSuccess(type) {
  return {
    type: '@user/TYPE_SUCCESS',
    payload: { type },
  };
}
export function typeFailure() {
  return {
    type: '@user/TYPE_SUCCESS',
  };
}

export function signOut() {
  return {
    type: '@user/SIGN_OUT',
  };
}
