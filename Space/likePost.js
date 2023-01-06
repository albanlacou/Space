import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const MyLikes = () => {
  const [jourLike, setJourLike] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const run = async () => {
        const data = await AsyncStorage.getItem('jourLike')
        const jourLike = JSON.parse(data);
      };
      run();
    }, []),
  );

    const renderItem = ({ item }) => (
        <Text>title={item.date}</Text>
    );

  return (
          <SafeAreaView style={styles.container}>
              <FlatList
                  data={jourLike}
                  renderItem={renderItem}
              />
          </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 8,
    padding: 12,
    backgroundColor: 'lightgray',
  },
});

export default MyLikes;
