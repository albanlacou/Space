import {React, useCallback, useEffect, useMemo, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Platform,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import moment from 'moment';

const API_KEY = 'cFSEGuYR8CNGMd1s5BVrDSjgSmT73aLglkcC28EH';
const todayDate = moment().add(-1, 'month').format('YYYY-MM-DD');
const Rover = props => {
  const {navigation} = props;
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const dataFiltered = useMemo(() => {
    console.log(search);
    return data.filter(o => o.rover.name.includes(search));
  }, [data, search]);

  const goToDetails = useCallback(
    (img_src, sol, earth_date, landing_date, launch_date, full_name) => {
      navigation.navigate('RoverDetails', {
        title: 'RoverDetails',
        img_src: img_src,
        sol: sol,
        earth_date: earth_date,
        landing_date: landing_date,
        launch_date: launch_date,
        full_name: full_name,
      });
    },
    [navigation],
  );

  useEffect(() => {
    getRoverData().then(res => {
      setData(res);
    });
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <TextInput
        placeholder={'test'}
        style={styles.textInput}
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        style={styles.flatlist}
        data={dataFiltered}
        renderItem={(item, index) => {
          return (
            <TouchableHighlight
              onPress={() => {
                goToDetails(
                  item.item.img_src,
                  item.item.sol,
                  item.item.earth_date,
                  item.item.rover.landing_date,
                  item.item.rover.launch_date,
                  item.item.camera.full_name,
                );
              }}>
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
            </TouchableHighlight>
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
  textInput: {
    borderWidth: 2,
    width: 200,
    height: 40,
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
