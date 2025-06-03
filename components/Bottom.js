import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const BottomBar = () => {
  const router=useRouter()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={()=>router.push('/')}>
        <Icon name="home-outline" size={24} color="#fff" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={()=>router.push('Programs')}>
        <Icon name="school-outline" size={24} color="#fff" />
        <Text style={styles.label}>Programs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={()=>router.push('Contactus')}>
        <Icon name="chatbubbles-outline" size={24} color="#fff" />
        <Text style={styles.label}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={()=>router.push('About')}>
        <Icon name="person-outline" size={24} color="#fff" />
        <Text style={styles.label}>About</Text>
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
