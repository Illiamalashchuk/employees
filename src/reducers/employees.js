import {EMPLOYEES_LIST_SET} from '../actions/types';

const INTITIAL_STATE = [];

export default (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_LIST_SET:
      return action.payload;

    default:
      return state;
  }
};
