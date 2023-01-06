import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SearchPage from './SearchPage';

import Rover from './src/Rover';
import RoverPage from './RoverPage';
import RoverDetails from './src/RoverDetails';

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="rover">
      <Stack.Screen name="searchPage" component={SearchPage} />
      <Stack.Screen name="roverPage" component={RoverPage} />
      <Stack.Screen name="rover" component={Rover} />
      <Stack.Screen name="RoverDetails" component={RoverDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
