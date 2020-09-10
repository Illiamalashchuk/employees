import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SET_USER,
  SET_USER_ERROR,
  RUN_LOADING,
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  console.log(email, password);
  return (dispatch) => {
    dispatch({type: RUN_LOADING});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => loginUserSuccess(dispatch, user))
          .catch((err) => loginUserFail(dispatch, err));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({type: SET_USER, payload: user});
  Actions.main();
};

const loginUserFail = (dispatch, err) => {
  dispatch({type: SET_USER_ERROR, payload: `Authentication failed! ${err}`});
};
