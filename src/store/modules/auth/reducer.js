import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  open: false,
  type: null,
  description: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      case '@auth/SEND_EMAIL_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SEND_EMAIL_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/SEND_EMAIL_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/OPEN_MODAL_REQUEST': {
        draft.open = true;
        draft.type = action.payload.type;
        draft.description = action.payload.description;
        break;
      }
      case '@auth/CLOSE_MODAL_REQUEST': {
        draft.open = false;
        draft.type = null;
        draft.description = null;
        break;
      }
      default:
    }
  });
}
