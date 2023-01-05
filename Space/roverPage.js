import React from 'react';
import {SafeAreaView, View, Button, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

const roverPage = () => {
  return (
    <SafeAreaView style={styles.screen}>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Curiosity"
      />
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Opportunity"
      />
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Spirit"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default roverPage();
