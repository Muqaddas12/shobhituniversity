import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Image // If you want a header image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Using FontAwesome 5

// --- Data for the Alumni Network Page ---
const alumniNetworkData = {
  headerTitle: "Shobhit University / NICE Society Alumni Network",
  // You might want a header image here:
  // headerImage: require('./assets/alumni_banner.png'),
  welcomeMessages: [
    "No matter how many years, months or even weeks it has been since you were a student, this is your chance to reconnect with other former friends and get reacquainted with your Alma mater.",
    "We owe our success to our students – present and past – and appreciate all that you contributed as a former member of our team. That's why we've created this network as a valuable resource for you.",
    "As a member, you will have the opportunity to renew old friendships, establish new ones, expand your professional network, and have access to events, news, and exciting career prospects.",
    "We hope this is the continuation of a lifelong relationship with you. We appreciate the many contributions that our alumni have made to University's growth and success. We created this network as a way for you to stay connected with us and the many friends that you made during your time here. This is your resource and we want you to take advantage of it."
  ],
  partnershipSection: {
    title: "A Special Invitation to Partner",
    quote: "“You're selected.\" Remember that day?",
    text: "As an alumnus, if you'd like to experience that feeling again, we have an offer for you. At Shobhit University – Centre for Professional Development we’re interested in partnering with you on innovative ways to keep improving the professional lives of the existing Shobhitians."
  },
  aboutNetwork: {
    title: "About the Alumni Network",
    icon: "users-cog",
    text: "The Alumni Network is a nonprofit network developed by alumni to help former students stay connected. Our mission is to share ideas, talents and resources with each other and with our communities. We will donate any profits to charitable groups around the world. We are not formally connected with the University, but they are supportive of our efforts."
  },
  benefitsSection: {
    title: "Alumni Benefits & Services",
    icon: "gift",
    intro: "Your affiliation with your alma mater affords you many personal benefits, and as an alumnus you can also access valuable services offered exclusively to you by our affinity partners.",
    specificBenefits: [
      {
        id: 'stay',
        benefitIcon: 'home',
        benefitTitle: "Stay With Us",
        description: "If you are travelling to a city where Shobhit University has its facility, you can stay free of cost at the campus."
      },
      {
        id: 'business_centre',
        benefitIcon: 'briefcase',
        benefitTitle: "Use the Business Centre",
        description: "If you are travelling to Delhi, you can use the Business Centre Facility at the Corporate Office of the organization at University Tower, Mayur Vihar Phase II, Delhi -91, free of cost to meet a business colleague or even just to check your mail."
      }
    ],
    contactIntro: "To avail these benefits, please contact:",
    contactEmail: "alumni@shobhituniversity.ac.in",
    contactNote: "Please contact in advance (preferably 10 working days) with your Name, Batch, and College information to find availability and confirmation."
  },
  futureAndSuggestions: {
    title: "More to Come & Your Suggestions",
    icon: "lightbulb",
    text: "There are lots of other alumni benefits which are currently under discussion. Please revisit this page later to know more about them. If you have any questions or suggestions please write to us.",
    contactEmail: "alumni@shobhituniversity.ac.in"
  },
  photoGallery: {
    title: "Relive the Memories",
    icon: "images",
    text: "Maybe you will love to see the photo gallery of some alumni reunions",
    linkText: "Click here to view gallery",
    // IMPORTANT: Replace with your actual photo gallery URL
    linkUrl: "YOUR_ALUMNI_PHOTO_GALLERY_LINK_HERE"
  }
};
// --- End of Data ---

// Helper function to open links or email
const handlePress = async (url, isEmail = false) => {
  const Href = isEmail ? `mailto:${url}` : url;
  if (url === 'YOUR_ALUMNI_PHOTO_GALLERY_LINK_HERE' && !isEmail) {
      console.log("Placeholder URL for photo gallery. Please update.");
      // Alert.alert("Info", "Photo gallery link is not yet configured.");
      return;
  }
  try {
    const supported = await Linking.canOpenURL(Href);
    if (supported) {
      await Linking.openURL(Href);
    } else {
      console.log(`Don't know how to open this URL: ${Href}`);
      // Alert.alert("Error", "Could not perform this action.");
    }
  } catch (error) {
    console.error("An error occurred", error);
    // Alert.alert("Error", "An error occurred while trying to open the link.");
  }
};


