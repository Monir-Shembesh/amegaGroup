import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import Network from '../../modules/Network';
import NetworkInfoItem from './NetworkInfoItem';
import WithActivityIndicator from '../core/WithActivityIndicator';

interface props {
  networkInfo: Network.IUserNetworkInfoQueryResponse;
  isError: boolean;
  isLoading: boolean;
  customStyles?: ViewStyle;
}

const NetworkInfoBar = ({
  networkInfo,
  isError,
  isLoading,
  customStyles,
}: props) => {
  if (isError) {
    return (
      <View style={styles.fetchErrorContainer}>
        <Text style={styles.errorText}>Error Lodaing ip info</Text>
      </View>
    );
  }
  return (
    <WithActivityIndicator isLoading={isLoading} color={'white'}>
      <View style={[styles.networkInfoContainer, customStyles]}>
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
    flex: 0.7,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  fetchErrorContainer: {
    flex: 0.7,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'white',
  },
});

export default NetworkInfoBar;
