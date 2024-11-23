
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';



const Header=()=>{
    return (
        <View style={styles.container}>
            <View>
                <Image style={{height:130}} source={require('../assets/imgs/loginbg.jpg')}/>
            </View>
            <View style={styles.userImg}>
                <Image style={{width:80,height:80,flex:1,justifyContent:'center'}} source={require('../assets/imgs/219983.jpg')}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    userImg:{
        padding:20,
        borderStyle:'solid',
        borderColor:'#F97F01',
        borderWidth:3,
        marginTop:-70,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        width:120,
        borderRadius:10,
        shadowColor:'#F97F01',
        // Android
        elevation: 10,
        // iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        height:20,
    },
    header:{
        backgroundColor:'transparent',
        zIndex:1,
    }
})

export default Header;