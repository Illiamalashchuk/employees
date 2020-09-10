import React, {useState, useEffect, useMemo} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';

import {employeesFetch, employeeUpdate} from '../actions';

import {Card, CardSection} from './common';
import {Actions} from 'react-native-router-flux';

const EmployeeList = (props) => {
  const {employees, employeesFetch} = props;

  const employeesList = useMemo(() => {
    const keys = Object.keys(employees);
    return keys.map((key) => ({id: key, ...employees[key]}));
  }, [employees]);

  useEffect(() => {
    employeesFetch();
  }, []);

  return (
    <Card>
      <FlatList
        data={employeesList}
        keyExractor={(el) => el.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              console.log('hello');
              Actions.employeeEdit({employee: item});
            }}>
            <CardSection>
              <Text style={styles.titleStyle}>{item.name}</Text>
            </CardSection>
          </Pressable>
        )}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

const mapStateToProps = (state) => {
  const {employees} = state;
  return {
    employees,
  };
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
