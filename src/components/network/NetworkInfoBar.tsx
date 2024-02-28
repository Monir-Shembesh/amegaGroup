import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Network from '../../modules/Network';
import NetworkInfoItem from './NetworkInfoItem';
import WithActivityIndicator from '../core/WithActivityIndicator';

interface props {
  networkInfo: Network.IUserNetworkInfoQueryResponse;
  isError: boolean;
  isLoading: boolean;
}

const NetworkInfoBar = ({networkInfo, isError, isLoading}: props) => {
  if (isError) {
    return (
      <View style={styles.fetchErrorContainer}>
        <Text style={styles.errorText}>Error Lodaing ip info</Text>
      </View>
    );
  }
  return (
    <WithActivityIndicator isLoading={isLoading} color={'white'}>
      <View style={styles.networkInfoContainer}>
        <NetworkInfoItem title={'IP Address'} value={networkInfo?.ip} />
        <NetworkInfoItem title={'Location'} value={networkInfo?.location} />
        <NetworkInfoItem title={'Timezone'} value={networkInfo?.timeZone} />
        <NetworkInfoItem title={'ISP'} value={networkInfo?.isp} />
      </View>
    </WithActivityIndicator>
  );
};

const styles = StyleSheet.create({
  networkInfoContainer: {
    backgroundColor: 'black',
    flex: 0.3,
    flexDirection: 'row',
  },
  fetchErrorContainer: {
    backgroundColor: 'black',
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'white',
  },
});

export default NetworkInfoBar;
