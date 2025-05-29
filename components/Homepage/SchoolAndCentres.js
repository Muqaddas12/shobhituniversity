// components/SchoolsAndCentres.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SchoolsAndCentres = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Schools & Centres</Text>
      <Image
        source={{ uri: 'https://sug.ac.in/images/why-shobhit-boximg.png' }} 
        style={styles.image}
      />
      <Text style={styles.text}>
        Shobhit University is a leading Indian university that offers a vibrant learning environment with a focus on interdisciplinary studies and research. Our schools and centres are dedicated to fostering innovation and academic excellence.
      </Text>
      <Text style={styles.bullet}>• Undergraduate Programs</Text>
      <Text style={styles.bullet}>• Postgraduate & Professional Programs</Text>
      <Text style={styles.bullet}>• Doctoral & Research Programs</Text>
      <Text style={styles.bullet}>• Centers of Excellence</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: width * 0.04,
    marginBottom: height * 0.02,
    elevation: 2,
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 1 }, // For iOS shadow
    shadowOpacity: 0.2, // For iOS shadow
    shadowRadius: 1.41, // For iOS shadow
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: height * 0.01,
  },
  image: {
    width: '100%',
    height: height * 0.2,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: height * 0.01,
  },
  text: {
    fontSize: width * 0.038,
    color: '#333',
    lineHeight: height * 0.025,
    marginBottom: height * 0.01, // Added some space before bullets
  },
  bullet: {
    fontSize: width * 0.038,
    color: '#555',
    marginTop: height * 0.005,
    marginLeft: width * 0.02, // Indent bullet points
  },
});

export default SchoolsAndCentres;