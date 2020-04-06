export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function sendEmailRequest(email) {
  return {
    type: '@auth/SEND_EMAIL_REQUEST',
    payload: { email },
  };
}

export function sendEmailSuccess() {
  return {
    type: '@auth/SEND_EMAIL_SUCCESS',
  };
}

export function sendEmailFailure() {
  return {
    type: '@auth/SEND_EMAIL_FAILURE',
  };
}

export function openModalRequest(type, description) {
  return {
    type: '@auth/OPEN_MODAL_REQUEST',
    payload: { type, description },
  };
}

export function closeModalRequest() {
  return {
    type: '@auth/CLOSE_MODAL_REQUEST',
  };
}
