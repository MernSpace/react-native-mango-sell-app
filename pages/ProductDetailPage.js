import React from 'react';
import {View, TextInput, StyleSheet, Image, TouchableOpacity, Text,FlatList, ScrollView} from 'react-native';
import SearchIcon from '../assets/imgs/search.png';
import menu from '../assets/imgs/menu.png';
import mango from '../assets/imgs/fozli.png';
import star from '../assets/imgs/star2.png';
import Quantity from '../component/Quantity';

const ProductDetailPage = ({navigation}) => {
    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '5', title: 'Item 5' },
    ];
    return (

           <ScrollView>
               <View style={styles.containerIcon}>
                   <TouchableOpacity>
                       <Image source={menu} style={styles.icon} />
                   </TouchableOpacity>
                   <TouchableOpacity>
                       <Image source={menu} style={styles.icon} />
                   </TouchableOpacity>
               </View>


               <View style={styles.container}>
                   <Image source={mango} style={styles.productImage} />
               </View>
               <View style={styles.productDetail}>
                   <Text style={styles.headingTextW}>ফজলি</Text>
                   <View style={styles.reviewContainer}>
                       <Image source={star} style={styles.reviewStar} />
                       <Text style={styles.reviewText}>4.5</Text>
                   </View>
                   <View>
                       <View style={styles.container}>
                           <View>
                               <View style={styles.listItem}>
                                   <Text style={styles.bullet}>•</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                               </View>
                               <View style={styles.listItem}>
                                   <Text style={styles.bullet}>•</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                               </View>
                               <View style={styles.listItem}>
                                   <Text style={styles.bullet}>•</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                               </View>
                               <View style={styles.listItem}>
                                   <Text style={styles.bullet}>•</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                               </View>
                               <View style={styles.listItem}>
                                   <Text style={styles.bullet}>•</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                               </View>
                               <View style={styles.listItem}>
                                   <Text style={styles.bullet}>•</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                                   <Text style={styles.itemText}>Product Detail</Text>
                               </View>
                           </View>
                       </View>
                   </View>
               </View>

               <View style={styles.bgWhite}>
                   <View>
                       <Quantity/>
                   </View>
                   <View>
                       <View style={styles.footerButton}>
                           <TouchableOpacity>
                               <View style={styles.button}>
                                   <Text style={styles.buttonText}>100</Text>
                               </View>
                           </TouchableOpacity>
                           <TouchableOpacity
                               onPress={() => { navigation.navigate('orderDetail')}}
                           >
                               <View style={styles.button}>

                                      <Text style={styles.buttonText}>
                                          ORDER  NOW
                                      </Text>

                               </View>
                           </TouchableOpacity>
                       </View>
                   </View>
               </View>
           </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerIcon:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
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
    icon: {
        height:25,
        fontSize: 12,
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        color:'#F97F01',
        margin:10
    },
    productImage: {
        width: '100%',
        height: 200,
        marginRight: 10,
    },
    productDetail:{
paddingHorizontal:20,
        paddingVertical:15,
        backgroundColor:'white'
    },
    headingTextW: {
        fontSize: 32,
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        color:'#F97F01'
    },
    reviewStar: {
        width: 30,
        height: 30,
    },
    reviewText:{
        fontSize:34,
        fontFamily:'Rubik',
        fontWeight:'bold',
        color:'#F97F01'
    },
    reviewContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },

    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,

    },
    bullet: {
        fontSize: 18,
        marginRight: 5,
        color:'#F97F01'

    },
    itemText: {
        fontSize: 16,
        color:'#F97F01'
    },
    bgWhite:{
        backgroundColor:'white'
    },
    button: {
        backgroundColor: '#F97F01',
        borderRadius: 5,
        margin: 5,
        paddingHorizontal:30,
        paddingVertical:10

    },
    buttonText: {
        fontSize: 24,
        fontWeight:'600',
        color:'white'
    },
    footerButton:{
        flexDirection:'row',
        justifyContent:'space-between'
    }

});

export default ProductDetailPage;
