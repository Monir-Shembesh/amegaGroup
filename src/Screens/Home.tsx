import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NetworkApi} from '../redux/rootApis';
import WithActivityIndicator from '../components/core/WithActivityIndicator';
import NetworkInfoBar from '../components/network/NetworkInfoBar';
import NetworkTrackerSection from '../components/network/NetworkTrackerSection';

const Home = () => {
  const {data, isLoading, isError} = NetworkApi.useGetUserNetInfoQuery('');

  const renderScreen = () => {
    return (
      <View style={styles.mainContainer}>
        {/* network tracker section */}
        <NetworkTrackerSection />
        {/* network info bar */}
        {data ? <NetworkInfoBar networkInfo={data} /> : null}
      </View>
    );
  };

  return (
    <WithActivityIndicator isLoading={isLoading}>
      {/* we can setup a propper HOC for error handling here but will just use a normal condition now to manage the task time */}
      {isError || !data ? (
        <View>
          <Text>Error fetching Ip data</Text>
        </View>
      ) : (
        renderScreen()
      )}
    </WithActivityIndicator>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Home;
