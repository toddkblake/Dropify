import { OPEN_MODAL, CLEAR_MODAL } from '../actions/modal_actions';

const ModalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return action.modal;
    }
    case CLEAR_MODAL: {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default ModalReducer;
