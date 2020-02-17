import React, {Fragment} from 'react';
import {Input} from 'react-native-elements';
import {Text, View, StyleSheet} from 'react-native';
import Form4u from 'react-native-form4u';

const Login = () => {
  const onSubmit = () => {
    console.log('submit goes here');
  };
  formFields = [
    [
      {
        name: 'Email',
        label: 'Email',
        required: true,
        type: 'text',
        fieldProps: {},
        fieldStyle: {},
        mask: {},
      },
    ],
    [
      {
        name: 'Password',
        label: 'Password',
        required: true,
        type: 'text',
        fieldProps: {
          secureTextEntry: true,
        },
        fieldStyle: {},
        mask: {},
      },
    ],
    [
      {
        name: 'signInButton',
        label: 'Sign In',
        color: '#0096ff',
        type: 'button',
      },
    ],
  ];
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Form4u
          formFields={formFields}
          style={styles.input}
          handleSubmit={onSubmit}
          submitOnDirty
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  inner: {
    width: '80%',
    paddingTop: '40%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'transparent',
  },
  input: {
    padding: '20px',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
  },
});
export default Login;
