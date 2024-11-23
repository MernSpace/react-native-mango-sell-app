import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const OrderDetail =({navigation})=>{
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionPress = (option) => {
        setSelectedOption(option);
    };
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image source={require('../assets/imgs/fi-br-angle-small-right.png')}/>

                    <Image source={require('../assets/imgs/search.png')}/>
                </View>
                <Text style={[styles.textBlack,styles.heading]} >Order Detail</Text>
                <View style={styles.itemContainer}>
                   <View style={styles.item}>
                       <Text style={styles.title}>Product Price: </Text>
                       <Text style={styles.amount}>$ 2000</Text>
                   </View>
                    <View style={styles.item}>
                        <Text style={styles.title}>Tax: </Text>
                        <Text style={styles.amount}>$0.20</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.title}>Vat: </Text>
                        <Text style={styles.amount}>$0.20</Text>
                    </View>
                    <View style={[styles.item,styles.border]}>
                        <Text style={styles.title}>Charge: </Text>
                        <Text style={styles.amount}>$0.20</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.title}>Total: </Text>
                        <Text style={styles.amount}>$222.20</Text>
                    </View>
                    <View style={[styles.item,styles.border]}>
                        <Text style={styles.title}>Delivery Time: </Text>
                        <Text style={styles.amount}>3 - 4 day</Text>
                    </View>
                </View>


            </View>
            <View>
                <View>
                    <View style={styles.payment}>

                        <TouchableOpacity
                            onPress={() => handleOptionPress('Option 1')}
                            style={[styles.radioButton, selectedOption === 'Option 1' && styles.selected]}
                        >
                            <Image source={require('../assets/imgs/Group.png')}/>

                            <Text style={styles.radioButtonText}>
                                +8801945679723
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleOptionPress('Option 2')}
                            style={[styles.radioButton, selectedOption === 'Option 2' && styles.selected]}
                        >
                            <Image source={require('../assets/imgs/nagad-seeklogo 1.png')}/>

                            <Text style={styles.radioButtonText}>
                                +8801945679723
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <View>
                <View>
                    <View style={styles.footer}>
                        <TouchableOpacity >
                            <View style={styles.flex}>
                                <Text style={styles.btnText}>Total</Text>
                                <Text style={styles.btnText}>$ 2000</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,styles.bgNone]} onPress={()=>{navigation.navigate('ThankYouPage')}}>
                            <Text style={styles.textGreen}>Payment Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles =StyleSheet.create({
    container:{

    },
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },

    textBlack:{
        color:'black'
    },
    heading:{
        fontSize:25,
        fontWeight:'bold',
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'black',
    },
    amount:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
    },
    itemContainer:{
        paddingHorizontal:30
    },
    border:{
        borderBottomWidth:2,
        color:'black',

    },
    radioButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%'

    },
    selected: {
        backgroundColor: 'lightblue',
    },
    radioButtonText: {
        fontSize: 16,
        color:'black'
    },
    payment:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    footer:{
        marginTop:80,
        flexDirection:'row',
        gap:10,
        justifyContent:'space-between',
        padding:10
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
        color:'black',
        paddingLeft:10
    },
    textGreen:{
        color:'green',
        fontSize:16
    },
    bgNone:{
        backgroundColor:'transparent',
        borderRadius:20,
        borderWidth:5,
        borderColor:'green',
    },
    flex:{
        flexDirection:'column',
    }
})
export default OrderDetail;