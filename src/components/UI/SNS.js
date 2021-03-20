import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SNS = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.Fbutton}>
          <Ionicons name="logo-facebook" size={24} color="#337df0" />
          <Text>Login with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.Tbutton}>
          <Ionicons name="logo-twitter" size={24} color="#13b4fa" />
          <Text>Login with Twitter</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  Fbutton: {
    width: 250,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  Tbutton: {
    width: 250,
    height: 50,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
});

export default SNS;
