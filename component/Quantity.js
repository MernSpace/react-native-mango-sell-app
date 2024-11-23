import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Correct import

const Quantity = () => { // Renamed component to 'Quantity' from 'Quentity'
    const [ripeness, setRipeness] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Handle ripeness slider change
    const handleRipenessChange = (value) => {
        setRipeness(value);
    };

    // Handle quantity input change
    const handleQuantityChange = (value) => {
        // Only set the value if it's a valid number
        const numericValue = parseInt(value, 10);
        if (!isNaN(numericValue) && numericValue >= 0) {
            setQuantity(numericValue);
        }
    };

    // Increment quantity by 1
    const handleQuantityIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Decrement quantity by 1 (not below 0)
    const handleQuantityDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <View style={styles.container}>
            {/* Ripeness Slider */}
            <View style={styles.sliderContainer}>
                <Text style={styles.label}>কাঁচা/পাকা</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={100}
                    value={ripeness}
                    onValueChange={handleRipenessChange}
                    minimumTrackTintColor="#007bff"
                    maximumTrackTintColor="#d3d3d3"
                    thumbTintColor="#007bff"
                    thumbStyle={styles.thumb}  // Customize the thumb
                    trackStyle={styles.track}
                />
                <Text style={styles.valueText}>{Math.round(ripeness)}%</Text>
            </View>

            {/* Quantity Input and Buttons */}
            <View style={styles.quantityContainer}>
                <View>
                    <TouchableOpacity onPress={handleQuantityDecrement} style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>

                </View>


                <TextInput
                    style={styles.quantityInput}
                    value={quantity.toString()}
                    onChangeText={handleQuantityChange}
                    keyboardType="numeric"
                    maxLength={3} // Limit to 3 digits for quantity input (you can adjust this based on requirements)
                />

                <TouchableOpacity onPress={handleQuantityIncrement} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        margin: 20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:90
    },
    sliderContainer: {
        marginBottom: 20,
        alignItems: 'center',
        width:150
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color:'#F97F01'
    },
    slider: {
        width: '100%',
        height: 20,
    },
    valueText: {
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        color:'#F97F01'

    },
    quantityContainer: {
flexDirection:'row',
        height:70
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        margin: 5,

    },
    buttonText: {
        fontSize: 32,
        fontWeight:'800',
        color:'white'
    },
    quantityInput: {
        width: 50,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        marginHorizontal: 10,
        color:'#F97F01',
        fontWeight:'bold',
        fontSize:18
    },
    thumb: {
        width: 50,     // Thumb width
        height: 50,    // Thumb height
        borderRadius: 15, // Rounded thumb (circular)
        borderWidth: 2,
        borderColor: '#F97F01', // Thumb border color
    },
    // Custom style for the track (making it thicker)
    track: {
        height: 10, // Thicker track
    },
});

export default Quantity;
