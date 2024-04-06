import React from 'react';
import { StyleSheet, FlatList, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
const Friends = () => {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingTop: 22,
        },
        item: {
          padding: 10,
          fontSize: 18,
          height: 44,
        },
      });
    return (
        <View>
            <Text>Chatroom</Text>
            <FlatList
                data={[
                    { key: 'Devin' },
                    { key: 'Dan' },
                    { key: 'Dominic' },
                    { key: 'Jackson' },
                    { key: 'James' },
                    { key: 'Joel' },
                    { key: 'John' },
                    { key: 'Jillian' },
                    { key: 'Jimmy' },
                    { key: 'Julie' },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    )
}

export default Friends;