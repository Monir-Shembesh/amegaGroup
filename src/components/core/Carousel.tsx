import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface props {
  onImagePress: (imageUrl: string) => void;
}

const PAGE_WIDTH = Dimensions.get('window').width;
const images = [
  'https://images.unsplash.com/photo-1682685796014-2f342188a635?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?q=80&w=2750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const HorizontalCarousel = ({onImagePress}: props) => {
  return (
    <View style={styles.mainContainer}>
      <Carousel
        width={PAGE_WIDTH * 0.86}
        style={styles.carousel}
        loop
        pagingEnabled={false}
        snapEnabled
        vertical={false}
        autoPlay={false}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={images}
        renderItem={({item}) => (
          // using Pressable from react-native breaks the sliding behavior and registers as a tap
          <TouchableOpacity
            style={styles.touchableOpacity}
            containerStyle={styles.touchableOpacity}
            onPress={() => onImagePress(item)}>
            {CarouselItem(item)}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const CarouselItem = (item: string) => {
  return (
    <Image
      key={item}
      source={{uri: item}}
      resizeMode="cover"
      style={styles.renderItem}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  carousel: {
    width: PAGE_WIDTH,
  },
  touchableOpacity: {
    flex: 1,
  },
  renderItem: {
    flex: 1,
  },
});

export default HorizontalCarousel;
