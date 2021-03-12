import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';

import { Searchbar } from 'react-native-paper';
import Colors from '../constants/Colors';
import db from '../../firebase';

const MapScreen = () => {
  const [posts, setPosts] = useState([]);

  // function getGeo() {
  //   db.onSnapshot((querySnapshot) => {
  //     const dataArray = [];
  //     querySnapshot.docs.forEach((doc) => {
  //       dataArray.push(doc.data());
  //     });
  //     setGeos(dataArray);
  //     console.log(db);
  //   });
  // }

  useEffect(() => {
    db.onSnapshot((querySnapshot) => {
      const posts = [];
      querySnapshot.docs.forEach((doc) => {
        const { iconname, text, warnorprofit, adress, lat, lng } = doc.data();
        posts.push({
          id: doc.id,
          iconname,
          text,
          warnorprofit,
          adress,
          lat,
          lng,
        });
      });
      //console.log(posts);
      setPosts(posts);
    });
  }, []);
  return (
    <View style={styles.screen}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {posts.map((item) => {
          return (
            <Marker
              key={item.id}
              coordinate={{ latitude: item.lat, longitude: item.lat }}
              title={item.adress}
              description={item.text}
              pinColor="#D2691E"
            >
              <View style={styles.icon}>
                <MaterialIcons name={item.iconname} size={24} color="white" />
              </View>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <Searchbar placeholder="SEARCH" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    padding: 10,
    position: 'absolute',
    right: '5%',
    bottom: '15%',
    width: '90%',
    height: 70,
  },
  icon: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
    width: 35,
  },
});

export default MapScreen;
