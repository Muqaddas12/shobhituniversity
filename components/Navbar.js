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
  Animated, 
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useRouter } from 'expo-router';
const { width, height } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.75; 


const menuItems = [
  { id: '1', title: 'Home', icon: 'home-outline', screen: '/' },
  { id: '2', title: 'About University', icon: 'information-circle-outline', screen: 'About' },
  { id: '3', title: 'Admissions', icon: 'school-outline', screen: 'AdmissionsScreen' },
  { id: '4', title: 'Programs Offered', icon: 'library-outline', screen: 'Programs' },
  { id: '5', title: 'Campus Life', icon: 'leaf-outline', screen: 'CampusLifeScreen' },
  { id: '6', title: 'Latest News', icon: 'newspaper-outline', screen: 'NewsScreen' },
  { id: '7', title: 'Contact Us', icon: 'call-outline', screen: 'Contactus' },
  { id: '8', title: 'Settings', icon: 'settings-outline', screen: 'SettingsScreen' },
];

export default function Navbar(props) { 
const router=useRouter()
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const slideAnimation = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current; 

  useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: isSidebarVisible ? 0 : -SIDEBAR_WIDTH, 
      duration: 250, 
      useNativeDriver: true, 
    }).start();
  }, [isSidebarVisible, slideAnimation]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleNavigation = (screenName) => {
    toggleSidebar();
    router.push(`${screenName}`)
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaHeader}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.headerIconContainer}>
            <Icon name="menu" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{props.name}</Text>
          <View style={styles.headerIconContainer} />
        </View>
      </SafeAreaView>
      <Modal
        transparent={true}
        visible={isSidebarVisible}
        onRequestClose={toggleSidebar} 
        animationType="none" 
      >
        <Pressable style={styles.modalOverlay} onPress={toggleSidebar}>
          <Animated.View
            style={[
              styles.sidebar,
              { transform: [{ translateX: slideAnimation }] },
            ]}
           
            onStartShouldSetResponder={() => true}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            <SafeAreaView style={styles.sidebarSafeArea}>
              <View style={styles.sidebarHeader}>
                <Text style={styles.sidebarTitle}>Shobhit University</Text>
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
    backgroundColor: '#2563EB',

    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    
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
    alignItems:'center',
    alignContent:'center',
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