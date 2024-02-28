import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NetworkApi} from '../redux/rootApis';
import NetworkInfoBar from '../components/network/NetworkInfoBar';
import NetworkTrackerSection from '../components/network/NetworkTrackerSection';
import Redux from '../modules/Redux';
import {setIpAddress, setImageUrlAddress} from '../redux/rootActions';
import HorizontalCarousel from '../components/core/Carousel';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../modules/Navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type NavProps = NativeStackScreenProps<Navigation.TabsParamList, 'Profile'>;

const Home = () => {
  const navigation = useNavigation<NavProps['navigation']>();
  const dispatch = Redux.useAppDispatch();
  const {ip} = Redux.useAppSelector(state => state.network);
  const {data, isLoading, isError} = NetworkApi.useGetUserNetInfoQuery(ip, {
    refetchOnMountOrArgChange: true,
  });

  const setIpSearchValue = (value: string) => {
    dispatch(setIpAddress(value));
  };

  const setImageUrlValue = (value: string) => {
    // imageUrl can be passed as route params to the profile page as an alternative solution
    dispatch(setImageUrlAddress(value));
    navigation.navigate('Profile');
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
        <HorizontalCarousel onImagePress={setImageUrlValue} />
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
