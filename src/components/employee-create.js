import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import firebase from 'firebase';

import {employeeUpdate, employeeCreate} from '../actions';

import {Button, Card, CardSection, Input, Spinner} from './common';
import EmployeeForm from './employee-form';

const EmployeeCreate = (props) => {
  const {name, phone, shift, employeeUpdate, employeeCreate} = props;

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
          onPress={() =>
            employeeCreate({name, phone, shift: shift || 'Monday'})
          }>
          Save
        </Button>
      </CardSection>
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

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(
  EmployeeCreate,
);
