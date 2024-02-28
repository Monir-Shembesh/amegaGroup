import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import IpMaskedInput from '../core/inputs/IpMaskedInput';

interface props {
  onFetchIpInfo: (ip: string) => void;
}

const NetworkTrackerSection = ({onFetchIpInfo}: props) => {
  const [ipValue, setIpValue] = useState('');

  const fetchIpInfoHandler = () => {
    onFetchIpInfo(ipValue);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>NetworkTrackerSection</Text>
      <IpMaskedInput value={ipValue} onChange={setIpValue} />
      {/* It is better to use Pressable component but will skip building it for the sake of time management */}
      <Button
        onPress={fetchIpInfoHandler}
        title="Fetch IP info"
        color={'white'}
      />
    </View>
  );
};

export default NetworkTrackerSection;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: '10%',
  },
});
