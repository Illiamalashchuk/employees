import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import firebase from 'firebase';

import * as actions from '../actions';

import {Button, Card, CardSection, Input, Spinner} from './common';

const LoginForm = (props) => {
  const {
    email,
    password,
    error,
    emailChanged,
    passwordChanged,
    loginUser,
    loading,
  } = props;

  const button = loading ? (
    <Spinner size="small" />
  ) : (
    <Button onPress={() => loginUser({email, password})}>Log in</Button>
  );

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="Type your email"
          value={email}
          onChange={(value) => emailChanged(value)}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Password"
          placeholder="Your password"
          secureTextEntry
          value={password}
          onChange={(value) => passwordChanged(value)}
        />
      </CardSection>

      {error ? (
        <CardSection>
          <Text style={styles.errorStyle}>{error}</Text>
        </CardSection>
      ) : null}

      <CardSection>{button}</CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red',
  },
});

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    password: state.login.password,
    error: state.login.error,
    loading: state.login.loading,
  };
};

export default connect(mapStateToProps, actions)(LoginForm);
