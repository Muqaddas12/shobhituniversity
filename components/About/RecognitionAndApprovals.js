import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Image // Import Image component
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Or any icon library you prefer

// --- Data for the component ---
// IMPORTANT: Replace 'YOUR_LINK_HERE' with actual URLs.
// Replace icon names with more appropriate ones or use actual image paths for a better look.
const recognitionsData = [
  {
    id: 'ugc',
    title: 'University Grants Commission (UGC)',
    iconName: 'university', // Placeholder icon
    imagePath:  {uri:'https://sug.ac.in/images/recognition-approvals/logo-recognition01.png'}, // Example: require('./assets/ugc_logo.png'),
    description: 'Shobhit University, Gangoh, and Shobhit University, Meerut, are Government Recognised universities. The Degrees awarded by them are recognised by the University Grants Commission (UGC).',
    links: [
      { text: 'UGC Recognition - Shobhit University, Gangoh', url: 'YOUR_UGC_GANGOH_LINK_HERE' }
      // Add link for Meerut if available and different
    ]
  },
  {
    id: 'aicte',
    title: 'All India Council for Technical Education (AICTE)',
    iconName: 'microchip',
    imagePath: {uri:'https://sug.ac.in/images/recognition-approvals/logo-recognition03.png'}, // Example: require('./assets/aicte_logo.png'),
    description: 'As per law, Universities do not require AICTE approval. Only institutions affiliated with Universities require approval. Shobhit University, being a Bonafide University, does not require AICTE approval. This standing of law is notified in the case of Bharathidasan University Vs AICTE.',
    links: [
      { text: 'View Notification (Bharathidasan University Vs AICTE)', url: 'YOUR_AICTE_CASE_LINK_HERE' }
    ]
  },
  {
    id: 'aiu',
    title: 'Association of Indian Universities (AIU)',
    iconName: 'users', // Changed from 'users-class' for broader compatibility
    imagePath: {uri:'https://sug.ac.in/images/recognition-approvals/logo-recognition10.png'}, // Example: require('./assets/aiu_logo.png'),
    description: 'Shobhit University, Meerut (formerly Shobhit Institute of Engineering & Technology, Meerut) is a member of the Association of Indian Universities (AIU).',
    links: []
  },
  {
    id: 'ncism',
    title: 'National Commission For Indian System Of Medicine (NCISM)',
    iconName: 'briefcase-medical',
    imagePath: {uri:'https://sug.ac.in/images/recognition-approvals/logo-recognition08.png'}, // Example: require('./assets/ncism_logo.png'),
    description: 'The Ayurveda Program (BAMS) at Shobhit University, Gangoh, is accredited by the Ministry of AYUSH and the National Commission For Indian System Of Medicine.',
    links: [
      { text: 'NCISM Recognition - Shobhit University, Gangoh', url: 'YOUR_NCISM_GANGOH_LINK_HERE' }
    ]
  },
  {
    id: 'ncte',
    title: 'National Council for Teacher Education (NCTE)',
    iconName: 'chalkboard-teacher',
    imagePath: {uri:'https://sug.ac.in/images/recognition-approvals/logo-recognition05.png'}, // Example: require('./assets/ncte_logo.png'),
    description: 'Educational Programmes offered by Shobhit University are Recognised by the National Council for Teacher Education.',
    links: [
      { text: 'B.Ed Approval Details', url: 'YOUR_BED_APPROVAL_LINK_HERE' },
      { text: 'D.El.Ed. (BTC) Approval Details', url: 'YOUR_BTC_APPROVAL_LINK_HERE' },
      { text: 'Visit NCTE Website', url: 'YOUR_NCTE_WEBSITE_LINK_HERE' }
    ]
  },
  {
    id: 'bci',
    title: 'Bar Council of India (BCI)',
    iconName: 'gavel',
    imagePath: {uri:'https://sug.ac.in/images/recognition-approvals/logo-recognition09.png'}, // Example: require('./assets/bci_logo.png'),
    description: 'Law Programmes offered by Shobhit University are Recognised by the Bar Council of India.',
    links: [] // Add specific approval letter link if available
  },
  {
    id: 'pci',
    title: 'Pharmacy Council of India (PCI)',
    iconName: 'pills',
    imagePath: {uri:'https://sug.ac.in/images/recognition-approvals/logo-recognition02.png'}, // Example: require('./assets/pci_logo.png'),
    description: 'Pharmacy Programmes at Shobhit University are accredited by the Pharmacy Council of India.',
    links: [] // Add specific approval letter link if available
  },
  {
    id: 'ccryn',
    title: 'Central Council for Research in Yoga & Naturopathy (CCRYN)',
    iconName: 'spa',
    imagePath: {uri:'https://sug.ac.in/images/recognition-approvals/logo-recognition13.png'}, // Example: require('./assets/ccryn_logo.png'),
    description: 'The Bachelor of Naturopathy and Yogic Sciences (BNYS) Program is recognized under the Central Council for Research in Yoga & Naturopathy (CCRYN), Ministry of AYUSH, Government of India.',
    links: [
      { text: 'Visit CCRYN Website', url: 'YOUR_CCRYN_LINK_HERE' }
    ]
  },
  {
    id: 'nats',
    title: 'National Apprenticeship Training Scheme (NATS)',
    iconName: 'tools',
    imagePath: {uri:'https://sug.ac.in/images/recognition-approvals/logo-recognition14.png'}, // Example: require('./assets/nats_logo.png'),
    description: 'Shobhit University participates in the National Apprenticeship Training Scheme (NATS), Instituted by Boards of Apprenticeship Training / Practical Training, Ministry of Education (formerly HRD), Govt of India.',
    links: []
  },
  {
    id: 'boat',
    title: 'Board of Apprenticeship Training (BOAT - NR, Kanpur)',
    iconName: 'hard-hat',
    imagePath: {uri:'https://sug.ac.in/images/recognition-approvals/logo-recognition15.png'}, // Example: require('./assets/boat_logo.png'),
    description: 'Shobhit University is approved by the Board of Apprenticeship Training (Northern Region), Kanpur, Ministry of Education (formerly HRD), Dept of Higher Education, Govt of India.',
    links: []
  }
];
// --- End of Data ---

