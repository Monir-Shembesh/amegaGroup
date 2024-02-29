import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import SocketSpace from '../modules/OpenSocket';

const ITEM_HEIGHT = 20;

const MarketData = () => {
  const [socketState, setSocketState] = React.useState('connecting');
  const [data, setData] = useState<SocketSpace.IMessageResponse[]>([]);
  const [error, setError] = useState('');
  const socket = useRef(new WebSocket(SocketSpace.socketUrl)).current;

  const handleItemInsertion = (item: string) => {
    setData(prevState => [JSON.parse(item), ...prevState]);
  };

  useEffect(() => {
    socket.onopen = () => {
      setSocketState('connected');
    };

    socket.onmessage = e => {
      handleItemInsertion(e.data);
    };

    socket.onclose = () => {
      console.log('closed');
      setSocketState('disconnected');
    };

    socket.onerror = e => {
      setError(e.message);
    };

    return () => {
      socket.close();
    };
  }, [socket]);

  const streamData = () => {
    socket.send(JSON.stringify(SocketSpace.connectionMessage('SUBSCRIBE')));
  };

  const stopData = () => {
    socket.send(JSON.stringify(SocketSpace.connectionMessage('UNSUBSCRIBE')));
  };

  const renderItem = useCallback(
    ({item}: {item: SocketSpace.IMessageResponse}) => {
      return (
        <Text style={styles.tickerText}>
          {item.s} | {item.e}
        </Text>
      );
    },
    [],
  );

  return (
    <View style={styles.mainContainer}>
      <Text>{socketState}</Text>
      {error ? <Text>{error}</Text> : null}
      <Button onPress={streamData} title="stream data" color={'black'} />
      <Button onPress={stopData} title="stop stream" color={'red'} />

      <Text style={styles.dataTitle}>Data Below:</Text>

      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: SocketSpace.IMessageResponse) =>
            `${item.a}${item.T}`
          }
          getItemLayout={(_data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          removeClippedSubviews
          maxToRenderPerBatch={1}
          initialNumToRender={1}
          updateCellsBatchingPeriod={500}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  dataTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  tickerText: {
    height: ITEM_HEIGHT,
  },
});

export default MarketData;
