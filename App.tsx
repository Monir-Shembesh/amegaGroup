import React from 'react';

import Router from './src';
import {NavigationContainer} from '@react-navigation/native';
// import {NetworkApi} from './src/redux/rootApis';

const App = () => {
  // const {data, isLoading, isError} = NetworkApi.useGetUserNetInfoQuery('');

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
