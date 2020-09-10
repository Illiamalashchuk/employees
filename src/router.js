import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/login-form';
import EmployeeList from './components/employee-list';
import EmployeeCreate from './components/employee-create';
import EmployeeEdit from './components/employee-edit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{flex: 1}}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="employees"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="New Employee"
          />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Employee" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
