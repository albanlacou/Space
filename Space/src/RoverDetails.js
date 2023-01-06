import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

const RoverDetail = ({route}) => {
  const {params} = route;
  const img_src = params.img_src;
  const sol = params.sol;
  const earth_date = params.earth_date;
  const landing_date = params.landing_date;
  const launch_date = params.launch_date;
  const full_name = params.full_name;
  return (
    <SafeAreaView style={styles.screen}>
      <Image source={{uri: img_src}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text>sol: {sol}</Text>
        <Text>earth_date: {earth_date}</Text>
        <Text>landing_date: {landing_date}</Text>
        <Text>launch_date: {launch_date}</Text>
        <Text>camera: {full_name}</Text>
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

export default RoverDetail;
