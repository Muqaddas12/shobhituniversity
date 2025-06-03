import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar,Image } from 'react-native';

const VisionAndMission = () => {
  const universityInfo = {
    introduction:
      'Shobhit University aims to create a conducive, enabling academic climate to facilitate integration of the younger generation into the logic of the present system and to develop educational means by which men and women deal critically and creatively with reality and discover how to participate in the transformation of their world.',
    vision:
      'The Shobhit University will be internationally recognized as a premier Indian University with a global perspective that educates leaders who will fashion a more humane and just world.',
    mission:
      'The core mission of the University is to promote learning in Indian tradition with international outlook. The University offers undergraduate, graduate, research scholars and professional students, the knowledge and skills needed to succeed as persons and professional in niche technical areas, and the values and sensitivity necessary to be men and women for others.\nThe University will distinguish itself as a diverse, socially responsible learning community of high quality scholarship and academic rigor, sustained by Indian ethics & values. The University will draw from the cultural, intellectual and economic resources of the nation to enrich and strengthen its educational programmes.',
    coreValues: [
      'The Indian tradition that views faith and reason as complementary resources in the search for truth and authentic human development, and that welcomes persons of all faiths as fully contributing partners to the University.',
      'The freedom and the responsibility to pursue truth and follow evidence to its conclusion.',
      'Learning as a humanizing, social activity rather than a competitive exercise.',
      'A common good that transcends the interests of particular individuals or groups; and reasoned discourse rather than coercion as the norm for decision making.',
      'Diversity of perspectives, experiences and traditions as essential components of a quality education in our global context.',
      'Excellence as the standard for teaching, scholarship, creative expression and service to the University community.',
      'Social responsibility in fulfilling the University\'s mission to create, communicate and apply knowledge to a world shared by all people and held in trust for future generations.',
      'The moral dimension of every significant human choice: taking seriously how and who we choose to be in the world.',
      'The full, integral development of each person and all persons, with the belief that no individual or group may rightfully prosper at the expense of others.',
      'A culture of service that respects and promotes the dignity of every person.',
    ],
    strategicInitiatives: [
      'Recruit and retain a diverse faculty of outstanding teacher scholars and a highly qualified, service-oriented staff, all committed to advancing the University\'s Vision, Mission and Values.',
      'Enroll, support and graduate a diverse student body, which demonstrates high academic achievement, strong leadership capability, concern for others and a sense of responsibility form the weak and the vulnerable.',
      'Provide an attractive campus environment and the resources to promote learning throughout the University:\n  - Learning resources that enhance curriculum and support scholarship\n  - Technology solutions to enhance learning and improve service\n  - Facilities to support outstanding educational programmes.',
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <Text style={styles.mainTitle}>Vision & Mission</Text>
<Image 
source={{uri:'https://sug.ac.in/images/shobhit_img/su-believe-vision-and-mission.jpg'}}
resizeMode='contain'
style={{height:'130',}}

/>
          <Text style={styles.introductionText}>{universityInfo.introduction}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Vision</Text>
            <Text style={styles.bodyText}>{universityInfo.vision}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Mission</Text>
            <Text style={styles.bodyText}>{universityInfo.mission}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Core Values</Text>
            {universityInfo.coreValues.map((value, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.listItemText}>{value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Strategic Initiatives</Text>
            {universityInfo.strategicInitiatives.map((initiative, index) => (
               <View key={index} style={styles.listItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.listItemText}>{initiative}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // Handles Android status bar
    backgroundColor: '#f0f0f0', // A light background for the screen
  },
  scrollView: {
    marginHorizontal: 0, // No horizontal margin for scroll view
  },
  card: {
    backgroundColor: '#ffffff', // White background for the card
    borderRadius: 12, // Rounded corners
    padding: 20, // Padding inside the card
    marginVertical: 20, // Vertical margin around the card
    marginHorizontal: 15, // Horizontal margin around the card
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27, // Shadow opacity
    shadowRadius: 4.65, // Shadow blur radius
    elevation: 6, // Elevation for Android shadow
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333', // Darker text color for title
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  introductionText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555', // Slightly lighter text color
    marginBottom: 20,
    textAlign: 'justify',
  },
  section: {
    marginBottom: 20, // Space between sections
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600', // Semi-bold
    color: '#444', // Dark grey for section titles
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF', // A highlight color (e.g., blue)
    paddingLeft: 8,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
    textAlign: 'justify', // Justify text for better readability
  },
  listItem: {
    flexDirection: 'row', // Align bullet point and text horizontally
    marginBottom: 8, // Space between list items
    alignItems: 'flex-start', // Align items to the start of the row
  },
  bulletPoint: {
    fontSize: 16,
    color: '#007AFF', // Match highlight color
    marginRight: 8,
    lineHeight: 22, // Match text line height
  },
  listItemText: {
    fontSize: 15,
    color: '#555',
    flex: 1, // Allow text to wrap
    lineHeight: 22,
    textAlign: 'justify',
  },
});



export default VisionAndMission;
