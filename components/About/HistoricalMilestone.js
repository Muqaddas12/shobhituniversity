import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

// All milestone data is defined directly inside this component file
const milestonesData = [
  {
    "id": "1", // Using string for keyExtractor
    "date": "July, 1924",
    "title": "Establishment of Hindu Anglo Nagrik Inter College",
    "description": "Founded by Babu Kedar Nath Ji in Gangoh, Distict Sharanpur,UP. Now it is known as Hindu Rashtriya Inter College."
  },
  {
    "id": "2",
    "date": "July, 1989",
    "title": "Incorporation of NICE Society",
    "description": "Envisioned by Babu Vijendra Kumar Ji to cater the needs of the youth of the area and empower all sections of the community through education."
  },
  {
    "id": "3",
    "date": "July, 1989",
    "title": "Launching of National Institute of Computer Education, Meerut",
    "description": "An initiative to support the national IT Mission."
  },
  {
    "id": "4",
    "date": "July, 1995",
    "title": "Establishment of NICE Management College, Meerut",
    "description": "One of the very first B-School of Northen India offering MBA program."
  },
  {
    "id": "5",
    "date": "July, 1996",
    "title": "NICE Management College, Meerut - Launch of BBA and BCA programs",
    "description": null
  },
  {
    "id": "6",
    "date": "July, 1998",
    "title": "NICE Management College, Meerut - Launch of MCA Program",
    "description": null
  },
  {
    "id": "7",
    "date": "July, 2000",
    "title": "Establishment of Shobhit Institute of Engineering and Technology",
    "description": "The Society established two Engineering colleges simultaneously at Meerut and Gangoh."
  },
  {
    "id": "8",
    "date": "January, 2003",
    "title": "First Scholarship Award Ceremony",
    "description": "The first Scholarship award ceremony of NICE Society Institutions, for the session 2002-2003, was chaired by Shri Lal Krishna Advani Ji, the then Hon’ble Deputy Prime Minister of India."
  },
  {
    "id": "9",
    "date": "December, 2003",
    "title": "Second Scholarship Award Ceremony",
    "description": "The Second Scholarship award ceremony of NICE Society Institutions, for the session 2003-2004, was chaired by Shri Atal Bihari Vajpayee Ji, the then Hon’ble Prime Minister of India. The ceremony was held at Prime Minster Residence 7, Race Course Road, New Delhi."
  },
  {
    "id": "10",
    "date": "September, 2004",
    "title": "Establishment of Kunwar Shekhar Hospital and Research Centre, Gangoh",
    "description": "A 100 bed hospital established to provide medical health care services to rural areas was inagurated by by Shri Lal Krishna Advani Ji, former Hon’ble Deputy Prime Minister of India."
  },
  {
    "id": "11",
    "date": "September, 2005",
    "title": "Third Scholarship Award Ceremony",
    "description": "The Third Scholarship award ceremony of NICE Society Institutions, for the session 2004-2005, chaired by Shri Bhairon Singh Shekhawart Ji, the then Hon’ble Vice-President of India. The ceremony was held at Vice President of India's residence in New Delhi."
  },
  {
    "id": "12",
    "date": "July, 2006",
    "title": "Establishment of Adarsh Vijendra Institute of Pharmaceutical Sciences, Gangoh",
    "description": "The very first institution of Pharmcy, in district Saharanpur, was established by the Society."
  },
  {
    "id": "13",
    "date": "November, 2006",
    "title": "Conferment of Deemed to be University Status to SIET, Meerut",
    "description": "Acknowledging our mission to create the quality human resource in the niche and emerging areas, the Government of India, Ministry of Human Resource Development under section 3 of the University Grants Commission Act granted Deemed-to-be University status to Shobhit Institute of Engineering & Technology (Now popurlarly known as Shobhit University, Meerut)."
  },
  {
    "id": "14",
    "date": "January, 2009",
    "title": "First Convocation of Shobhit University, Meerut",
    "description": "In the first Convocation Doctor of Arts (Honoris Causa) was confered upon Shri Kuppahalli Sitaramayya Sudarshanji, the then Sarsanghchalak of RSS in recognition of his lifetime contribution to nation-building and social service."
  },
  {
    "id": "15",
    "date": "July, 2012",
    "title": "Establishment of Shobhit University, Uttar Pradesh at Gangoh District Saharanpur",
    "description": "Shobhit University, Gangoh, Saharanpur has been notified by the Government of Uttar Pradesh vide Shobhit Vishwavidhaylaya, Uttar Pradesh Adhiniyam, 2011 (U.P. Act No.3 of 2012)."
  },
  {
    "id": "16",
    "date": "July, 2013",
    "title": "Launch of School of Law and Constitutional Studies (SLCS)",
    "description": "To impart quality legal education, SLCS has been established at Shobhit University, Meerut and Shobhit University, Gangoh simultaneously."
  },
  {
    "id": "17",
    "date": "December, 2013",
    "title": "Establishment of Microsoft Innovation Center at Shobhit University, Meerut",
    "description": "Microsoft Innovation Center ( MIC ) is a state of art technology facilities for collaboration on innovative research, technology or software solutions, involving a combination of government, academic and industry participants. Globally around 120 MICs have been established by Microsoft."
  },
  {
    "id": "18",
    "date": "July, 2014",
    "title": "Establishment of Kunwar Shekhar Vijendra Ayurved Medical College and Research Centre",
    "description": "To impart quality education in Ayurveda, KSVAMC&RC has been established at Shobhit University, Gangoh."
  },
  {
    "id": "19",
    "date": "November, 2014",
    "title": "Sixth Convocation of Shobhit University, Meerut",
    "description": "Shri Ram Naik Ji, H.E.The Governor of Uttar Pradesh was the Chief Guest of Sixth Convocation of the University."
  },
  {
    "id": "20",
    "date": "April, 2015",
    "title": "Formal Inauguration of School of Law and Constitutional Studies (SLCS)",
    "description": "Shri Keshari Nath Tripathi Ji, H.E. the Governor of West Bengal formally inaugurated the new building of SLCS, Shobhit University, Meerut."
  },
  {
    "id": "21",
    "date": "July, 2015",
    "title": "Launch of School of Education",
    "description": "To impart quality teacher's education, School of Education has been established at Shobhit University, Meerut and Shobhit University, Gangoh simultaneously."
  },
  {
    "id": "22",
    "date": "September, 2015",
    "title": "CICON 2015 and launch of Digital india Initiative",
    "description": "Shri Kalraj Mishra, Hon'ble Union Minister for Micro, Small and Medium Enterprises, Govt. of India inaugurated the 5th National Conference on Bridging the Development Gaps in Human Resources for “Digital India” and “Make in India” Programs."
  },
  {
    "id": "23",
    "date": "November, 2015",
    "title": "NAAC Accreditation of Shobhit University, Meerut",
    "description": "National Assessment and Accreditation Council (NAAC) has accredited Shobhit University, Meerut with grade indicator 'B' and performance descriptor 'GOOD' in its 71st meeting of Executive Committee on 16th November, 2015."
  },
  {
    "id": "24",
    "date": "January, 2016",
    "title": "Establishment of Kunwar Shekhar Vijendra Medical College of Naturopathy and Yogic Sciences, Gangoh",
    "description": "To impart quality education in Naturopathy and Yoga, KSVMCNYS has been established at Shobhit University, Gangoh."
  },
  {
    "id": "25",
    "date": "Not Specified", // The date was missing in the original text
    "title": "First Convocation of Shobhit University, Gangoh",
    "description": "Shri Ram Naik Ji, H.E.The Governor of Uttar Pradesh was the Chief Guest of First Convocation of the University."
  }
];

