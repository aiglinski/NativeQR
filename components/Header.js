import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Inventory</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#0096ff',
    width: '100%',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Header;
