import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width,height } = Dimensions.get('window');

const Sidebar = () => {
    console.log(height)
  return (
    <View style={styles.sidebar}>
      <View style={styles.sidebarContent}>
        <Text style={styles.sidebarTitle}>Menu</Text>

        <TouchableOpacity style={styles.menuItem} onPress={() => alert('Home')}>
          <Text style={styles.menuText}>🏠 Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => alert('Profile')}>
          <Text style={styles.menuText}>👤 Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => alert('Logout')}>
          <Text style={styles.menuText}>🚪 Logout</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 sidebar: {
  position: 'absolute',
  top: 0,
  left: 0,
  width: width * 0.6, 
  height: height,
  backgroundColor: '#FFFFFF', // changed to white
  zIndex: 10,
  elevation: 5,
  paddingTop: 40,
},
  sidebarContent: {
    padding: 16,
  },
  sidebarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    marginBottom: 14,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
  closeBtn: {
    marginTop: 30,
    paddingVertical: 10,
  },
  closeText: {
    color: '#FF5C5C',
    fontSize: 16,
  },
});

export default Sidebar;