// This is a sub-component to render each milestone item.
// You can also define this inline within the FlatList's renderItem if preferred.
const MilestoneItem = ({ date, title, description }) => (
  <View style={styles.itemContainer}>
    <View style={styles.timelineMarkerContainer}>
      <View style={styles.timelineMarker} />
      <View style={styles.timelineLine} />
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.titleText}>{title}</Text>
      {description && <Text style={styles.descriptionText}>{description}</Text>}
    </View>
  </View>
);

// Main component that displays the list of milestones
const HistoricalMilestone = () => {
  const renderItem = ({ item }) => (
    <MilestoneItem
      date={item.date}
      title={item.title}
      description={item.description}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Our Journey: Milestones 🗓️</Text>
      </View>
      <FlatList
        data={milestonesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContentContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f8', // Light background for the whole screen
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  listContentContainer: {
    paddingHorizontal: 10, // Horizontal padding for the list items
    paddingTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff', // White background for each item
    borderRadius: 8,
    shadowColor: '#000', // Shadow for a card-like effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android shadow
  },
  timelineMarkerContainer: {
    alignItems: 'center',
    marginRight: 15,
    width: 20, // Fixed width for the marker and line container
  },
  timelineMarker: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#007AFF', // A distinct color for the marker
    zIndex: 1, // Ensure marker is above the line
  },
  timelineLine: {
    flex: 1, // Make the line fill the remaining space vertically
    width: 2,
    backgroundColor: '#007AFF', // Line color same as marker
    marginTop: 4, // Start line slightly below the marker
  },
  contentContainer: {
    flex: 1,
  },
  dateText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 5,
    fontWeight: '600',
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 7,
  },
  descriptionText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});

export default HistoricalMilestone;