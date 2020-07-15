import produce from 'immer';

const INICIAL_STATE = {
  name: null,
  pokemon: null,
};

export default function auth(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/NAME_REQUEST': {
        break;
      }
      case '@user/TYPE_REQUEST': {
        break;
      }
      case '@user/NAME_SUCCESS': {
        draft.name = action.payload.name;
        break;
      }
      case '@user/TYPE_SUCCESS': {
        draft.pokemon = action.payload.type;
        break;
      }
      case '@user/FAILURE': {
        break;
      }
      case '@user/NAME_FAILURE': {
        break;
      }
      case '@user/NAME_REMOVE': {
        draft.name = null;
        break;
      }
      case '@user/SIGN_OUT': {
        draft.name = null;
        draft.pokemon = null;
        break;
      }
      default:
    }
  });
}
