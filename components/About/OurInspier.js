import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function OurInspirer() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Our Inspirer</Text>

      <View style={styles.card}>
        {/* Full Image with Quote + Person */}
        <Image
          source={{ uri: 'https://sug.ac.in/images/shobhit_img/su-our-inspirer.jpg' }}
          style={styles.fullImage}
          resizeMode="contain"
        />

        {/* Bottom Description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionText}>
            As a part of the journey to ignite the minds, a renowned agriculturist and social worker from a small town Gangoh of district Saharanpur, our Inspirer, Babu Vijendra Kumar Ji envisioned a society to cater the needs of the youth of the area and empower all sections of the society of the nation through education. This dream of Babu Ji was formalized by Dr. Shobhit Kumar and Kunwar Shekhar Vijendra voluntarily and with the spirit of social service to the community along with a team of eminent professionals, technocrats, educationists, and social workers by establishing NICE Society in 1989.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    overflow: 'hidden',
  },
  fullImage: {
    width: '100%',
    height: 150,
  },
  descriptionSection: {
    padding: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
});
