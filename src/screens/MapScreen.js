import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';

import { Searchbar } from 'react-native-paper';
import Colors from '../constants/Colors';
import { db } from '../../firebase';

const MapScreen = (props) => {
  const [posts, setPosts] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [Lat, setLat] = useState();
  const [Lng, setLng] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLat(location.coords.latitude);
      setLng(location.coords.longitude);
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
        setPosts(posts);
      });
    })();
  }, []);
  // let Lat = 33.5906893404483
  // let Lng = 130.39809842960256
  let geotext = 'Waiting..';
  // let lat = location.coords.latitude;
  // let log = location.coords.longitude;
  if (errorMsg) {
    geotext = errorMsg;
  } else if (location) {
    geotext = JSON.stringify(location);
  }

  // useEffect(() => {
  //   db.onSnapshot((querySnapshot) => {
  //     const posts = [];
  //     querySnapshot.docs.forEach((doc) => {
  //       const { iconname, text, warnorprofit, adress, lat, lng } = doc.data();
  //       posts.push({
  //         id: doc.id,
  //         iconname,
  //         text,
  //         warnorprofit,
  //         adress,
  //         lat,
  //         lng,
  //       });
  //     });
  //     setPosts(posts);
  //   });
  // }, []);
  return (
    <View style={styles.screen}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 33.5906893404483,
          longitude: 130.39809842960256,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {posts.map((item) => {
          return (
            <Marker
              key={item.id}
              coordinate={{ latitude: item.lat, longitude: item.lng }}
              pinColor="#D2691E"
            >
              <Callout
                style={styles.plainView}
                onPress={(e) => {
                  if (
                    e.nativeEvent.action === 'marker-inside-overlay-press' ||
                    e.nativeEvent.action === 'callout-inside-press'
                  ) {
                    return;
                  }
                  props.navigation.navigate('DetailScreen', {
                    text: item.text,
                    iconname: item.iconname,
                    adress: item.adress,
                    warnorprofit: item.warnorprofit,
                  });
                }}
              >
                <View>
                  <Text>{item.adress}</Text>
                  <Text>{item.text}</Text>
                </View>
              </Callout>
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
  plainView: {
    width: 100,
  },
});

export default MapScreen;
