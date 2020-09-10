import React from 'react';
import {Text, View, StyleSheet, Modal} from 'react-native';

import {CardSection} from './card-section';
import {Button} from './button';

const Confirm = ({visible, children, onAccept, onDecline}) => (
  <Modal
    visible={visible}
    transparent
    animationType="slide"
    onRequestClose={() => {}}>
    <View style={styles.containerStyle}>
      <CardSection style={styles.cardSectionStyle}>
        <Text style={styles.textStyle}>{children}</Text>
      </CardSection>
      <CardSection>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </CardSection>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
});

export {Confirm};
