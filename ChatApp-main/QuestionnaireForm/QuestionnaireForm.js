import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function QuestionnaireForm({ setSubmitSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [genre, setGenre] = useState('');
  
  const onPressSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    fetch('http://localhost:5000/insert', {
      body: JSON.stringify({ firstName: 'Fred'}),
      method: "POST",
    })
    .then(function (response) {
      console.log(response.data, "resp");
    })
    .catch(function (error) {
      console.log(error, "error");
    });
    setSubmitSuccess(true);
}
  return (
    <View style={styles.container}>
    <Text>Sign Up</Text>
      <Text aria-label="Label for Name" nativeID="location">Enter your Name</Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        value={name}
        style={styles.input}
        aria-label="input"
        aria-labelledby="name" 
      />
      <Text aria-label="Label for Email" nativeID="location">Enter your email</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={styles.input}
        aria-label="input"
        aria-labelledby="email" 
      />
      <Text aria-label="Label for Score" nativeID="location">Enter Password</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styles.input}
        aria-label="input"
        aria-labelledby="password" 
      />
      <Text aria-label="Label for Score" nativeID="location">Select Genre</Text>
      <TextInput
        onChangeText={(text) => setGenre(text)}
        value={genre}
        style={styles.input}
        aria-label="input"
        aria-labelledby="genre" 
      />
      <Button
        onPress={(e) => onPressSubmit(e)}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 300
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
        margin: 12,
        width: '20rem'
      },
  });
