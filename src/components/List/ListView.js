import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import Colors from '../../constants/Colors';
import db from '../../../firebase';
import ListItem from './ListItem';

const ListView = (props) => {
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
        const { iconname, text, warnorprofit, adress } = doc.data();
        posts.push({
          id: doc.id,
          iconname,
          text,
          warnorprofit,
          adress,
        });
      });
      //console.log(posts);
      setPosts(posts);
    });
  }, []);

  // useEffect(() => {
  //     getGeo();
  // }, []
  // )
  // .orderBy('date', 'desc').onSnapshot((querySnapshot) => {
  // const dataArray = []
  // querySnapshot.forEach((doc) => {
  //     dataArray.push(doc.data());
  // });
  // const result = geos.map((item) => {
  //   <Text>{item.text}</Text>;
  // });

  //console.log(geos)

  return (
    <View>
      <Text style={styles.text}>Recent Post</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ListItem
            text={itemData.item.text}
            iconname={itemData.item.iconname}
            warnorprofit={itemData.item.warnorprofit}
            adress={itemData.item.adress}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.accentColor,
    height: 500,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'gray',
    padding: 10,
    paddingLeft: 20,
  },
});

export default ListView;
