import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import SocketSpace from '../modules/OpenSocket';
import {TickerApi, initSocket} from '../redux/rootApis';
import Redux from '../modules/Redux';

const ITEM_HEIGHT = 20;

const MarketData = () => {
  const dispatch = Redux.useAppDispatch();
  const [socketState, setSocketState] = useState('connecting');
  const [streamDataFromCache, {data}] = TickerApi.useLazyGetDataStreamQuery();
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState('');
  const socket = useRef(new WebSocket(SocketSpace.socketUrl)).current;

  useEffect(() => {
    socket.onopen = () => {
      setSocketState('connected');
      streamData();
    };

    socket.onclose = () => {
      setIsStreaming(false);
      dispatch(TickerApi.util.resetApiState());
      setSocketState('disconnected');
    };

    socket.onerror = e => {
      setError(e.message);
    };

    initSocket(socket);
    streamDataFromCache();

    return () => {
      socket.close();
    };
  }, [socket]);

  const streamData = () => {
    socket.send(JSON.stringify(SocketSpace.connectionMessage('SUBSCRIBE')));
    setIsStreaming(true);
  };

  const stopData = () => {
    socket.close();
  };

  const renderItem = useCallback(
    ({item}: {item: SocketSpace.IMessageResponse}) => {
      return (
        <Text style={styles.tickerText}>
          {item.s} | {item.q} | {item.p}
        </Text>
      );
    },
    [],
  );

  return (
    <View style={styles.mainContainer}>
      <Text>{socketState}</Text>
      {error ? <Text>{error}</Text> : null}
      <Button onPress={stopData} title="stop stream" color={'red'} />
      <Text style={styles.dataTitle}>Data Below:</Text>
      {data && isStreaming ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: SocketSpace.IMessageResponse, index: number) =>
            item ? `${item.a}${item.T}` : index.toString()
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
