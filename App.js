import React, {Frament, Fragment} from 'react';
import Login from './components/Login';
import Header from './components/Header';
import {Text, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />

      <Login style={styles.login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
  },
  login: {
    justifyContent: 'center',
    color: 'blue',
    textAlign: 'center',
    paddingTop: 80,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default App;
