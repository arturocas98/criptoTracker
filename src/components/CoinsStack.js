import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinsDetails from './CoinsDetails';
import Colors from '../res/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:Colors.blackPearl
      },
      headerTintColor:Colors.white
    }} 
    
    >
      <Stack.Screen name="Monedas" component={CoinsScreen}></Stack.Screen>
      <Stack.Screen name="MonedasDetalle" component={CoinsDetails}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CoinsStack;
