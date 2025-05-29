import React, { useRef, useEffect, useState } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const imageHeight = width * 0.3; // Match image height to container height

const images = [
  { id: '1', uri: 'https://sug.ac.in/images/slider-image1.jpg' },
  { id: '2', uri: 'https://sug.ac.in/images/slider-image2.jpg' },
  { id: '3', uri: 'https://sug.ac.in/images/slider-image3.jpg' },
];

const ImageSlideshow = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.image} />
        )}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    height: imageHeight,
    marginBottom:10,
  },
  image: {
    width: width,
    height: imageHeight,
    resizeMode: 'cover', 
  },
});

export default ImageSlideshow;
