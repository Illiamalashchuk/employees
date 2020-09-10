import {EMPLOYEE_UPDATE, EMPLOYEE_RESET} from '../actions/types';

const INTITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case EMPLOYEE_RESET:
      return INTITIAL_STATE;

    default:
      return state;
  }
};
