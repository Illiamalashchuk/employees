import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMPLOYEE_UPDATE, EMPLOYEE_RESET, EMPLOYEES_LIST_SET} from './types';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value},
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  return (dispatch) => {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({
          type: EMPLOYEE_RESET,
        });
        Actions.pop();
      });
  };
};

export const employeeEdit = ({name, phone, shift, id}) => {
  return (dispatch) => {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${id}`)
      .set({name, phone, shift})
      .then(() => {
        dispatch({
          type: EMPLOYEE_RESET,
        });
        Actions.pop();
      });
  };
};

export const employeeDelete = ({id}) => {
  return (dispatch) => {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${id}`)
      .remove()
      .then(() => {
        dispatch({
          type: EMPLOYEE_RESET,
        });
        Actions.pop();
      });
  };
};

export const employeesFetch = () => {
  return (dispatch) => {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', (snapshot) => {
        dispatch({type: EMPLOYEES_LIST_SET, payload: snapshot.val()});
      });
  };
};
