import React from 'react';
import {View, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SearchIcon from '../assets/imgs/search.png';
import menu from '../assets/imgs/menu.png';

const SearchBar = ({ onChangeText, text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image source={SearchIcon} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Search"
                    value={text}
                    placeholderTextColor="gray" // Optional: Change placeholder text color
                />
            </View>
           <TouchableOpacity>
               <Image source={menu} style={styles.menuIcon} />
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#939393',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        // Shadow properties for iOS
        shadowColor: '#939393',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Shadow properties for Android
        elevation: 5,
    },
    input: {
        flex: 1,
        height: 40,
        padding: 5,
        color: 'black',
        fontSize:18
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
        borderRadius:34
    },
    menuIcon: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
});

export default SearchBar;
