import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity, Image} from 'react-native';

const UserInput = () => {
    const [inputText, setInputText] = useState({name:"Saharul Sifat",email:"Sifat355y@gmail.com",phone:"+8801826414795",address:"mirpur 2, dhaka"});

    const handleInputChange = (field, value) => {
        setInputText(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.input}>
                    <Text style={styles.input}>Name : {inputText.name}</Text>
                </View>
                <View style={styles.input}>
                    <Text style={styles.input}>Phone : {inputText.phone}</Text>
                </View>
                <View style={styles.input}>
                    <Text style={styles.input}>Email : {inputText.email}</Text>
                </View>
                <View style={styles.input}>
                    <Text style={styles.input}>Address : {inputText.address}</Text>
                </View>

            </View>
            <View >
                <View style={styles.info} >
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Order History</Text>
                        <Image source={require('../assets/imgs/fi-br-angle-small-right.png')}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Info</Text>
                            <Image source={require('../assets/imgs/fi-br-angle-small-right.png')}/>

                    </View>
                </View>
                <View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Edit Profile</Text>
                            <Image source={require('../assets/imgs/fi-rr-edit-alt.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,styles.bgNone]}>
                            <Text style={[styles.btnText,styles.green]}>Sign Out</Text>
                            <Image source={require('../assets/imgs/fi-br-sign-out.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        gap:20
    },
    input: {
        borderWidth: 1,
        borderColor: '#F97F01',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '90%',
        color:'#F97F01',
        fontWeight:'bold',
        fontSize:16
    },
    infoText:{
        color:'black',
        fontWeight:'bold',
        fontSize:16

    },
    info:{

        flex:1,
        gap:20,
        padding:20,

    },
    infoContainer:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        backgroundColor:'#F97F01',
        padding:20,
        borderRadius:20


    },
    btn:{
        backgroundColor:'black',
        padding:20,
        flexDirection:'row',
        gap:20,
        borderRadius:30
    },
    btnText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    },
    footer:{
        flexDirection:'row',
        gap:10,
        justifyContent:'space-between',
        padding:10
    },
    green:{
        color:'green',
    },
    bgNone:{
        backgroundColor:'transparent',
        borderColor:'green',
        borderWidth:3
    }
});

export default UserInput;