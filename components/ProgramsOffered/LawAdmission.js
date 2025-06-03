import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

const LawAdmission = () => {
  // State to manage the expanded/collapsed state of each program section
  const [baLlbExpanded, setBaLlbExpanded] = useState(false);
  const [llbExpanded, setLlbExpanded] = useState(false);

  // Function to toggle the expansion state of a program
  const toggleProgram = (program) => {
    switch (program) {
      case 'baLlb':
        setBaLlbExpanded(!baLlbExpanded);
        break;
      case 'llb':
        setLlbExpanded(!llbExpanded);
        break;
      default:
        break;
    }
  };

  const applyLink = 'https://sug.ac.in/school-of-law/admission.php'; // Placeholder link, adjust as needed

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>School of Law and Constitutional Studies</Text>

      {/* BA, LL.B. Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={() => toggleProgram('baLlb')} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>BA, LL.B.</Text>
          <Text style={styles.toggleIcon}>{baLlbExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {baLlbExpanded && ( // Conditionally render content if expanded
          <View style={styles.programContent}>
            <Text style={styles.detailText}>Duration: <Text style={styles.boldText}>5 Yrs.</Text></Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Admission to BA, LL.B. Program is open to a student who passed / appeared in Intermediate / Higher Secondary (10+2) from any approved Board with 50% marks. Candidates having valid Common Law Admission Test (<Text style={styles.boldText}>CLAT</Text>) / <Text style={styles.boldText}>SUNET</Text> score may also apply directly for admission.
            </Text>
            <View style={styles.feeTable}>
              <Text style={styles.feeItem}>Administrative Charge: <Text style={styles.feeAmount}>Rs.5,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>University Charges: <Text style={styles.feeAmount}>Rs.15,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>Tuition Fee: <Text style={styles.feeAmount}>Rs.20,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>Caution Money (Refundable): <Text style={styles.feeAmount}>Rs.5,000/-</Text></Text>
              <Text style={styles.feeItem}>Hostel Charges per Academic year: <Text style={styles.feeAmount}>Rs.75,000/-</Text></Text>
              <Text style={styles.feeItem}>Hostel Security Amount (Refundable): <Text style={styles.feeAmount}>Rs.5,000/-</Text></Text>
            </View>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => Linking.openURL(applyLink)}
            >
              <Text style={styles.applyButtonText}>APPLY NOW</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* LL.B. Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={() => toggleProgram('llb')} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>LL.B.</Text>
          <Text style={styles.toggleIcon}>{llbExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {llbExpanded && ( // Conditionally render content if expanded
          <View style={styles.programContent}>
            <Text style={styles.detailText}>Duration: <Text style={styles.boldText}>3 Yrs.</Text></Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Admission to LL.B. Program is open to a student who holds a Bachelor's degree of minimum 3 Yrs duration with minimum 50% marks from a recognized University. Candidates having valid Common Law Admission Test (<Text style={styles.boldText}>CLAT</Text>) / <Text style={styles.boldText}>SUNET</Text> score may also apply directly for admission.
            </Text>
            <View style={styles.feeTable}>
              <Text style={styles.feeItem}>Administrative Charge: <Text style={styles.feeAmount}>Rs.5,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>University Charges: <Text style={styles.feeAmount}>Rs.10,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>Tuition Fee: <Text style={styles.feeAmount}>Rs.20,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>Caution Money (Refundable): <Text style={styles.feeAmount}>Rs.5,000/-</Text></Text>
              <Text style={styles.feeItem}>Hostel Charges per Academic year: <Text style={styles.feeAmount}>Rs.75,000/-</Text></Text>
              <Text style={styles.feeItem}>Hostel Security Amount (Refundable): <Text style={styles.feeAmount}>Rs.5,000/-</Text></Text>
            </View>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => Linking.openURL(applyLink)}
            >
              <Text style={styles.applyButtonText}>APPLY NOW</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f5', // Consistent background
    padding: 15,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#00796b',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 10,
  },
  programCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8, // Consistent with previous card styles
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  programTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f2f1', // Light background for the clickable title
    borderBottomWidth: 1,
    borderBottomColor: '#c8e6c9',
  },
  programTitle: {
    fontSize: 24, // Consistent with Ayurveda and Pharmacy program titles
    fontWeight: '700',
    color: '#00796b',
  },
  toggleIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796b',
  },
  programContent: {
    padding: 20,
    paddingTop: 10,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00665c', // Consistent font color
    marginTop: 15,
    marginBottom: 5,
  },
  detailText: {
    fontSize: 16,
    color: '#4a4a4a', // Consistent font color
    marginBottom: 5,
    lineHeight: 24,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  feeTable: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
  },
  feeItem: {
    fontSize: 15,
    color: '#4a4a4a', // Consistent font color
    marginBottom: 4,
  },
  feeAmount: {
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  applyButton: {
    backgroundColor: '#2e7d32',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  applyButtonText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  websiteButton: { // Included for consistency, though not explicitly requested for Law
    backgroundColor: '#1e88e5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  websiteButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LawAdmission;
