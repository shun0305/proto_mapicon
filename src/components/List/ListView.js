import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import Colors from '../../constants/Colors';
import { db } from '../../../firebase';
import ListItem from './ListItem';

const ListView = (props) => {
  const [posts, setPosts] = useState([]);

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
      setPosts(posts);
    });
  }, []);

  return (
    <View>
      <Text style={styles.text}>Recent Post</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('DetailScreen', {
                text: itemData.item.text,
                iconname: itemData.item.iconname,
                adress: itemData.item.adress,
                warnorprofit: itemData.item.warnorprofit,
              })
            }
          >
            <ListItem
              text={itemData.item.text}
              iconname={itemData.item.iconname}
              warnorprofit={itemData.item.warnorprofit}
              adress={itemData.item.adress}
            />
          </TouchableOpacity>
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
