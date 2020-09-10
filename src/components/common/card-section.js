import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardSection = ({children, flexDirection, style}) => {
  return (
    <View style={{...styles.container, flexDirection, ...style}}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    position: 'relative',
  },
});

export {CardSection};