// Helper function to open links
const openUrl = async (url) => {
  if (!url || url === 'YOUR_LINK_HERE') { // Prevent opening placeholder links
    console.log("Placeholder URL, not opening.");
    // Alert.alert("Info", "Link not available yet.");
    return;
  }
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log(`Don't know how to open this URL: ${url}`);
    // Alert.alert("Error", `Could not open the link: ${url}`);
  }
};

// Component for individual recognition items (One Image/Icon then Text)
const RecognitionItem = ({ title, iconName, imagePath, description, links }) => (
  <View style={styles.itemContainer}>
    {/* Image or Icon - Displayed prominently at the top */}
    <View style={styles.itemImageContainer}>
      {imagePath ? (
        <Image source={imagePath} style={styles.logoImage} />
      ) : (
        <Icon name={iconName || "certificate"} size={50} color="#005A9C" />
      )}
    </View>

    {/* Text Content - Title, Description, Links */}
    <Text style={styles.itemTitle}>{title}</Text>
    <Text style={styles.itemDescription}>{description}</Text>
    {links && links.length > 0 && (
      <View style={styles.linksContainer}>
        {links.map((link, index) => (
          <TouchableOpacity key={index} onPress={() => openUrl(link.url)}>
            <Text style={styles.linkText}>{link.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}
  </View>
);

// Main Component
const RecognitionsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainTitle}>Recognition and Approvals</Text>
        <Text style={styles.subTitle}>
          Wherever recognition by Statutory Bodies is required or mandatory, Shobhit University has obtained the recognition/approval. The following statutory bodies have recognized Shobhit University:
        </Text>

        {recognitionsData.map(item => (
          <RecognitionItem
            key={item.id}
            title={item.title}
            iconName={item.iconName}
            imagePath={item.imagePath} // Pass this to RecognitionItem
            description={item.description}
            links={item.links}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#34495e',
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
    lineHeight: 23,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center', // Center content like image/icon
  },
  itemImageContainer: {
    marginBottom: 18,
    padding: 10,
    backgroundColor: '#E9F5FF', // A light background for the icon/image placeholder
    borderRadius: 15, // Rounded corners for the image container
    minHeight: 70, // Ensure a minimum height for visual consistency
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto', // Adjust width automatically
    minWidth: 80,   // Minimum width for smaller icons
  },
  logoImage: {
    width: 100, // Adjust as needed for actual logos
    height: 70, // Adjust as needed
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333', // Darker color for title
    textAlign: 'center',
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 15,
    lineHeight: 23,
    color: '#555555',
    textAlign: 'center', // Center description if it looks good, or 'left'
    marginBottom: 15,
  },
  linksContainer: {
    marginTop: 10,
    alignItems: 'center', // Center links if they are short
  },
  linkText: {
    fontSize: 15,
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default RecognitionsScreen;