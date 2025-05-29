import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const programs = [
  ['B.Tech.', 'MCA', 'MD Kriya Sharir', 'MS Shalya Tantra', 'B.Pharm.', 'M.Sc.'],
  ['M.Tech.', 'BCA', 'MD Kayachikitsa', 'BNYS', 'M.Pharm.', 'B.Ed.'],
  ['MBA', 'BAMS 11ᵗʰ Batch', 'MD Ayurveda Samhita & Sidhanta', 'B.A., LL.B.', 'B.Sc. Microbiology (Hons)', 'Ph.D.'],
  ['BBA', 'MD Rachna Sharir', 'MS Prasuti Tantra & Stri Roga', 'LL.B.', 'B.Sc. Agriculture']
];

const ShobhitPrograms = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.heading}>Admission Open 2025-26</Text>
      <Text style={styles.subheading}>Full Time Programs Offered</Text>

      {/* Programs Grid */}
      <View style={styles.programGrid}>
        {programs.map((column, colIndex) => (
          <View style={styles.column} key={colIndex}>
            {column.map((course, idx) => (
              <Text style={styles.programItem} key={idx}>› {course}</Text>
            ))}
          </View>
        ))}

        {/* Get in Touch Section */}
        <View style={styles.contactSection}>
          <Text style={styles.contactHeading}>Get in Touch</Text>
          <TouchableOpacity style={styles.contactItem}>
            <Icon name="file-text-o" size={18} color="#000" />
            <Text style={styles.contactText}>ONLINE APPLICATION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem}>
            <Icon name="whatsapp" size={18} color="#25D366" />
            <Text style={styles.contactText}>WHATSAPP TALK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem}>
            <Icon name="phone" size={18} color="#007AFF" />
            <Text style={styles.contactText}>CLICK TO CALL</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Buttons */}
      <View style={styles.footerButtons}>
        <FooterButton label="Research Program" color="#d32f2f" />
        <FooterButton label="Scholarship" color="#f57c00" />
        <FooterButton label="International Students" color="#e53935" />
      </View>
    </ScrollView>
  );
};

const FooterButton = ({ label, color }) => (
  <TouchableOpacity style={[styles.footerBtn, { backgroundColor: color }]}>
    <Text style={styles.footerBtnText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcae49',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  subheading: {
    fontSize: 16,
    marginVertical: 10,
    color: '#000',
  },
  programGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  column: {
    width: '23%',
    marginVertical: 10,
  },
  programItem: {
    fontSize: 14,
    marginVertical: 5,
    color: '#111',
  },
  contactSection: {
    width: '25%',
    marginLeft: 10,
  },
  contactHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    paddingBottom: 6,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  footerBtn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  footerBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ShobhitPrograms;
