import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native';

import Card from '../components/UI/Card';
import Colors from '../constants/Colors';
import SNS from '../components/UI/SNS';
import firebase from '../../firebase';

const SignInScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Login Success!');
        props.navigation.navigate('Home');
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.screen}>
      <View style={styles.header}></View>
      <View style={styles.bodyback}>
        <View style={styles.body}>
          <Text style={styles.title}>LOGIN</Text>
          <View style={styles.inputScreen}>
            <Card style={styles.authContainer}>
              <TextInput
                style={styles.input}
                id="email"
                placeholder="E-Mail"
                keyboardType="email-address"
                required
                email
                autoCompleteType="email"
                autoCapitalize="none"
                errorMessage="Please enter email"
                initialiValue=""
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                id="password"
                placeholder="Password"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorMessage="Please enter password"
                onChangeText={setPassword}
                initialiValue=""
              />
            </Card>
            <TouchableOpacity onPress={() => Login()}>
              <View style={styles.enterButton}>
                <Text style={{ fontSize: 30, color: 'white' }}>→</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <View style={styles.signup}>
              <Text style={styles.signupText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
          <SNS />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    backgroundColor: Colors.accentColor,
    height: 150,
    width: '100%',
    borderBottomRightRadius: 100,
  },
  bodyback: {
    backgroundColor: Colors.accentColor,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 100,
  },
  title: {
    fontSize: 40,
    padding: 10,
    fontWeight: '700',
    color: '#525972',
    marginTop: 50,
  },
  authContainer: {
    width: 400,
    height: 200,
    padding: 20,
    borderTopRightRadius: 90,
    borderBottomRightRadius: 90,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    left: -30,
  },
  inputScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    height: 40,
    width: '80%',
    fontSize: 20,
    marginLeft: 30,
    marginBottom: 10,
    padding: 10,
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 1,
  },
  enterButton: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    left: -50,
  },
  signup: {
    width: 150,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 25,
    marginRight: 220,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    left: -50,
  },
  signupText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.accentColor,
  },
});

export default SignInScreen;
