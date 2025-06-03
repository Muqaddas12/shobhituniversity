import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ViceChancellorCard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
      

        {/* Name + Title below image */}
        <View style={styles.captionBox}>
          <Text style={styles.captionName}>Prof. (Dr.) Ranjit Singh</Text>
          <Text style={styles.captionTitle}>Vice Chancellor</Text>
        </View>
          {/* Top - Image */}
        <Image
          source={{ uri: 'https://sug.ac.in/images/VC-picture.webp' }}
          style={styles.image}
        />

        {/* Bottom - Description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.heading}>Prof. (Dr.) Ranjit Singh</Text>
          <Text style={styles.descriptionText}>
            Prof. Ranjit Singh is Vice Chancellor, Shobhit University, Gangoh. Prof Singh studied at Dr. Harisingh Gour Vishwavidyalaya, Sagar (M.P.), where he received B. Pharm., M. Pharm. and Ph.D. degrees in Pharmaceutical Sciences between 1989 and 1997. He is recipient of GP Nair memorial IDMA Gold Medal for standing First in B. Pharm. examinations, Prof. Ishwar Chandra memorial Gold Medal for earning First Position in M. Pharm. examinations, UGC Junior Research Fellowship during PG, and CSIR Senior Research Fellowship during Ph.D. & National and State Scholarships during schooling.{"\n\n"}
            He has received more than 40 awards including Distinguished Alumnus Award from Department of Pharmaceutical Sciences, Dr. H.S. Gour Vishwavidyalaya, Sagar in 2006; Senior Scientist Award, 2009 from All India Medicos Society, Hoshiarpur (Pb); Honorary Fellowship of Royal Society of Medicos, India, 2011; IDMA best paper award, 2012 in the area of Pharmaceutics; Al-Ameen College of Pharmacy Award, 2013 in the area of Pharmacognosy under UPPER awards; Best Educationist Award from International Institute of Education and Management in 2014;
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 300,
    objectFit:'cover'
  },
  captionBox: {
    backgroundColor: '#00703c',
    paddingVertical: 10,
    alignItems: 'center',
  },
  captionName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  captionTitle: {
    color: '#fff',
    fontSize: 13,
  },
  descriptionSection: {
    padding: 16,
  },
  heading: {
    color: '#00703c',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
});
