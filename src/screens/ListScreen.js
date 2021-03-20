import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Searchbar } from 'react-native-paper';
import SafeArea from '../components/UI/SafeArea';
import ListView from '../components/List/ListView';

const ListScreen = (props) => {
  return (
    <SafeArea>
      <View style={styles.search}>
        <Searchbar placeholder="SEARCH" />
      </View>
      <View style={styles.list}>
        <ListView navigation={props.navigation} />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
  },
});

export default ListScreen;
