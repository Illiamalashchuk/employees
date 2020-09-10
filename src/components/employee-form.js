import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

import {Button, Card, CardSection, Input, Spinner} from './common';

const EmployeeForm = (props) => {
  const {name, phone, shift, onUpdateField} = props;

  return (
    <>
      <CardSection>
        <Input
          label="Name"
          placeholder="John"
          value={name}
          onChange={(value) => onUpdateField({prop: 'name', value})}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={phone}
          onChange={(value) => onUpdateField({prop: 'phone', value})}
        />
      </CardSection>

      <CardSection>
        <Text style={styles.pickerLabelStyle}>Shift</Text>
        <Picker
          style={styles.pickerContainerStyle}
          selectedValue={shift}
          onValueChange={(value) => onUpdateField({prop: 'shift', value})}>
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
    </>
  );
};

const styles = StyleSheet.create({
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
  pickerContainerStyle: {
    marginHorizontal: 10,
  },
});

export default EmployeeForm;
