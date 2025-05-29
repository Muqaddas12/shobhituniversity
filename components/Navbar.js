import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
  Animated, // Import Animated
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming Ionicons are installed

const { width, height } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.75; // Sidebar width (75% of screen width)

// Define menu items with icons and target screen names
const menuItems = [
  { id: '1', title: 'Home', icon: 'home-outline', screen: 'HomeScreen' },
  { id: '2', title: 'About University', icon: 'information-circle-outline', screen: 'AboutScreen' },
  { id: '3', title: 'Admissions', icon: 'school-outline', screen: 'AdmissionsScreen' },
  { id: '4', title: 'Programs Offered', icon: 'library-outline', screen: 'ProgramsScreen' },
  { id: '5', title: 'Campus Life', icon: 'leaf-outline', screen: 'CampusLifeScreen' },
  { id: '6', title: 'Latest News', icon: 'newspaper-outline', screen: 'NewsScreen' },
  { id: '7', title: 'Contact Us', icon: 'call-outline', screen: 'ContactScreen' },
  { id: '8', title: 'Settings', icon: 'settings-outline', screen: 'SettingsScreen' },
];

export default function Navbar({ navigation }) { // Accept navigation prop if using React Navigation
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const slideAnimation = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current; // Initial position off-screen

  useEffect(() => {
    // Animate sidebar based on visibility state
    Animated.timing(slideAnimation, {
      toValue: isSidebarVisible ? 0 : -SIDEBAR_WIDTH, // Target position (0 for visible, -SIDEBAR_WIDTH for hidden)
      duration: 250, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for better performance (only for transform, opacity)
    }).start();
  }, [isSidebarVisible, slideAnimation]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleNavigation = (screenName) => {
    toggleSidebar(); // Close the sidebar
    // Replace with actual navigation logic:
    // if (navigation && typeof navigation.navigate === 'function') {
    //   navigation.navigate(screenName);
    // } else {
    console.log(`Maps to: ${screenName}`);
    // }
  };

  return (
    <>
      {/* Header Section */}
      <SafeAreaView style={styles.safeAreaHeader}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.headerIconContainer}>
            <Icon name="menu" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Shobhit University</Text>
          {/* Spacer to balance the title, or for another icon */}
          <View style={styles.headerIconContainer} />
        </View>
      </SafeAreaView>

      {/* Sidebar Modal */}
      <Modal
        transparent={true}
        visible={isSidebarVisible}
        onRequestClose={toggleSidebar} // For Android back button
        animationType="none" // We handle animation manually with Animated.View
      >
        <Pressable style={styles.modalOverlay} onPress={toggleSidebar}>
          <Animated.View
            style={[
              styles.sidebar,
              { transform: [{ translateX: slideAnimation }] },
            ]}
            // Prevent press on sidebar from closing it via overlay
            onStartShouldSetResponder={() => true}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            <SafeAreaView style={styles.sidebarSafeArea}>
              <View style={styles.sidebarHeader}>
                <Text style={styles.sidebarTitle}>Navigation Menu</Text>
                <TouchableOpacity onPress={toggleSidebar} style={styles.headerIconContainer}>
                  <Icon name="close" size={30} color="white" />
                </TouchableOpacity>
              </View>

              {/* Menu Items */}
              <View style={styles.sidebarContent}>
                {menuItems.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.menuItem}
                    onPress={() => handleNavigation(item.screen)}
                  >
                    <Icon name={item.icon} size={22} color="#E5E7EB" style={styles.menuItemIcon} />
                    <Text style={styles.menuText}>{item.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Sidebar Footer (Optional) */}
              <View style={styles.sidebarFooter}>
                <Text style={styles.sidebarFooterText}>
                  Shobhit University App v1.0
                </Text>
              </View>
            </SafeAreaView>
          </Animated.View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  // Header Styles
  safeAreaHeader: {
    width:width,
    backgroundColor: '#2563EB', // Blue theme color for status bar area
    padding:0,
    marginLeft:-height*.022,
    marginTop:-height*.020,
    marginBottom:10,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'android' ? 12 : 10, // Adjust padding for platform
    backgroundColor: '#2563EB', // Header background color
    height: Platform.OS === 'android' ? 56 : 44, // Standard header height
  },
  headerIconContainer: {
    padding: 4, // Touch area for icons
    width: 40, // Fixed width for icon containers to help with alignment
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Modal and Overlay Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
  },

  // Sidebar Styles
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0, // Initial position, animated via transform
    width: SIDEBAR_WIDTH,
    height: '100%',
    backgroundColor: '#1F2937', // Dark background for sidebar (Tailwind's gray-800)
    zIndex: 1000, // Ensure sidebar is above other content
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevation for Android shadow
  },
  sidebarSafeArea: {
    flex: 1,
    backgroundColor: 'transparent', // Sidebar itself has the background color
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#374151', // Tailwind's gray-700
  },
  sidebarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sidebarContent: {
    flex: 1, // Takes remaining space
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    // marginBottom: 4, // Spacing between items
    borderRadius: 6,
  },
  menuItemIcon: {
    marginRight: 16,
  },
  menuText: {
    color: '#D1D5DB', // Tailwind's gray-300
    fontSize: 16,
    fontWeight: '500',
  },
  sidebarFooter: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#374151', // Tailwind's gray-700
    alignItems: 'center',
  },
  sidebarFooterText: {
    color: '#6B7280', // Tailwind's gray-500
    fontSize: 12,
  },
});