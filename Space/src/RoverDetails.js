import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

const App = () => {
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
const item = {
  index: 25,
  item: {
    camera: {full_name: 'Mast Camera', id: 22, name: 'MAST', rover_id: 5},
    earth_date: '2022-12-04',
    id: 1064246,
    img_src:
      'https://mars.nasa.gov/msl-raw-images/msss/03672/mcam/3672MR1032170121005059D01_DXXX.jpg',
    rover: {
      id: 5,
      landing_date: '2012-08-06',
      launch_date: '2011-11-26',
      name: 'Curiosity',
      status: 'active',
    },
    sol: 3672,
  },
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
