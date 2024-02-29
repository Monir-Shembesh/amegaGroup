import React, {useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import SocketSpace from '../modules/OpenSocket';
import {TickerApi, initSocket} from '../redux/rootApis';
import Redux from '../modules/Redux';
import TickerMessageList from '../components/ticker/TickerMessageList';

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

  return (
    <View style={styles.mainContainer}>
      <Text>{socketState}</Text>
      {error ? <Text>{error}</Text> : null}
      <Button onPress={stopData} title="stop stream" color={'red'} />
      <Text style={styles.dataTitle}>Data Below:</Text>
      {data && isStreaming ? (
        // note: flashlist from shopify should be tested in release mode
        <TickerMessageList data={data} isFlashList />
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
});

export default MarketData;
