import React from 'react';
import { StyleSheet,  ScrollView,  Dimensions,SafeAreaView } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
import Navbar from '../components/Navbar';
import BottomBar from '../components/Bottom';
import TitleSection from '../components/ContactUs.js/TitleSection';
import UniversityInfo from '../components/ContactUs.js/UniversityInfo';
import OfficeSection from '../components/ContactUs.js/OfficeSection';
import MapSection from '../components/ContactUs.js/MapSection';
import { StatusBar } from 'expo-status-bar';
import QuerySection from '../components/ContactUs.js/QuerySection';

const {width,height} = Dimensions.get('window');

export default function ContactScreen() {

  return (
<>
<SafeAreaView style={{flex:1}}>
      <Navbar/>
   <ScrollView style={styles.container}>
  
     <TitleSection/>
     <UniversityInfo/>
<MapSection/>
<QuerySection/>
     <OfficeSection/>
     
    </ScrollView>
  <StatusBar style="auto" />
      <BottomBar/>

</SafeAreaView></>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',

flex:1,
   
  },

});
