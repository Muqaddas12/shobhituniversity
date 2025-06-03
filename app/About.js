import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Navbar from '../components/Navbar';
import BottomBar from '../components/Bottom';
import { StatusBar } from 'expo-status-bar';
import OurInspirer from '../components/About/OurInspier';
import ViceChancellorCard from '../components/About/ViceChancellor';
import VisionAndMission from '../components/About/VisionAndMission';
import UniversityLeadership from '../components/About/UniversityLeadership';
import HistoricalMilestone from '../components/About/HistoricalMilestone';
import UniversityAuthorities from '../components/About/UniversityAuthorities';
import RecognitionsScreen from '../components/About/RecognitionAndApprovals';
import AwardsAndRankingsScreen from '../components/About/RankingAndAwards';
import AlumniNetworkScreen from '../components/About/AlumniNetwork';

const { width } = Dimensions.get('window');

const items = [
  'Our Inspirer',
  'Vision & Mission',
  'Historical Milestones',
  'University Leadership',
  'University Authorities',
  'Vice Chancellor',
  'Recognitions & Approvals',
  'Ranking and Awards',
  'Alumni Network',
];

export default function ContactScreen() {
  const [selectedSection, setSelectedSection] = useState('Our Inspirer');

  const renderSection = () => {
    switch (selectedSection) {
      case 'Our Inspirer':
        return <OurInspirer />;
      case 'Vice Chancellor':
        return <ViceChancellorCard />;
      case 'Vision & Mission':
        return <VisionAndMission />;
      case 'University Leadership':
        return <UniversityLeadership/>;
      case 'Historical Milestones':
        return <HistoricalMilestone/> ;
      case 'University Authorities':
        return <UniversityAuthorities/> ;
      case 'Recognitions & Approvals':
        return <RecognitionsScreen/> ;
      case 'Ranking and Awards':
        return <AwardsAndRankingsScreen/> ;
      case 'Alumni Network':
        return <AlumniNetworkScreen/> ;
      default:
        return (
          <Text style={styles.placeholderText}>
            No component added yet for "{selectedSection}"
          </Text>
        );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar />
      <View style={styles.menuRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                selectedSection === item && styles.activeMenuItem,
              ]}
              onPress={() => setSelectedSection(item)}
            >
              <Text
                style={[
                  styles.menuText,
                  selectedSection === item && styles.activeMenuText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={styles.content}>
        {renderSection()}
      </ScrollView>
      <StatusBar style="auto" />
      <BottomBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menuRow: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  menuItem: {
    marginHorizontal: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
  },
  activeMenuItem: {
    backgroundColor: '#2563EB',
  },
  menuText: {
    fontSize: 14,
    color: '#374151',
  },
  activeMenuText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  placeholderText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 50,
  },
});
