import {combineReducers} from 'redux';

import login from './login';
import employeeForm from './employeeForm';
import employees from './employees';

export default combineReducers({
  login,
  employeeForm,
  employees,
});
