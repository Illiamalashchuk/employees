import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SET_USER,
  SET_USER_ERROR,
  RUN_LOADING,
} from '../actions/types';

const INTITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};

    case PASSWORD_CHANGED:
      return {...state, password: action.payload};

    case SET_USER:
      console.log(action);
      return {
        ...state,
        ...INTITIAL_STATE,
        user: action.payload,
      };

    case SET_USER_ERROR:
      return {...state, error: action.payload, loading: false};

    case RUN_LOADING:
      return {...state, loading: true, error: ''};

    default:
      return state;
  }
};
