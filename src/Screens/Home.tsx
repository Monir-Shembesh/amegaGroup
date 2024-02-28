import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NetworkApi} from '../redux/rootApis';
import NetworkInfoBar from '../components/network/NetworkInfoBar';
import NetworkTrackerSection from '../components/network/NetworkTrackerSection';
import Redux from '../modules/Redux';
import {setIpAddress} from '../redux/rootActions';

const Home = () => {
  const dispatch = Redux.useAppDispatch();
  const {ip} = Redux.useAppSelector(state => state.network);
  const {data, isLoading, isError} = NetworkApi.useGetUserNetInfoQuery(ip, {
    refetchOnMountOrArgChange: true,
  });

  const setIpSearchValue = (value: string) => {
    dispatch(setIpAddress(value));
  };

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
