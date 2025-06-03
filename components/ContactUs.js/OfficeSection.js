import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OfficeSection = () => {
  return (
    <View style={styles.container}>
      {/* Corporate Office */}
      <View style={styles.card}>
        <Text style={styles.officeTitle}>Corp. Office:</Text>
        <Text style={styles.text}>
          Shobhit University Tower, Institutional Area, Pocket-B, Mayur Vihar Phase-II, New Delhi - 110091
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:corp.office@shobhituniversity.ac.in')}>
          <Text style={styles.link}>E-mail: corp.office@shobhituniversity.ac.in</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Phone: +91-11-43205500</Text>
        <Text style={styles.text}>Fax: +91-11-43205511</Text>
      </View>

      {/* NCR Office */}
      <View style={styles.card}>
        <Text style={styles.officeTitle}>NCR Office:</Text>
        <Text style={styles.text}>Shobhit University House, A-87, Sector-57, NOIDA</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:sdoverification@shobhitonline.com')}>
          <Text style={styles.link}>E-mail: sdoverification@shobhitonline.com</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Phone: +91-120-4271655</Text>
        <Text style={styles.text}>Fax: +91-9580468322</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: height * 0.02,
  },
  card: {
    padding: width * 0.04,
    backgroundColor: '#f1f8e9',
    borderRadius: 12,
    elevation: 2,
  },
  officeTitle: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#2e7d32',
    marginBottom: height * 0.01,
  },
  text: {
    fontSize: width * 0.038,
    color: '#333',
    marginVertical: height * 0.004,
  },
  link: {
    fontSize: width * 0.038,
    color: '#1e88e5',
    textDecorationLine: 'underline',
  },
});

export default OfficeSection;
