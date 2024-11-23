import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import Homepage from './pages/homepage'; // Path to your Homepage component
import ProductDetailPage from "./pages/ProductDetailPage"; // Path to your DetailPage component
import UserDetailPage from "./pages/UserDetailPage";
import OrderDetailPage from "./pages/orderDetailPage";
import ThankYouPage from "./pages/thankYouPage";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Homepage}
                    options={{ headerShown: false, animation: 'flip' }}
                />
                <Stack.Screen
                    name="productDetail"
                    component={ProductDetailPage}
                    options={{ headerShown: false, animation: 'flip' }}
                />
                <Stack.Screen
                    name="userDetail"
                    component={UserDetailPage}
                    options={{ headerShown: false, animation: 'flip' }}
                />
                <Stack.Screen
                    name="orderDetail"
                    component={OrderDetailPage}
                    options={{ headerShown: false, animation: 'flip' }}
                />
                <Stack.Screen
                    name="ThankYouPage"
                    component={ThankYouPage}
                    options={{ headerShown: false, animation: 'flip' }}
                />
            </Stack.Navigator>
            <StatusBar backgroundColor="#182140" />
        </NavigationContainer>
    );
};

export default App;
