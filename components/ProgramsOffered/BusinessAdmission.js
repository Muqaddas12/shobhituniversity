import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

const BusinessAdmission = () => {
  // State to manage the expanded/collapsed state of each program section
  const [mbaExpanded, setMbaExpanded] = useState(false);
  const [bbaExpanded, setBbaExpanded] = useState(false);

  // Function to toggle the expansion state of a program
  const toggleProgram = (program) => {
    switch (program) {
      case 'mba':
        setMbaExpanded(!mbaExpanded);
        break;
      case 'bba':
        setBbaExpanded(!bbaExpanded);
        break;
      default:
        break;
    }
  };

  const applyLink = 'https://sug.ac.in/school-of-business/admission.php'; // Placeholder link, adjust as needed

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>School of Business Studies and Entrepreneurship</Text>

      {/* MBA Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={() => toggleProgram('mba')} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>MBA</Text>
          <Text style={styles.toggleIcon}>{mbaExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {mbaExpanded && ( // Conditionally render content if expanded
          <View style={styles.programContent}>
            <Text style={styles.detailText}>Human Resource Management</Text>
            <Text style={styles.detailText}>Financial Management</Text>
            <Text style={styles.detailText}>Marketing Management</Text>
            <Text style={styles.detailText}>Operations Management</Text>
            <Text style={styles.detailText}>Duration: <Text style={styles.boldText}>2 Yrs.</Text></Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Admission to MBA Program is open to candidates who have passed a Bachelor's degree or its equivalent in any discipline from a recognized university with at least 50% aggregate marks. Candidates having valid score in <Text style={styles.boldText}>CAT/GMAT/MAT/XAT/SUNET</Text> may apply directly for GD/PI.
            </Text>
            <View style={styles.feeTable}>
              <Text style={styles.feeItem}>Administrative Charge: <Text style={styles.feeAmount}>Rs.5,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>University Charges: <Text style={styles.feeAmount}>Rs.20,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>Tuition Fee: <Text style={styles.feeAmount}>Rs.40,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>Caution Money (Refundable): <Text style={styles.feeAmount}>Rs.10,000/-</Text></Text>
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

      {/* BBA Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={() => toggleProgram('bba')} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>BBA</Text>
          <Text style={styles.toggleIcon}>{bbaExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {bbaExpanded && ( // Conditionally render content if expanded
          <View style={styles.programContent}>
            <Text style={styles.detailText}>Duration: <Text style={styles.boldText}>3 Yrs.</Text></Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Admission to BBA Program is open to candidates who have passed Intermediate / Higher Secondary (10+2) from any approved Board.
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
    fontSize: 24, // Consistent with other program titles
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
  websiteButton: { // Included for consistency, though not explicitly requested for Business
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

export default BusinessAdmission;
