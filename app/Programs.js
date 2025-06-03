import React, { useState } from 'react';
import { StyleSheet, ScrollView, Dimensions, SafeAreaView, TextInput, View } from 'react-native';

import Navbar from '../components/Navbar';
import BottomBar from '../components/Bottom';
import { StatusBar } from 'expo-status-bar';
import AyurvedaAdmission from '../components/ProgramsOffered/AyurvedaAdmission';
import EngineeringAdmission from '../components/ProgramsOffered/EngineeringAdmission';
import PharmacyAdmission from '../components/ProgramsOffered/PharmacyAdmission';
import EducationAdmission from '../components/ProgramsOffered/EducationAdmission';
import AgricultureAdmission from '../components/ProgramsOffered/AgricultureAdmission';
import BiologicalAdmission from '../components/ProgramsOffered/BiologicalAdmission';
import BusinessAdmission from '../components/ProgramsOffered/BusinessAdmission';
import LawAdmission from '../components/ProgramsOffered/LawAdmission';
import NaturopathyAdmission from '../components/ProgramsOffered/NaturopathyAdmission';
import ResearchAdmission from '../components/ProgramsOffered/ResearchAdmission';


const {width,height} = Dimensions.get('window');

export default function ContactScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  // Define a list of all admission components with their display names and associated programs
  // This array will be used to filter which components are rendered
  const allAdmissionComponents = [
    { name: 'Engineering', programs: ['B.Tech.', 'M.Tech.', 'MCA', 'BCA'], component: EngineeringAdmission },
    { name: 'Education', programs: ['B.Ed.'], component: EducationAdmission },
    { name: 'Law', programs: ['BA, LL.B.', 'LL.B.'], component: LawAdmission },
    { name: 'Ayurveda', programs: ['BAMS', 'M.S.', 'M.D.'], component: AyurvedaAdmission },
    { name: 'Pharmacy', programs: ['B. Pharm.', 'M.Pharm.'], component: PharmacyAdmission },
    { name: 'Agriculture', programs: ['B.Sc. ( Hons.) Agriculture'], component: AgricultureAdmission },
    { name: 'Biological', programs: ['M.Sc. Microbiology', 'B.Sc. (Honors) Microbiology'], component: BiologicalAdmission },
    { name: 'Business', programs: ['MBA', 'BBA'], component: BusinessAdmission },
    { name: 'Naturopathy', programs: ['BNYS'], component: NaturopathyAdmission },
    { name: 'Research', programs: ['Ph.D.'], component: ResearchAdmission },
  ];

  // Filter components based on the search query
  const filteredComponents = allAdmissionComponents.filter(item => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    // Check if the school name includes the query
    if (item.name.toLowerCase().includes(lowerCaseQuery)) {
      return true;
    }
    // Check if any of the programs offered by the school include the query
    return item.programs.some(program => program.toLowerCase().includes(lowerCaseQuery));
  });

  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <Navbar/>
        <ScrollView style={styles.scrollViewContent}>
          {/* Search Bar */}
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search schools or programs..." // Updated placeholder
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* Render filtered components */}
          {filteredComponents.map((item, index) => {
            const Component = item.component; // Get the component from the item
            return <Component key={index} />; // Render the component
          })}

        </ScrollView>
        <StatusBar style="auto" />
        <BottomBar/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
 
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 16, // Apply horizontal padding here for content
    paddingTop: 16, // You might want some padding at the top of the scrollable content
  },
  searchBarContainer: {
    marginBottom: 20, // Space below the search bar
    backgroundColor: '#f0f4f7',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  // The original 'container' style is now largely replaced by fullScreenContainer and scrollViewContent
  // If you had specific padding or background for the *content inside* the scrollview,
  // you can apply it directly to the components or a wrapper View inside ScrollView.
  // For simplicity, I've moved horizontal padding to scrollViewContent.
});
