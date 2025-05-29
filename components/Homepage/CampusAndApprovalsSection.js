import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

// campus life data
const campusLife = [
  {
    title: 'Housing & Dining',
    image: 'https://sug.ac.in/images/housing-dining-services340x340.jpg',
  },
  {
    title: 'Sports and Recreation',
    image: 'https://sug.ac.in/images/sports-and-recreation340x340.jpg',
  },
  {
    title: 'Computer Lab',
    image: 'https://sug.ac.in/images/computer-lab340x340.jpg',
  },
  {
    title: 'Library & Learning Centre',
    image: 'https://sug.ac.in/images/library-and-learning-centre340x340.jpg',
  },
  {
    title: 'Medical Facilities',
    image: 'https://sug.ac.in/images/medical-facilities340x340.jpg',
  },
];

//Approvals & Accreditations Icon and title
const approvals = [
  { title: 'UGC Approval', image: 'https://sug.ac.in/images/recognition-approvals/ugc_logo.png' },
  { title: 'AICTE Approval', image: 'https://sug.ac.in/images/recognition-approvals/aicte_logo.png' },
  { title: 'AIU Approval', image: 'https://sug.ac.in/images/recognition-approvals/aiu_logo.png' },
  { title: 'CCRYN Approval', image: 'https://sug.ac.in/images/recognition-approvals/ccryn_logo.png' },
  { title: 'CCIM Approval', image: 'https://sug.ac.in/images/recognition-approvals/ccim_logo.png' },
  { title: 'Bar Council of India', image: 'https://sug.ac.in/images/recognition-approvals/bci_logo.png' },
];

export default function CampusAndApprovalsSection() {
  return (
    <View style={styles.container}>
      {/* Campus Life */}
      <Text style={styles.sectionTitle}>CAMPUS LIFE</Text>
      <FlatList
        data={campusLife}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
        renderItem={({ item }) => (
          <View style={styles.circleItem}>
            <Image source={{ uri: item.image }} style={styles.circleImage} />
            <Text style={styles.caption}>{item.title}</Text>
          </View>
        )}
      />

      {/* Approvals & Accreditations */}
      <Text style={styles.sectionTitle}>
        <Text style={{ fontWeight: 'bold' }}>APPROVALS</Text>
        <Text> & ACCREDITATIONS</Text>
      </Text>
      <FlatList
        data={approvals}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
        renderItem={({ item }) => (
          <View style={styles.approvalItem}>
            <Image source={{ uri: item.image }} style={styles.approvalImage} />
            <Text style={styles.caption}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 16,
  },
  horizontalList: {
    paddingHorizontal: 8,
    gap: 12,
  },
  circleItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  circleImage: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: (width * 0.22) / 2,
    marginBottom: 8,
    backgroundColor: '#ddd',
  },
  caption: {
    fontSize: 12,
    textAlign: 'center',
    maxWidth: width * 0.25,
  },
  approvalItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  approvalImage: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: (width * 0.18) / 2,
    marginBottom: 6,
    backgroundColor: '#eee',
  },
});
