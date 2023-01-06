import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
//CkaXlzEveCfUDoe4Yx41EDT2nTl1UCwjszMqHMct
//cFSEGuYR8CNGMd1s5BVrDSjgSmT73aLglkcC28EH
const API_KEY = 'CkaXlzEveCfUDoe4Yx41EDT2nTl1UCwjszMqHMct';
const Geoloc = () => {
  const [nasa, setNasa] = useState({});
  const [latAndLong, setLatAndLong] = useState({
    coords: {latitude: '', longitude: ''},
  });
  useEffect(() => {
    request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
      Geolocation.getCurrentPosition(
        position => {
          //setNasa(await getEarthData(position));
          console.log(position);
          setLatAndLong(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <Text>latitude: {latAndLong.coords.latitude}</Text>
      <Text>longitude: {latAndLong.coords.longitude}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
const getEarthData = async position => {
  console.log(
    'https://api.nasa.gov/planetary/earth/imagery?lon=' +
      position.coords.longitude +
      '&lat=' +
      position.coords.latitude +
      '&date&api_key=' +
      API_KEY,
  );
  try {
    const response = await fetch(
      'https://api.nasa.gov/planetary/earth/imagery?lon=' +
        position.coords.longitude +
        '&lat=' +
        position.coords.latitude +
        '&date&api_key=' +
        API_KEY,
    );
    const json = await response.json();
    console.log(json);
    return json.photos;
  } catch (error) {
    console.error(error);
  }
};
export default Geoloc;
