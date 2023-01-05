import React from 'react';
import {SafeAreaView, View, Button, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

const searchPage = () => {
  return (
    <SafeAreaView style={styles.screen}>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="APOD"
      />
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Mars Rover Photos"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
