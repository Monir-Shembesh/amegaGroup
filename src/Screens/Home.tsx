import React from 'react';
import {Text, View} from 'react-native';
import {NetworkApi} from '../redux/rootApis';
import WithActivityIndicator from '../components/core/WithActivityIndicator';

const Home = () => {
  const {data, isLoading, isError} = NetworkApi.useGetUserNetInfoQuery('');

  const renderScreen = () => {
    return (
      <View>
        <Text>Home</Text>
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

export default Home;
