import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const Geolocation = (props) => {
  return (
    <View style={styles.geoScreen}>
      <Text style={styles.geoText}>
        {props.street}
        {props.city}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  geoScreen: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
  },
  geoText: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: Colors.primaryColor,
    width: '90%',
    height: 50,
    padding: 15,
    textAlign: 'center',
  },
});

export default Geolocation;
