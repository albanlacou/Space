import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

const App = item => {
  return (
    <SafeAreaView style={styles.screen}>
      <Image source={{uri: item.item.img_src}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text>Rover: {item.item.rover.name}</Text>
        <Text>sol: {item.item.sol}</Text>
        <Text>earth_date: {item.item.earth_date}</Text>
        <Text>landing_date: {item.item.rover.landing_date}</Text>
        <Text>launch_date: {item.item.rover.launch_date}</Text>
        <Text>camera: {item.item.camera.full_name}</Text>
      </View>
      <TouchableHighlight style={styles.touchableHighlight}>
        <Text>Like</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 50,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  touchableHighlight: {
    borderWidth: 1,
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
});

export default App;
