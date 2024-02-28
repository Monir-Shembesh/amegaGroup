import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {NetworkApi} from '../redux/rootApis';
import NetworkInfoBar from '../components/network/NetworkInfoBar';
import Redux from '../modules/Redux';

const Profile = () => {
  const {ip, imageUrl} = Redux.useAppSelector(state => state.network);
  const {isError, isLoading, data} =
    NetworkApi.endpoints.getUserNetInfo.useQueryState(ip);

  const renderScreen = () => {
    return (
      <View style={styles.mainContainer}>
        <Image
          key={imageUrl}
          source={{uri: imageUrl}}
          resizeMode="cover"
          style={styles.image}
        />
        {/* network info bar */}
        {data ? (
          <NetworkInfoBar
            networkInfo={data}
            isError={isError}
            isLoading={isLoading}
            customStyles={styles.networkInfoContainer}
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
  networkInfoContainer: {
    flex: 0.5,
  },
  image: {
    width: '80%',
    height: '35%',
    alignSelf: 'center',
    marginVertical: '10%',
    borderRadius: 25,
    resizeMode: 'cover',
  },
});

export default Profile;
