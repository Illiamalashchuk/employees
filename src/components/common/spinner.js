import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size} color="#000" />
  </View>
);

const styles = StyleSheet.create({
  spinnerStyle: {
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {Spinner};
