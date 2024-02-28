import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NetworkApi} from '../redux/rootApis';
import NetworkInfoBar from '../components/network/NetworkInfoBar';
import NetworkTrackerSection from '../components/network/NetworkTrackerSection';

const Home = () => {
  const [ipSearchValue, setIpSearchValue] = useState('');
  const {data, isLoading, isError} = NetworkApi.useGetUserNetInfoQuery(
    ipSearchValue,
    {
      refetchOnMountOrArgChange: true,
    },
  );

  const renderScreen = () => {
    return (
      <View style={styles.mainContainer}>
        {/* network tracker section */}
        <NetworkTrackerSection onFetchIpInfo={setIpSearchValue} />
        {/* network info bar */}
        {data ? (
          <NetworkInfoBar
            networkInfo={data}
            isError={isError}
            isLoading={isLoading}
          />
        ) : null}
      </View>
    );
  };

  return <>{renderScreen()}</>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Home;
