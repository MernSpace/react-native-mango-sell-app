import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import star from '../assets/imgs/star2.png';
import mango from '../assets/imgs/fozli.png';
import cart from '../assets/imgs/orange.png';
import haf from '../assets/imgs/hafstar.png';

const Products = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                {/* Render multiple product cards */}
                  <View style={styles.productCard}>
                      <TouchableOpacity
                          onPress={() => { navigation.navigate('productDetail')}}
                      >
                          <View style={styles.cardItems}>
                              <Image source={mango} style={styles.productImg} />
                              <Text style={styles.productTitle}>Gopal Var</Text>
                              <View style={styles.cardFooter}>
                                  <View style={styles.review}>
                                      <Image source={star} style={styles.reviewStar} />
                                      <Image source={star} style={styles.reviewStar} />
                                      <Image source={star} style={styles.reviewStar} />
                                      <Image source={star} style={styles.reviewStar} />
                                      <Image source={haf} style={styles.reviewStar} />
                                  </View>
                                  <Image source={cart} style={styles.cartProduct} />
                              </View>
                          </View>
                      </TouchableOpacity>
                  </View>
                <View style={styles.productCard}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('productDetail')}}
                    >
                        <View style={styles.cardItems}>
                            <Image source={mango} style={styles.productImg} />
                            <Text style={styles.productTitle}>Gopal Var</Text>
                            <View style={styles.cardFooter}>
                                <View style={styles.review}>
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={haf} style={styles.reviewStar} />
                                </View>
                                <Image source={cart} style={styles.cartProduct} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.productCard}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('productDetail')}}
                    >
                        <View style={styles.cardItems}>
                            <Image source={mango} style={styles.productImg} />
                            <Text style={styles.productTitle}>Gopal Var</Text>
                            <View style={styles.cardFooter}>
                                <View style={styles.review}>
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={haf} style={styles.reviewStar} />
                                </View>
                                <Image source={cart} style={styles.cartProduct} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.productCard}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('productDetail')}}
                    >
                        <View style={styles.cardItems}>
                            <Image source={mango} style={styles.productImg} />
                            <Text style={styles.productTitle}>Gopal Var</Text>
                            <View style={styles.cardFooter}>
                                <View style={styles.review}>
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={haf} style={styles.reviewStar} />
                                </View>
                                <Image source={cart} style={styles.cartProduct} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.productCard}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('productDetail')}}
                    >
                        <View style={styles.cardItems}>
                            <Image source={mango} style={styles.productImg} />
                            <Text style={styles.productTitle}>Gopal Var</Text>
                            <View style={styles.cardFooter}>
                                <View style={styles.review}>
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={haf} style={styles.reviewStar} />
                                </View>
                                <Image source={cart} style={styles.cartProduct} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.productCard}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('productDetail')}}
                    >
                        <View style={styles.cardItems}>
                            <Image source={mango} style={styles.productImg} />
                            <Text style={styles.productTitle}>Gopal Var</Text>
                            <View style={styles.cardFooter}>
                                <View style={styles.review}>
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={haf} style={styles.reviewStar} />
                                </View>
                                <Image source={cart} style={styles.cartProduct} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.productCard}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('productDetail')}}
                    >
                        <View style={styles.cardItems}>
                            <Image source={mango} style={styles.productImg} />
                            <Text style={styles.productTitle}>Gopal Var</Text>
                            <View style={styles.cardFooter}>
                                <View style={styles.review}>
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={haf} style={styles.reviewStar} />
                                </View>
                                <Image source={cart} style={styles.cartProduct} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.productCard}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('productDetail')}}
                    >
                        <View style={styles.cardItems}>
                            <Image source={mango} style={styles.productImg} />
                            <Text style={styles.productTitle}>Gopal Var</Text>
                            <View style={styles.cardFooter}>
                                <View style={styles.review}>
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={star} style={styles.reviewStar} />
                                    <Image source={haf} style={styles.reviewStar} />
                                </View>
                                <Image source={cart} style={styles.cartProduct} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productCard: {
        width: '48%',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        padding: 15,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
    },
    productImg: {
        height: 100,
        width: '100%',
        borderRadius: 10,
    },
    reviewStar: {
        width: 20,
        height: 20,
    },
    review: {
        flexDirection: 'row',
    },
    productTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
        marginVertical: 5,
    },
    cardFooter: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartProduct: {
        width: 30,
        height: 30,
    },
});

export default Products;
