import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NetworkTrackerSection = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>NetworkTrackerSection</Text>
    </View>
  );
};

export default NetworkTrackerSection;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'blue',
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
