import {React, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import moment from 'moment';

const API_KEY = 'cFSEGuYR8CNGMd1s5BVrDSjgSmT73aLglkcC28EH';
const date = new Date();
let test = '';
const todayDate = moment().add(-1, 'month').format('YYYY-MM-DD');
const Rover = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRoverData().then(res => {
      setData(res);
    });
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        style={styles.flatlist}
        data={data}
        renderItem={(item, index) => {
          console.log(item);
          return (
            <View style={styles.itemContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {item.item.rover.name}#{item.item.id}
                </Text>
              </View>
              <Image
                style={styles.image}
                source={{
                  uri: item.item.img_src,
                }}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  flatlist: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: 250,
    height: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    color: '#FFFFFF',
  },
  title: {
    fontSize: 18,
  },
});

const getRoverData = async () => {
  try {
    const response = await fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' +
        todayDate +
        '&api_key=' +
        API_KEY,
    );
    const json = await response.json();
    return json.photos;
  } catch (error) {
    console.error(error);
  }
};
export default Rover;
