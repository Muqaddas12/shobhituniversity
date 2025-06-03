import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const UniversityInfo = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        Adarsh Institutional Area, Babu Vijendra Marg, Gangoh, Distt. Saharanpur - 247341
      </Text>

      <TouchableOpacity onPress={() => Linking.openURL('mailto:mail@shobhituniversity.ac.in')}>
        <Text style={styles.link}>E-mail: mail@shobhituniversity.ac.in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('tel:+911331236300')}>
        <Text style={styles.text}>Phone: +91-1331-236300</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Fax: +91-1331-294500</Text>

      <TouchableOpacity onPress={() => Linking.openURL('tel:+917830810052')}>
        <Text style={styles.text}>Admission Helpline: +91-7830810052</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: width * 0.04,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: height * 0.02,
    elevation: 2,
  },
  text: {
    fontSize: width * 0.038,
    marginVertical: height * 0.004,
    color: '#333',
  },
  link: {
    fontSize: width * 0.038,
    color: '#1e88e5',
    textDecorationLine: 'underline',
    marginVertical: height * 0.004,
  },
});

export default UniversityInfo;
