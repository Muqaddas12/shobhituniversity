import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

const EngineeringAdmission = () => {
  // State to manage the expanded/collapsed state of each program section
  const [btechExpanded, setBtechExpanded] = useState(false);
  const [mtechExpanded, setMtechExpanded] = useState(false);
  const [mcaExpanded, setMcaExpanded] = useState(false);
  const [bcaExpanded, setBcaExpanded] = useState(false);

  // Function to toggle the expansion state of a program
  const toggleProgram = (program) => {
    switch (program) {
      case 'btech':
        setBtechExpanded(!btechExpanded);
        break;
      case 'mtech':
        setMtechExpanded(!mtechExpanded);
        break;
      case 'mca':
        setMcaExpanded(!mcaExpanded);
        break;
      case 'bca':
        setBcaExpanded(!bcaExpanded);
        break;
      default:
        break;
    }
  };

  const applyLink = 'https://sug.ac.in/school-of-engineering/admission.php'; // Placeholder link, adjust as needed

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>School of Engineering and Technology</Text>

      {/* B.Tech. Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={() => toggleProgram('btech')} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>B.Tech.</Text>
          <Text style={styles.toggleIcon}>{btechExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {btechExpanded && ( // Conditionally render content if expanded
          <View style={styles.programContent}>
            <Text style={styles.detailText}>Computer Science & Engineering</Text>
            <Text style={styles.detailText}>Duration: <Text style={styles.boldText}>4 Yrs.</Text></Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Admission to B.Tech. Programs is open to a student who passed / appeared Intermediate / Higher Secondary (10+2) from any approved Board with minimum 50% marks in PCM. Candidates appearing in Entrance Test <Text style={styles.boldText}>JEE / UPSEE / SUNET-2025</Text> can get admission.
            </Text>
            <Text style={styles.subHeading}>Lateral Eligibility:</Text>
            <Text style={styles.detailText}>
              (A student who has acquired a Diploma in Engineering through a minimum of 3 Yrs with minimum 50 percent marks.)
            </Text>
            <View style={styles.feeTable}>
              <Text style={styles.feeItem}>Administrative Charge: <Text style={styles.feeAmount}>Rs.5,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>University Charges: <Text style={styles.feeAmount}>Rs.40,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>Tuition Fee: <Text style={styles.feeAmount}>Rs.50,000/- Per Annum</Text></Text>
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

      {/* M.Tech. Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={() => toggleProgram('mtech')} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>M.Tech.</Text>
          <Text style={styles.toggleIcon}>{mtechExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {mtechExpanded && ( // Conditionally render content if expanded
          <View style={styles.programContent}>
            <Text style={styles.detailText}>Computer Science & Engineering</Text>
            <Text style={styles.detailText}>Duration: <Text style={styles.boldText}>2 Yrs.</Text></Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Admission to M. Tech Programs is open to a student who passed B.Tech. or an equivalent degree in the allied branch of Engineering with a minimum of 55% marks from a recognized University. OR MCA or M.Sc. degree in a related branch with 60% or higher aggregate marks from a recognized University. Candidates with valid GATE Score shall be given preference in Admission and Research Assistanceship.
            </Text>
            <View style={styles.feeTable}>
              <Text style={styles.feeItem}>Administrative Charge: <Text style={styles.feeAmount}>Rs.5,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>University Charges: <Text style={styles.feeAmount}>Rs.30,000/- Per Annum</Text></Text>
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

      {/* MCA Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={() => toggleProgram('mca')} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>MCA</Text>
          <Text style={styles.toggleIcon}>{mcaExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {mcaExpanded && ( // Conditionally render content if expanded
          <View style={styles.programContent}>
            <Text style={styles.detailText}>Duration: <Text style={styles.boldText}>2 Yrs.</Text></Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Admission to MCA Programs is open to candidates who hold a Bachelor's degree of minimum 3 Yrs duration of a recognized University with 50% marks in aggregate and had mathematics as one of the subjects at 10+2 level or at graduation.
            </Text>
            <View style={styles.feeTable}>
              <Text style={styles.feeItem}>Administrative Charge: <Text style={styles.feeAmount}>Rs.5,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>University Charges: <Text style={styles.feeAmount}>Rs.20,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>Tuition Fee: <Text style={styles.feeAmount}>Rs.30,000/- Per Annum</Text></Text>
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

      {/* BCA Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={() => toggleProgram('bca')} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>BCA</Text>
          <Text style={styles.toggleIcon}>{bcaExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {bcaExpanded && ( // Conditionally render content if expanded
          <View style={styles.programContent}>
            <Text style={styles.detailText}>Duration: <Text style={styles.boldText}>3 Yrs.</Text></Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Admission to BCA Programs is open to candidates who have passed (10+2) / Intermediate / Higher Secondary from any approved Board and had mathematics as one of the subjects at 10 level.
            </Text>
            <View style={styles.feeTable}>
              <Text style={styles.feeItem}>Administrative Charge: <Text style={styles.feeAmount}>Rs.5,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>University Charges: <Text style={styles.feeAmount}>Rs.10,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>Tuition Fee: <Text style={styles.feeAmount}>Rs.20,000/- Per Annum</Text></Text>
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
    borderRadius: 8, // Consistent with Ayurveda component
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
    fontSize: 24,
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
  websiteButton: { // Included in case it's needed for specific programs
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

export default EngineeringAdmission;
