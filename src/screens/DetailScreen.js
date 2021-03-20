import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import SafeArea from '../components/UI/SafeArea';
import Card from '../components/UI/Card';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailScreen = (props) => {
  const { text, iconname, adress, warnorprofit } = props.route.params;

  return (
    <SafeArea>
      <Button title="Go Back" onPress={() => props.navigation.navigate('List')} />
      <Card>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.userContainer}>
              <Ionicons
                name="md-person-circle"
                size={60}
                color="gray"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.userText}>User Name</Text>
            </View>
            <View style={styles.adressContainer}>
              <Text style={styles.adressText}>{adress}</Text>
              <Text>2020/03/05</Text>
            </View>
            <View style={styles.postContainer}>
              <View style={styles.iconContainer}>
                <View style={styles.iconLeft}>
                  <View style={styles.icon}>
                    <MaterialIcons name={iconname} size={24} color="white" />
                  </View>
                  {warnorprofit === 'profit' ? (
                    <View style={styles.bottomButtonSelected}>
                      <MaterialCommunityIcons name="lightbulb-on" size={24} color="white" />
                      <Text style={styles.textButtonSelected}>Profit</Text>
                    </View>
                  ) : (
                    <View style={styles.bottomButtonSelected}>
                      <Ionicons name="warning" size={24} color="white" />
                      <Text style={styles.textButtonSelected}>Warn</Text>
                    </View>
                  )}
                </View>
                <View style={styles.likeButton}>
                  <TouchableOpacity>
                    <Ionicons
                      name="thumbs-up-outline"
                      size={24}
                      color="gray"
                      style={{ marginRight: 15 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="thumbs-down-outline" size={24} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.contentText}>{text}</Text>
            </View>
            <View style={styles.commentContainer}>
              <Ionicons
                name="md-person-circle"
                size={30}
                color="gray"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={styles.comment}
                placeholder="ask or comment"
                numberOfLines={5}
                multiline={true}
                keyboardType="default"
              />
            </View>
          </View>
        </ScrollView>
      </Card>
      <Button title="Ask or Comment" onPress={() => props.navigation.navigate('List')} />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 30,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  userText: {
    fontSize: 28,
  },
  adressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  adressText: {
    fontSize: 30,
  },
  postContainer: {
    height: 400,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  contentText: {
    fontSize: 23,
    marginTop: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likeButton: {
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
    width: 35,
  },
  iconLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  comment: {
    fontSize: 23,
  },
  textButtonSelected: {
    padding: 5,
    textAlign: 'center',
    color: 'white',
  },
  bottomButtonSelected: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.primaryColor,
    backgroundColor: Colors.primaryColor,
    width: 120,
    padding: 5,
  },
});

export default DetailScreen;
