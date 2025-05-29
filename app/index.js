// Import necessary components from 'expo-status-bar' and 'react-native'
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView, // Ensures content is within the safe area boundaries of a device
  StyleSheet,   // For creating style objects
  // ActivityIndicator, // Currently not used directly in App.js, but was present in previous versions
  View,           // A fundamental component for building UI, acts as a container
  Dimensions,     // Provides device screen dimensions
  // Image,          // Not used directly in App.js, components might use it
  // TouchableOpacity, // Not used directly in App.js
  // Linking,        // Not used directly in App.js
  // Text,           // Not used directly in App.js
  ScrollView,     // Provides a scrollable container
} from 'react-native';
import React, { useState } from 'react'; // Import React and useState hook
// import { WebView } from 'react-native-webview'; // WebView is commented out in the current layout

// Import custom components for the UI
import Navbar from '../components/Navbar'; // Navigation bar component
import ImageSlideshow from '../components/ImageSlide'; // Image slideshow component
import WhyShobhitSection from '../components/Homepage/WhyShobhit'; // "Why Shobhit?" section component
import CampusAndApprovalsSection from '../components/Homepage/CampusAndApprovalsSection'; // Campus and approvals section
import AboutUniversity from '../components/Homepage/AboutUniversity'; // About University section
import SchoolsAndCentres from '../components/Homepage/SchoolAndCentres'; // Schools and Centres section
import LatestNews from '../components/Homepage/LatestNews'; // Latest News section
import Footer from '../components/Homepage/Footer'; // Footer component
import ShobhitPrograms from '../components/Homepage/ShobhitPrograms'; // Shobhit Programs section
import BottomBar from '../components/Bottom';

// Get screen width and height for responsive styling
const { width, height } = Dimensions.get('window');

// Main App component
export default function App() {
  // State for managing loading status (currently not directly used to show an ActivityIndicator in App.js)
  // const [loading, setLoading] = useState(true); // setLoading was used with WebView previously

  return (
    // SafeAreaView ensures content is displayed correctly on devices with notches or home indicators
    <SafeAreaView style={styles.container}>
    

      {/* Main content area, using View with flex: 1 to take available space */}
      <View style={{ flex: 1 }}>
        {/* Scrollable section for the main page content */}
        {/* The ScrollView itself is set to flex: 1 to allow it to take space and scroll */}
        <ScrollView contentContainerStyle={styles.scroll} style={{ flex: 1 }}>
            {/* Navigation Bar at the top of the screen */}
      <Navbar />
          {/* Image slideshow at the top of the content */}
          <ImageSlideshow />

          {/* Section displaying Shobhit University programs */}
          <ShobhitPrograms />

          {/* Section with information about the university */}
          <AboutUniversity />

          {/* Section detailing various schools and centres within the university */}
          <SchoolsAndCentres />

          {/* Section for the latest news and updates */}
          <LatestNews />

          {/* Section explaining "Why choose Shobhit University?" */}
          <WhyShobhitSection />

          {/* Section about campus facilities and university approvals */}
          <CampusAndApprovalsSection />

          {/* Footer section at the end of the scrollable content */}
          <Footer />
        </ScrollView>

        {/* WebView section was here previously, now commented out or removed */}
        {/*
          If a WebView or a bottom fixed section is needed, it would go here.
          Example:
          <View style={styles.fixedBottomSection}>
            <Text>This is a fixed bottom section</Text>
          </View>
          or the WebView:
          {loading && ( // Show loading indicator if WebView is loading
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#007bff" />
            </View>
          )}
          <WebView
            source={{ uri: 'https://sug.ac.in' }}
            style={{ height: height * 0.4 }} // Example fixed height
            // injectedJavaScript={injectedJS} // JavaScript to inject into WebView
            javaScriptEnabled
            domStorageEnabled
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
          />
        */}
      </View>

      {/* StatusBar component to style the device's status bar (e.g., time, battery) */}
      <StatusBar style="auto" />
      <BottomBar/>
    </SafeAreaView>
  );
}

// StyleSheet for styling the components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen height
    // backgroundColor: '#fff', // Default background color, often set on ScrollView or inner Views
  },
  scroll: {
    // Styling for the content *inside* the ScrollView
    padding: width * 0.04, // Responsive padding based on screen width
    backgroundColor: '#fff', // Background color for the scrollable content area
  },
  loading: {
    // Styles for the loading indicator (used if WebView or other async content is loading)
    position: 'absolute', // Position it over other content
    top: height / 2 - 25, // Center vertically
    left: width / 2 - 25,  // Center horizontally
    zIndex: 10, // Ensure it's above other elements
  },
  // Common card styling - these styles might be used by child components if passed as props
  // or if child components define their own similar styles.
  card: {
    backgroundColor: '#f9f9f9', // Light grey background for cards
    borderRadius: 12, // Rounded corners for cards
    padding: width * 0.04, // Responsive padding
    marginBottom: height * 0.02, // Margin at the bottom of cards
    elevation: 2, // Shadow for Android
    // For iOS shadow, you might add:
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
  },
  title: {
    // Common style for main titles within cards or sections
    fontSize: width * 0.05, // Responsive font size
    fontWeight: 'bold',
    color: '#000', // Black color for titles
    marginBottom: height * 0.01, // Margin below the title
  },
  subtitle: {
    // Common style for subtitles
    fontSize: width * 0.042,
    fontWeight: '600', // Semi-bold
    color: '#222', // Dark grey for subtitles
    marginVertical: height * 0.01, // Vertical margin
  },
  text: {
    // Common style for regular text content
    fontSize: width * 0.038,
    color: '#333', // Standard text color
    lineHeight: height * 0.025, // Line height for readability
  },
  bullet: {
    // Style for bullet points
    fontSize: width * 0.038,
    color: '#555', // Slightly lighter text color for bullets
    marginTop: height * 0.005,
  },
  link: {
    // Style for hyperlink text
    fontSize: width * 0.038,
    color: '#1e90ff', // Blue color for links
    marginTop: height * 0.01,
    textDecorationLine: 'underline', // Underline for links
  },
  image: {
    // Common style for images within sections (if not handled by specific components)
    width: '100%', // Make image take full width of its container
    height: height * 0.2, // Responsive height
    resizeMode: 'cover', // How the image should be resized
    borderRadius: 8, // Rounded corners for images
    marginBottom: height * 0.01, // Margin below images
  },
});