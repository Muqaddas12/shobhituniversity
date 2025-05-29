import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Icon name="home-outline" size={24} color="#fff" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <Icon name="school-outline" size={24} color="#fff" />
        <Text style={styles.label}>Programs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <Icon name="chatbubbles-outline" size={24} color="#fff" />
        <Text style={styles.label}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <Icon name="person-outline" size={24} color="#fff" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingVertical: 10,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  tab: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
});

export default BottomBar;
