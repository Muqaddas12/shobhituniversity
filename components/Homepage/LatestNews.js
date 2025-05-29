// components/LatestNews.js
import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LatestNews = () => {
  // Placeholder news items - replace with dynamic data or more current static items
  const newsItems = [
    {
      id: '1',
      title: 'Admissions Open 2025-26',
      description: 'Shobhit University announces the commencement of admissions for various Undergraduate, Postgraduate, and Doctoral programs for the academic session 2025-26.',
      link: 'https://admission.shobhituniversity.ac.in/',
      linkText: 'Apply Now ›',
    },
    {
      id: '2',
      title: 'International Day for Biological Diversity Celebrated',
      description: 'The School of Biotechnology and Life Sciences hosted an event to celebrate the International Day for Biological Diversity on May 22, 2025, featuring talks and activities.',
      link: 'https://www.shobhituniversity.ac.in/news-and-events.php', // General news page
      linkText: 'Read More ›',
    },
    {
      id: '3',
      title: 'Farewell "The Golden Star" for Senior Students',
      description: 'Junior students of the School of Biological Engineering & Sciences organized a memorable farewell party, "The Golden Star," for their seniors.',
      // Assuming no direct link, or link to a general news/gallery page
      link: 'https://www.shobhituniversity.ac.in/image-gallery.php',
      linkText: 'View Gallery ›',
    },
    {
      id: '4',
      title: 'CLAT 2025 Second Allotment List',
      description: 'The CLAT 2025 second allotment list for 5-year Integrated LLB (UG) courses is expected to be released on June 4, 2025. Candidates are advised to check the official website.',
      link: 'https://consortiumofnlus.ac.in/clat-2025/', // Official CLAT website
      linkText: 'Check CLAT Website ›',
    }
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.mainTitle}>Latest News & Events</Text>
      {newsItems.map((item) => (
        <View key={item.id} style={styles.newsItemContainer}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Text style={styles.newsDescription}>{item.description}</Text>
          {item.link && (
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
              <Text style={styles.link}>{item.linkText}</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: width * 0.04,
    marginBottom: height * 0.02,
    elevation: 2,
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 1 }, // For iOS shadow
    shadowOpacity: 0.2, // For iOS shadow
    shadowRadius: 1.41, // For iOS shadow
  },
  mainTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: height * 0.015,
  },
  newsItemContainer: {
    marginBottom: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: height * 0.015,
  },
  newsTitle: {
    fontSize: width * 0.042,
    fontWeight: '600', // Similar to subtitle
    color: '#222',
    marginBottom: height * 0.005,
  },
  newsDescription: {
    fontSize: width * 0.038,
    color: '#333',
    lineHeight: height * 0.023,
  },
  link: {
    fontSize: width * 0.038,
    color: '#1e90ff',
    marginTop: height * 0.01,
    textDecorationLine: 'underline',
  },
});

export default LatestNews;