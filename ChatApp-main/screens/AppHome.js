import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import colors from '../colors';

const catImageUrl = "https://cdn-icons-png.flaticon.com/512/5804/5804911.png";

const AppHome = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{ marginLeft: 15 }} />
            ),
            headerRight: () => (
                <Image
                    source={{ uri: catImageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>GAMER HUB</Text>

            <TouchableOpacity
                style={styles.actionButton}
                onPress={() => navigateToScreen("SelectGenre")}
            >
                <Text style={styles.buttonText}>Select Genre</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.actionButton}
                onPress={() => navigateToScreen("AddFriends")}
            >
                <Text style={styles.buttonText}>Add Friends</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.actionButton}
                onPress={() => navigateToScreen("Chat")}
            >
                <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.actionButton}
                onPress={() => navigateToScreen("Home")}
            >
                <Text style={styles.buttonText}>Skill Game</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    actionButton: {
        backgroundColor: colors.primary,
        width: "100%",
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default AppHome;
