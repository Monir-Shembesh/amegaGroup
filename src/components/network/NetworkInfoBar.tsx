import {StyleSheet, View} from 'react-native';
import React from 'react';
import Network from '../../modules/Network';
import NetworkInfoItem from './NetworkInfoItem';

interface props {
  networkInfo: Network.IUserNetworkInfoQueryResponse;
}

const NetworkInfoBar = ({networkInfo}: props) => {
  return (
    <View style={styles.networkInfoContainer}>
      <NetworkInfoItem title={'IP Address'} value={networkInfo?.ip} />
      <NetworkInfoItem title={'Location'} value={networkInfo?.location} />
      <NetworkInfoItem title={'Timezone'} value={networkInfo?.timeZone} />
      <NetworkInfoItem title={'ISP'} value={networkInfo?.isp} />
    </View>
  );
};

const styles = StyleSheet.create({
  networkInfoContainer: {
    backgroundColor: 'black',
    flex: 0.3,
    flexDirection: 'row',
  },
});

export default NetworkInfoBar;
