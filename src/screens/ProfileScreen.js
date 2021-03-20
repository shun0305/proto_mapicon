import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SafeArea from '../components/UI/SafeArea';
import Colors from '../constants/Colors';
import firebase from '../../firebase';

const ProfileScreen = (props) => {
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
  }

  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.navigation.navigate('SignIn');
      })
      .catch((error) => alert(error.message));
  }

  return (
    <SafeArea>
      <View style={styles.screen}>
        <View style={styles.userContainer}>
          <Ionicons name="md-person-circle" size={60} color="gray" style={{ marginRight: 10 }} />
          <View>
            <Text style={styles.username}>{name}</Text>
            <Text style={styles.userId}>ID: {uid}</Text>
          </View>
        </View>
        <View style={styles.map}></View>
        <View style={styles.postContainer}>
          <View style={styles.post}></View>
          <View style={styles.post}></View>
          <View style={styles.post}></View>
        </View>
        <View style={styles.recomendContainer}>
          <View style={styles.recomend}></View>
          <View style={styles.recomend}></View>
        </View>
        <View style={styles.snsContainer}>
          <Text style={{ fontSize: 17, margin: 25 }}>SNS</Text>
          <View style={styles.sns}>
            <Text style={styles.snsText}>Instagram : </Text>
            <Text style={styles.snsText}>Twitter : </Text>
            <Text style={styles.snsText}>Facebook : </Text>
          </View>
        </View>
        <View>
          <Button title="LOGOUT" color="gray" onPress={() => signOut()} />
        </View>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '5%',
    marginLeft: '5%',
  },
  username: {
    fontSize: 30,
    margin: 10,
  },
  userId: {
    color: 'gray',
  },
  map: {
    width: '100%',
    height: '30%',
    backgroundColor: Colors.accentColor,
  },
  postContainer: {
    marginVertical: '5%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  post: {
    backgroundColor: Colors.accentColor,
    width: '30%',
    height: 120,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.accentColor,
  },
  recomendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  recomend: {
    width: '40%',
    height: 50,
    backgroundColor: Colors.accentColor,
  },
  sns: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  snsText: {
    fontSize: 16,
    padding: 5,
  },
});

export default ProfileScreen;
