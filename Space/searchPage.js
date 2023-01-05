import React, {useCallback} from 'react';
import {SafeAreaView, View, Button, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

const SearchPage = props => {
  const {navigation} = props;
  const goToApod = useCallback(() => {
    navigation.navigate('APOD', {title: 'APOD', quantity: 10});
  }, [navigation]);
  const goToRover = useCallback(() => {
    navigation.navigate('roverPage', {title: 'Rover', quantity: 10});
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Button onPress={goToApod()} title="APOD" />
      <Button onPress={goToRover()} title="Mars Rover Photos" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default SearchPage;
