import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import App from './App';
import searchPage from './searchPage';

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="searchPage" component={searchPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
