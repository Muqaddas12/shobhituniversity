import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

const AyurvedaAdmission = () => {
  // State to manage the expanded/collapsed state of each program section
  const [bamsExpanded, setBamsExpanded] = useState(false);
  const [msExpanded, setMsExpanded] = useState(false);
  const [mdExpanded, setMdExpanded] = useState(false);

  // Function to toggle the expansion state of a program
  const toggleProgram = (program) => {
    switch (program) {
      case 'bams':
        setBamsExpanded(!bamsExpanded);
        break;
      case 'ms':
        setMsExpanded(!msExpanded);
        break;
      case 'md':
        setMdExpanded(!mdExpanded);
        break;
      default:
        break;
    }
  };

  const applyLink = 'https://sug.ac.in/school-of-ayurveda/admission.php'; // Common apply link

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>School of Ayurveda - KSVAMC & RC</Text>

      {/* BAMS Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={() => toggleProgram('bams')} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>BAMS</Text>
          <Text style={styles.toggleIcon}>{bamsExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {bamsExpanded && ( // Conditionally render content if expanded
          <View style={styles.programContent}>
            <Text style={styles.detailText}>Duration: <Text style={styles.boldText}>5 ½ Yrs.</Text></Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Admission to BAMS program is open to a student who passed 10+2 with Physics, Chemistry and Biology with a minimum of 50% marks from a recognized Board. Admission through <Text style={styles.boldText}>NEET-2025</Text>.
            </Text>
            <View style={styles.feeTable}>
              <Text style={styles.feeItem}>Administrative Charge: <Text style={styles.feeAmount}>Rs.5000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>University Charges and Tuition Fee: <Text style={styles.feeAmount}>Rs.2,52,100/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>Caution Money (Refundable): <Text style={styles.feeAmount}>Rs.25,000/-</Text></Text>
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

      {/* M.S. Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={() => toggleProgram('ms')} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>M.S.</Text>
          <Text style={styles.toggleIcon}>{msExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {msExpanded && ( // Conditionally render content if expanded
          <View style={styles.programContent}>
            <Text style={styles.detailText}>Prasuti Tantra & Stri Roga</Text>
            <Text style={styles.detailText}>Shalya Tantra</Text>
            <Text style={styles.detailText}>Duration: <Text style={styles.boldText}>3 Yrs.</Text></Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Student should have completed BAMS course by any recognized institute by Central Council of Indian Medicine, New Delhi. Admission through <Text style={styles.boldText}>AIAPGET-2025</Text>.
            </Text>
            <View style={styles.feeTable}>
              <Text style={styles.feeItem}>Administrative Charge: <Text style={styles.feeAmount}>Rs.10,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>University Charges & Tuition Fee: <Text style={styles.feeAmount}>Rs.5,00,000/- Per Annum</Text></Text>
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

      {/* M.D. Program Section */}
      <View style={styles.programCard}>
        <TouchableOpacity onPress={() => toggleProgram('md')} style={styles.programTitleContainer}>
          <Text style={styles.programTitle}>M.D.</Text>
          <Text style={styles.toggleIcon}>{mdExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {mdExpanded && ( 
          <View style={styles.programContent}>
            <Text style={styles.detailText}>Kriya Sharir</Text>
            <Text style={styles.detailText}>Kayachikitsa</Text>
            <Text style={styles.detailText}>Rachna Sharir</Text>
            <Text style={styles.detailText}>Ayurveda Samhita & Sidhanta</Text>
            <Text style={styles.detailText}>Duration: <Text style={styles.boldText}>3 Yrs.</Text></Text>
            <Text style={styles.subHeading}>Eligibility:</Text>
            <Text style={styles.detailText}>
              Student should have completed BAMS course by any recognized institute by Central Council of Indian Medicine, New Delhi. Admission through <Text style={styles.boldText}>AIAPGET-2025</Text>.
            </Text>
            <View style={styles.feeTable}>
              <Text style={styles.feeItem}>Administrative Charge: <Text style={styles.feeAmount}>Rs.10,000/- Per Annum</Text></Text>
              <Text style={styles.feeItem}>University Charges & Tuition Fee: <Text style={styles.feeAmount}>Rs.5,00,000/- Per Annum</Text></Text>
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
            <TouchableOpacity
              style={styles.websiteButton}
              onPress={() => Linking.openURL('https://sug.ac.in/school-of-ayurveda/admission.php')}
            >
           
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
    backgroundColor: '#eef2f5', // Slightly darker background to make cards stand out
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
    borderRadius: 8, // Changed to 8
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Reduced shadow offset
    shadowOpacity: 0.1, // Reduced shadow opacity
    shadowRadius: 4, // Reduced shadow blur
    elevation: 3, // For Android shadow
    overflow: 'hidden',
  },
  programTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f2f1',
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
    color: '#00665c', // Changed font color
    marginTop: 15,
    marginBottom: 5,
  },
  detailText: {
    fontSize: 16,
    color: '#4a4a4a', // Changed font color
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
    color: '#4a4a4a', // Changed font color
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
 
  websiteButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AyurvedaAdmission;
