import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const ThankYouModal = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                 >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image style={{height:80,width:80}} source={require('../assets/imgs/right.png')}/>
                            <Text style={styles.modalText}>Thank You! 😀</Text>
                            <Text style={styles.p}>You Order In Process. Be Patient</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.textStyle}>Home</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        paddingHorizontal: 70,
        paddingVertical:20,
        elevation: 2,
        marginTop:20
    },
    buttonClose: {
        backgroundColor: '#F97F01',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color:'green',
        fontSize:22,
        fontWeight:'500'
    },
    p:{
        color:'black',
        fontSize:18,
        textAlign:'center',
        paddingVertical:10
    }
});

export default ThankYouModal;