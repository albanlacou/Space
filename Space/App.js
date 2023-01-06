import React from 'react';
import {useRef} from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Image,
    Button,
    Dimensions,
    Alert,
    Animated,
    TouchableOpacity
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PhotoJour from './photoJour';
import UsersListScreen from './profile'
import MyLikes from "./likePost";

const Tab = createBottomTabNavigator();

const App = () => {

    const tabOffsetValue = useRef(new Animated.Value(0)).current;

    return(
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        position: 'absolute',
                        bottom: 25,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        borderRadius: 30,
                        height: 65
                    }
                }}>
                <Tab.Screen name="Photo du jour" component={PhotoJour} options={{tabBarIcon: ({focused}) => (
                        <View>
                            <Text style={{color: focused ? '#1B264D' : '#748c94', fontWeight: '500', fontFamily: 'Poppins'}}>
                                Jour
                            </Text>
                        </View>
                    ), }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                />
                <Tab.Screen name="Mars" component={MyLikes} options={{tabBarIcon: ({focused}) => (
                        <View>
                            <Text style={{color: focused ? '#1B264D' : '#748c94', fontWeight: '500', fontFamily: 'Poppins'}}>
                                Mars
                            </Text>
                        </View>
                    ), }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                />
                <Tab.Screen name="Loc" component={PhotoJour} options={{tabBarIcon: ({focused}) => (
                        <View>
                            <Text style={{color: focused ? '#1B264D' : '#748c94', fontWeight: '500', fontFamily: 'Poppins'}}>
                                Loc
                            </Text>
                        </View>
                    ), }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                />
                <Tab.Screen name="Profile" component={UsersListScreen} options={{tabBarIcon: ({focused}) => (
                        <View>
                            <Text style={{color: focused ? '#1B264D' : '#748c94', fontWeight: '500', fontFamily: 'Poppins'}}>
                                Profile
                            </Text>
                        </View>
                    ), }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default App;