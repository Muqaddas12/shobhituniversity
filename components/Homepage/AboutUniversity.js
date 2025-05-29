// components/AboutUniversity.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const AboutUniversity = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>About University</Text>
      <Image
        source={{ uri: 'https://sug.ac.in/images/about-shobhit-boximg.jpg' }} 
        style={styles.image}
      />
      <Text style={styles.text}>
        Shobhit University, Gangoh, Saharanpur has been notified by the Govt. of Uttar Pradesh vide Shobhit Vishwavidhaylaya (Uttar Pradesh) Adhiniyam, 2011 (U.P. Act No. 3 of 2012). It is a research-intensive university that shares the values of high-quality teaching and research.
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.shobhituniversity.ac.in/about-shobhit-university.php')}>
        <Text style={styles.link}>Know About University ›</Text>
      </TouchableOpacity>
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
  },
  link: {
    fontSize: width * 0.038,
    color: '#1e90ff',
    marginTop: height * 0.01,
    textDecorationLine: 'underline',
  },
});

export default AboutUniversity;