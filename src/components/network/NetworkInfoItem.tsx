import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface props {
  title: string;
  value: string;
}

const NetworkInfoItem = ({title, value}: props) => {
  return (
    <View style={styles.networkInfoItem}>
      <Text style={styles.networkInfoItemTitle}>{title}</Text>
      <Text style={styles.networkInfoItemValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  networkInfoItem: {
    flex: 1,
    alignItems: 'center',
  },
  networkInfoItemTitle: {
    fontWeight: 'bold',
    color: 'white',
    marginVertical: '15%',

    marginTop: '50%',
  },
  networkInfoItemValue: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default NetworkInfoItem;
