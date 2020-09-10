import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import Communications from 'react-native-communications';
import {employeeUpdate, employeeEdit, employeeDelete} from '../actions';

import {Button, Card, CardSection, Confirm} from './common';
import EmployeeForm from './employee-form';

const EmployeeEdit = (props) => {
  const {
    employee,
    name,
    phone,
    shift,
    employeeUpdate,
    employeeEdit,
    employeeDelete,
  } = props;

  const [isConfirm, setIsConfrim] = useState(false);

  useEffect(() => {
    for (const [key, value] of Object.entries(employee)) {
      employeeUpdate({prop: key, value});
    }
  }, [employee]);

  return (
    <Card>
      <EmployeeForm
        name={name}
        phone={phone}
        shift={shift}
        onUpdateField={employeeUpdate}
      />

      <CardSection>
        <Button
          onPress={() => employeeEdit({name, phone, shift, id: employee.id})}>
          Save
        </Button>
      </CardSection>
      <CardSection>
        <Button
          onPress={() => {
            Communications.textWithoutEncoding(
              phone,
              `Your upcoming shift is ${shift}`,
            );
          }}>
          Text
        </Button>
      </CardSection>
      <CardSection>
        <Button onPress={() => setIsConfrim(true)}>Delete</Button>
      </CardSection>

      <Confirm
        visible={isConfirm}
        onAccept={() => employeeDelete({id: employee.id})}
        onDecline={() => setIsConfrim(false)}>
        Do you really want to delete employee?
      </Confirm>
    </Card>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift,
  };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeEdit,
  employeeDelete,
})(EmployeeEdit);
