import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn , setUserLoggedIn] = useState("false")
  
  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: "AIzaSyDsPw3lvAuYtstAy1ROerDU46w3IdoMiPk",
      authDomain: "todo-react-c9219.firebaseapp.com",
      databaseURL: "https://todo-react-c9219.firebaseio.com",
      projectId: "todo-react-c9219",
      storageBucket: "todo-react-c9219.appspot.com",
      messagingSenderId: "89547114225",
      appId: "1:89547114225:web:6d6eef684644219fb8cb50"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  firebase.auth().onAuthStateChanged((user) => {
        if(user === null) {
          setUserLoggedIn(false)
        } else {
          setUserLoggedIn(true)
        }
      })

      if(userLoggedIn) {
        return (
          <View style={styles.container}>
            <NotesScreenComponent/>
            {/* <LoginScreenComponent/> */}
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            {/* <NotesScreenComponent/> */}
            <LoginScreenComponent/>
          </View>
        );
      }


      return (
        <View style={styles.container}>
          {/* <NotesScreenComponent/> */}
          <LoginScreenComponent/>
        </View>
      );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
