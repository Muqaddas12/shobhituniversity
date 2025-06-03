import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const TitleSection = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Shobhit University Uttar Pradesh</Text>
      <Text style={styles.subtitle}>
        (Established by Uttar Pradesh Shobhit University Act No. 3, 2012)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: width * 0.04,
    backgroundColor: '#e3f2fd',
    borderRadius: 12,
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#00796b',
  },
  subtitle: {
    fontSize: width * 0.035,
    fontStyle: 'italic',
    color: '#444',
  },
});

export default TitleSection;
