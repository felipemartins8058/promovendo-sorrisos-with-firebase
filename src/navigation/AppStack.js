import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';

const Stack = createStackNavigator();

const AppStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none" screenOptions={{
                cardStyle: {
                    backgroundColor: '#FFFFFF',
                }
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;