import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const ListItem = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.icon_place}>
            <View style={styles.icon}>
              <MaterialIcons name={props.iconname} size={24} color="white" />
            </View>
            <Text style={styles.text}>{props.adress}</Text>
          </View>
          <Text style={styles.textContent}>{props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  container: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    backgroundColor: 'white',
  },
  icon_place: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 18,
    color: 'gray',
  },
  textContent: {
    fontSize: 20,
    paddingLeft: 15,
    paddingVertical: 3,
  },
  icon: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
    width: 35,
  },
});

export default ListItem;
