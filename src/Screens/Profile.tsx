import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NetworkApi} from '../redux/rootApis';
import NetworkInfoBar from '../components/network/NetworkInfoBar';
import Redux from '../modules/Redux';

const Profile = () => {
  const {ip} = Redux.useAppSelector(state => state.network);
  const {isError, isLoading, data} =
    NetworkApi.endpoints.getUserNetInfo.useQueryState(ip);

  const renderScreen = () => {
    return (
      <View style={styles.mainContainer}>
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

export default Profile;
