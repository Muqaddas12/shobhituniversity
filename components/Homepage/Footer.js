import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width,height}=Dimensions.get('window')
const Footer = () => {
  return (
    <View style={styles.container}>
     

      {/* Feature Buttons */}
      <View style={styles.features}>
        <Feature icon="newspaper-o" label="Apply Now" />
        <Feature icon="book" label="Scholarship" />
        <Feature icon="briefcase" label="Placements" />
      </View>

       {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          SHOBHITUNIV.<Text style={styles.logoBold}>SOCIAL</Text>
        </Text>
        <View style={styles.socialIcons}>
          <Icon name="facebook" size={16} color="#ccc" style={styles.icon} />
          <Icon name="twitter" size={16} color="#ccc" style={styles.icon} />
          <Icon name="youtube-play" size={16} color="#ccc" style={styles.icon} />
          <Icon name="instagram" size={16} color="#ccc" style={styles.icon} />
          <Icon name="linkedin" size={16} color="#ccc" style={styles.icon} />
        </View>
      </View>
    </View>

    
  );
};

const Feature = ({ icon, label }) => (
  <TouchableOpacity style={styles.featureItem}>
    <Icon name={icon} size={30} color="#666" />
    <Text style={styles.featureText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginLeft:-height*.022,
  width:width,
    backgroundColor: '#fff',
    marginBottom:-height*.023,
  },
  header: {
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    color: '#ccc',
    fontSize: 18,
  },
  logoBold: {
    fontWeight: 'bold',
    color: '#fff',
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 40,
  },
  featureItem: {
    alignItems: 'center',
  },
  featureText: {
    marginTop: 10,
    fontSize: 12,
    color: '#444',
  },
});

export default Footer;
