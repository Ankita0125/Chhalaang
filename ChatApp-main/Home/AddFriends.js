import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, ScrollView, SectionList, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

const AddFriends = () => {
  const [friendRequests, setFriendRequests] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('https://3aed-2409-40f2-f-63eb-5db2-83bd-1f5a-b282.ngrok-free.app/friendrequests/10',
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        setFriendRequests(JSON.parse(data).data);
      })
  }, []);

  // useEffect(() => {
  //   fetch(`https://3aed-2409-40f2-f-63eb-5db2-83bd-1f5a-b282.ngrok-free.app/api/get-matching-gamers/10`, {
  //     headers: {
  //       "ngrok-skip-browser-warning": "69420",
  //     }
  //   })
  //     .then(res => res.json())

  //     .then(data => {
  //       setSuggestions(JSON.parse(data).data)
  //     })
  // }, [])

  const onPressAddFriend = () => {

  };

  const onPressCancelFriend = () => {

  };

  const onPressReject = (item) => {
    fetch('https://3aed-2409-40f2-f-63eb-5db2-83bd-1f5a-b282.ngrok-free.app/rejectfriendrequests', {
      method: 'post',
      body: JSON.stringify({
        user_id: '10',
        friend_id: item.id
      }),
      headers: {
        "ngrok-skip-browser-warning": "69420",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'mode':'cors'
      }
    }).then(response => {
      console.log(response.json(), "response")
      return response.json();
    })
  };

  const onAddPress = (item) => {
    fetch('https://3aed-2409-40f2-f-63eb-5db2-83bd-1f5a-b282.ngrok-free.app/sendfriendrequest', {
      method: 'post',
      body: JSON.stringify({
        user_id: '10',
        friend_id: item.id
      }),
      headers: {
        "ngrok-skip-browser-warning": "69420",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'mode':'cors'
      }
    }).then(response => {
      return response.json();
    })
  };

  const onPressAccept = (item) => {
    fetch('https://3aed-2409-40f2-f-63eb-5db2-83bd-1f5a-b282.ngrok-free.app/acceptfriendrequest', {
      method: 'post',
      body: JSON.stringify({
        user_id: '10',
        friend_id: item.id
      }),
      headers: {
        "ngrok-skip-browser-warning": "69420",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'mode':'cors'
      }
    }).then(response => {
      return response.json();
    })
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    item: {
      fontSize: 18,
      textAlign: 'center',
      marginVertical: 8,
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 8,
    },
    addButton: {
      backgroundColor: '#841584',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gamers who added you</Text>
      <FlatList
        data={friendRequests}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={() => onPressAccept(item)} style={styles.addButton}>
                <Text style={styles.buttonText}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPressReject(item)} style={styles.addButton}>
                <Text style={styles.buttonText}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text style={styles.header}>Connect with gamers nearby</Text>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
        ]}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>{item.key}</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={() => onAddPress(item)} style={styles.addButton}>
                <Text style={styles.buttonText}>Add as friend</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.addButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};


export default AddFriends;