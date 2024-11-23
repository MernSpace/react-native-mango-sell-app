import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity, View, ScrollView, TextInput} from 'react-native';
import user from '../assets/imgs/219983.jpg';
import SearchBar from '../component/searchBar';
import TabContent from '../component/tabContent';
import Products from '../component/products';

const HomePage = ({navigation}) => {

    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.userContanier}>
                    <Text style={styles.headingTextW}>ফজলি</Text>
                    <Text style={styles.headingTextF}>চাপাই এর অরিজিনাল আম
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('userDetail')}}
                >
                <Image source={user} style={styles.userImg} />
                </TouchableOpacity>
            </View>
            {/*//search*/}
            <SearchBar/>
        {/*    tab content*/}
            <TabContent/>
        {/*    products*/}
            <Products navigation={navigation} />
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width:250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color:'#000',
    },


    userImg: {
        height: 80,
        width:80,
        borderRadius:40
    },
    headingTextW: {
        fontSize: 32,
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        color:'#F97F01'
    },
    headingTextF: {
        fontSize: 18,
        fontFamily: 'Rubik',
        textAlign: 'center',
        fontWeight: 'bold',
        color:'#000'
    },
    userContanier:{
        textAlign:'left'
    },
    container:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:10,
    }
});

export default HomePage;
