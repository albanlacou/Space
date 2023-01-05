import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SearchPage from './SearchPage';
import RoverPage from './RoverPage';

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="searchPage">
      <Stack.Screen name="searchPage" component={SearchPage} />
      <Stack.Screen name="roverPage" component={RoverPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
