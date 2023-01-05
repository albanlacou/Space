import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import App from './App';
import searchPage from './searchPage';
import roverPage from './roverPage';

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="searchPage" component={searchPage} />
      <Stack.Screen name="roverPage" component={roverPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
