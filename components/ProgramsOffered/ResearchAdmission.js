import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

const ResearchAdmission = () => {
  // State to manage the expanded/collapsed state of the Ph.D. program section
  const [phdExpanded, setPhdExpanded] = useState(false);

  // Function to toggle the expansion state of the Ph.D. program
  const toggleProgram = () => {
    setPhdExpanded(!phdExpanded);
  };

  const applyLink = 'https://sug.ac.in/research/admission.php'; // Placeholder link, adjust as needed
  const feeDetailsLink = 'https://sug.ac.in/research/admission.php'; // Assuming the same link for fee details

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>Research Programs</Text>

      {/* Ph.D. Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={toggleProgram} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>Ph.D.</Text>
          <Text style={styles.toggleIcon}>{phdExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {phdExpanded && ( // Conditionally render content if expanded
          <View style={styles.programContent}>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Specializations:</Text> Agriculture, Biotechnology, Business Management, Chemistry, Computer Science & Engineering, Education, Electronics & Engineering, English, Law, Mathematics, Microbiology, Pharmaceutical Sciences, Physics
            </Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Any candidate who has passed the Master's examination in the concerned subject with a score of not less than 55% marks in aggregate, or have appeared in the final year examination of Master's degree in the subject concerned, shall also be eligible to appear for the Ph.D. admission.
            </Text>
            <Text style={styles.detailText}>
              Bachelor's degree in Engineering with a minimum of 75% marks in aggregate in relevant field of Engineering / Technology of a University or its equivalent, with at least 5 Yrs of experience in Public Sector Undertaking / Research and Development Organizations / Private Industries / Service Sectors / Educational Institutions / any other State and Central Government Organizations.
            </Text>

            <Text style={styles.subHeading}>Important Note:</Text>
            <Text style={styles.detailText}>
              Applicants who have valid score in any of the relevant eligibility tests like <Text style={styles.boldText}>JRF/NET (UGC/CSIR), GATE, GPAT & SLET</Text> of the State, may be exempted from the Entrance Test, as per University norms. Candidates who are Teacher Fellowship Holders/ direct awardees of fellowship by DST (INSPIRE), ICMR or any other National Agency are also exempted from the entrance test. If M.Phil. student wants to take admission to Ph.D. program after passing M.Phil examination. He / she will be exempted from Entrance Test but will have to appear for the Interview.
            </Text>

            <Text style={styles.subHeading}>Academic Fee:</Text>
            <Text style={styles.feeItem}>Administrative and other charges: <Text style={styles.feeAmount}>Rs.5000/- Per Annum</Text></Text>
            <Text style={styles.feeItem}>Hostel Charges per Academic year: <Text style={styles.feeAmount}>Rs.75,000/-</Text></Text>
            <Text style={styles.feeItem}>Hostel Security Amount (Refundable): <Text style={styles.feeAmount}>Rs.5,000/-</Text></Text>
            <TouchableOpacity onPress={() => Linking.openURL(feeDetailsLink)}>
              <Text style={styles.linkText}>For Fee details, please visit University Website: Click here</Text>
            </TouchableOpacity>

            <Text style={[styles.subHeading, { marginTop: 20 }]}>Fee for Ph.D. Program</Text>
            <View style={styles.feeTableDetailed}>
              <View style={styles.tableRowHeader}>
                <Text style={styles.tableHeaderCell}>S.No.</Text>
                <Text style={styles.tableHeaderCell}>Description</Text>
                <Text style={styles.tableHeaderCell}>University Fee</Text>
                <Text style={styles.tableHeaderCell}>Remarks</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>1.</Text>
                <Text style={styles.tableCell}>Application Processing Fee</Text>
                <Text style={styles.tableCell}>Rs.2100/-</Text>
                <Text style={styles.tableCell}>One Time</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>2.</Text>
                <Text style={styles.tableCell}>Registration Fee</Text>
                <Text style={styles.tableCell}>Rs.10,000/-</Text>
                <Text style={styles.tableCell}>One Time</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>3.</Text>
                <Text style={styles.tableCell}>First to Sixth Semester Fee</Text>
                <Text style={styles.tableCell}>Rs.50,000/-</Text>
                <Text style={styles.tableCell}>Per Semester</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>4.</Text>
                <Text style={styles.tableCell}>After Sixth Semester every additional Semester till the completion</Text>
                <Text style={styles.tableCell}>Rs.25,000/-</Text>
                <Text style={styles.tableCell}>Per Semester</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>5.</Text>
                <Text style={styles.tableCell}>Other Administrative Charges</Text>
                <Text style={styles.tableCell}>Rs.5,000/-</Text>
                <Text style={styles.tableCell}>Annually</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>6.</Text>
                <Text style={styles.tableCell}>Thesis Evaluation Fee</Text>
                <Text style={styles.tableCell}>Rs.25,000/-</Text>
                <Text style={styles.tableCell}>-</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>7.</Text>
                <Text style={styles.tableCell}>Resubmission/Re-exam Fee</Text>
                <Text style={styles.tableCell}>Rs.15,000/-</Text>
                <Text style={styles.tableCell}>If Applicable</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>8.</Text>
                <Text style={styles.tableCell}>Security Deposit (One Time)</Text>
                <Text style={styles.tableCell}>Rs.10,000/-</Text>
                <Text style={styles.tableCell}>-</Text>
              </View>
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
  linkText: {
    fontSize: 16,
    color: '#1e88e5', // Blue for links
    marginTop: 10,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  feeTableDetailed: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 15,
    overflow: 'hidden', // Ensures border radius applies to children
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  tableRowHeader: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    backgroundColor: '#f5f5f5',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    fontSize: 13, // Smaller font for table headers
  },
  tableCell: {
    flex: 1,
    padding: 10,
    color: '#4a4a4a',
    textAlign: 'center',
    fontSize: 13, // Smaller font for table cells
  },
  feeItem: {
    fontSize: 15,
    color: '#4a4a4a',
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
  websiteButton: {
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

export default ResearchAdmission;
