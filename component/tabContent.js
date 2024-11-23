import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Text } from 'react-native';

const SearchBar = ({ onChangeText, text }) => {
    return (
        <View style={styles.container}>
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={true} // Show scroll indicator for clarity
                    contentContainerStyle={styles.tabList}
                >
                    {['New', 'Combos', 'Old', 'Coming', 'Fresh'].map((label) => (
                        <View key={label} style={styles.tabItem}>
                            <TouchableOpacity>
                                <Text style={styles.tabText}>{label}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    tabList: {
        flexDirection: 'row',
        paddingHorizontal: 10, // Adjust padding for the entire list
    },
    tabItem: {
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#F97F01',
        shadowColor: '#939393',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        marginHorizontal: 5,
    },
    tabText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    cardItems:{

    },
    productImg:{

    }
});

export default SearchBar;
