import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from "@react-navigation/native";
import AppHome from './screens/AppHome';

export default function SelectGenre() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Car racing', value: 'Car racing' },
    { label: 'Cricket', value: 'Cricket' },
    { label: 'Football', value: 'Football' },
    { label: 'Cricket', value: 'banana' },
    { label: 'Shooting', value: 'shooting' },
    { label: 'Cards', value: 'cards' },
  ]);

  const navigation = useNavigation();

  const onPressNext = () => {
    navigation.navigate("AppHome");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    input: {
      height: 40,
      marginVertical: 12,
      borderWidth: 1,
      padding: 10,
      width: '80%',
    },
    button: {
      backgroundColor: '#841584',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onPressNext}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