// Main Component
const AlumniNetworkScreen = () => {
  const {
    headerTitle,
    // headerImage,
    welcomeMessages,
    partnershipSection,
    aboutNetwork,
    benefitsSection,
    futureAndSuggestions,
    photoGallery
  } = alumniNetworkData;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Optional Header Image */}
        {/* {headerImage && <Image source={headerImage} style={styles.headerImage} />} */}

        <Text style={styles.mainTitle}>{headerTitle}</Text>

        <View style={styles.sectionCard}>
          {welcomeMessages.map((msg, index) => (
            <Text key={index} style={styles.paragraph}>{msg}</Text>
          ))}
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>{partnershipSection.title}</Text>
          <Text style={styles.quoteText}>{partnershipSection.quote}</Text>
          <Text style={styles.paragraph}>{partnershipSection.text}</Text>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderWithIcon}>
            <Icon name={aboutNetwork.icon} size={22} color="#3498DB" style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>{aboutNetwork.title}</Text>
          </View>
          <Text style={styles.paragraph}>{aboutNetwork.text}</Text>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderWithIcon}>
            <Icon name={benefitsSection.icon} size={22} color="#2ECC71" style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>{benefitsSection.title}</Text>
          </View>
          <Text style={styles.paragraph}>{benefitsSection.intro}</Text>
          {benefitsSection.specificBenefits.map(benefit => (
            <View key={benefit.id} style={styles.benefitItem}>
              <Icon name={benefit.benefitIcon} size={20} color="#555" style={styles.benefitIcon} />
              <View style={styles.benefitTextContainer}>
                <Text style={styles.benefitTitle}>{benefit.benefitTitle}</Text>
                <Text style={styles.paragraphSmall}>{benefit.description}</Text>
              </View>
            </View>
          ))}
          <Text style={styles.paragraphBold}>{benefitsSection.contactIntro}</Text>
          <TouchableOpacity onPress={() => handlePress(benefitsSection.contactEmail, true)}>
            <Text style={styles.emailLink}>{benefitsSection.contactEmail}</Text>
          </TouchableOpacity>
          <Text style={styles.noteText}>{benefitsSection.contactNote}</Text>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderWithIcon}>
            <Icon name={futureAndSuggestions.icon} size={22} color="#F39C12" style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>{futureAndSuggestions.title}</Text>
          </View>
          <Text style={styles.paragraph}>{futureAndSuggestions.text}</Text>
          <TouchableOpacity onPress={() => handlePress(futureAndSuggestions.contactEmail, true)}>
            <Text style={styles.emailLink}>{futureAndSuggestions.contactEmail}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderWithIcon}>
             <Icon name={photoGallery.icon} size={22} color="#9B59B6" style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>{photoGallery.title}</Text>
          </View>
          <Text style={styles.paragraph}>{photoGallery.text} </Text>
          <TouchableOpacity onPress={() => handlePress(photoGallery.linkUrl)}>
            <Text style={styles.webLink}>{photoGallery.linkText}</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F4F7', // Light background for the screen
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  // headerImage: {
  //   width: '100%',
  //   height: 150, // Adjust as needed
  //   resizeMode: 'cover',
  //   marginBottom: 20,
  //   borderRadius: 10,
  // },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 25,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionHeaderWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionIcon: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600', // Semi-bold
    color: '#34495E',
    marginBottom: 10, // If no icon, this gives space
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 12,
  },
  paragraphSmall: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
    marginBottom: 8,
  },
  paragraphBold: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  quoteText: {
    fontSize: 17,
    fontStyle: 'italic',
    color: '#2980B9',
    textAlign: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  benefitIcon: {
    marginRight: 15,
    marginTop: 3,
    color: '#3498DB', // Benefit icon color
  },
  benefitTextContainer: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  emailLink: {
    fontSize: 16,
    color: '#3498DB', // Email link color
    textDecorationLine: 'underline',
    marginVertical: 8,
  },
  webLink: {
    fontSize: 16,
    color: '#2ECC71', // Web link color
    textDecorationLine: 'underline',
    marginVertical: 8,
    fontWeight: 'bold',
  },
  noteText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#7F8C8D',
    marginTop: 10,
  },
});

export default AlumniNetworkScreen;