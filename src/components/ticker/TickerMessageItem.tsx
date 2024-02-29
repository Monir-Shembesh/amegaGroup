import React from 'react';
import {StyleSheet, Text} from 'react-native';
import SocketSpace from '../../modules/OpenSocket';

interface props {
  item: SocketSpace.IMessageResponse;
}

export const TICKER_ITEM_HEIGHT = 20;

const TickerMessageItem = ({item}: props) => {
  return (
    <Text style={styles.tickerText}>
      {item.s} | {item.q} | {item.p}
    </Text>
  );
};

const styles = StyleSheet.create({
  tickerText: {
    height: TICKER_ITEM_HEIGHT,
  },
});

export default TickerMessageItem;
