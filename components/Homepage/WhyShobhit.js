import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  Image,
  Platform, 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');


const YOUTUBE_VIDEO_ID = 'cuxl3sUNS_E'; 

export default function WhyShobhitSection() {
  const [modalVisible, setModalVisible] = useState(false);

  
  const thumbnailUrl = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;

 
  const videoUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&playsinline=1&modestbranding=1&rel=0`;

  return (
    <View style={styles.container}>
      {/* Thumbnail with Play Button */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}
        style={styles.thumbnailTouchable}
      >
        <View style={styles.thumbnailContainer}>
          <Image
            source={{ uri: thumbnailUrl }}
            style={styles.thumbnail}
           
          />
          <View style={styles.playButtonOverlay}>
            <Ionicons name="play-circle-outline" size={60} color="rgba(255, 255, 255, 0.9)" />
          </View>
        </View>
      </TouchableOpacity>

      {/* Text Section */}
      <View >
        <Text style={styles.title}>Why Shobhit?</Text>
        <Text style={styles.description}>
          Some universities are rooted in the past. At Shobhit University, we
          look to the future and believe in innovation; a vibrant,
          forward-thinking University with a reputation for high-achievers,
          students, academics and researchers.
        </Text>
      </View>

      {/* Video Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)} 
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Ionicons name="close-circle" size={36} color="rgba(255,255,255,0.8)" />
          </TouchableOpacity>
          <WebView
            source={{ uri: videoUrl }}
            style={styles.video}
            javaScriptEnabled
            domStorageEnabled
            allowsFullscreenVideo 
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 backgroundColor: '#f7f7f7',
    borderRadius: 12,
    marginVertical: 16,
    padding: 10, 
    overflow: 'hidden', 
  },
  thumbnailTouchable: {
    marginBottom: 16,
  },
  thumbnailContainer: {
    position: 'relative', 
    backgroundColor: '#1c1c1c', 
    borderRadius: 12, 
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 12,
  },
  playButtonOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 21, 
  },
 
  modalContent: {
    flex: 1,
    backgroundColor: 'black', 
  },
  video: {
    flex: 1, 
    backgroundColor: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 45 : 20, 
    right: 15,
    zIndex: 10,
    padding: 5,
  
  },
});