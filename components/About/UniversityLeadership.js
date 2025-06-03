import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const UniversityLeadership = () => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://sug.ac.in/images/shobhit-kumar.jpg' }}
          style={styles.image}
        />
        <Text style={styles.name}>Dr. Shobhit Kumar</Text>
        <Text style={styles.title}>Chairman</Text>
        <Text style={styles.description}>
         Dr. Shobhit Kumar is the Chairman of Shobhit University and the Managing Trustee of NICE Society. He is a visionary social worker. He is involved in rural development, through providing employment oriented technical education and medical facilities to Below Poverty Line families & others in the rural areas where there was no facility of such nature was available since independence. By virtue of his vision of developing institutions and hospital in these areas a direct impact is achieved in generation of economic activities i.e. increase in standard of living and some people who have been migrated from their villages for search of job now they are coming back to see the more employment opportunities in their native villages.

Dr. Shobhit Kumar is also the Managing Trustee of Shri J.P. Mathur Charitable Trust.

The Trust is a social voluntary organisation serving nation through its various activities since its establishment, under the guidance of Shri Lal Krishna Advani Ji and Shri Arun Jaitley Ji along with other trustees.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://sug.ac.in/images/kunwar-shekhar-vijendra.png' }}
          style={styles.image}
        />
        <Text style={styles.name}>Kunwar Shekhar Vijendra</Text>
        <Text style={styles.title}>Co-Founder & Chancellor, Shobhit University</Text>
        <Text style={styles.description}>
         Kunwar Shekhar Vijendra is the Co-founder and Chancellor of Shobhit Deemed University, Meerut, and Shobhit University, Gangoh, Uttar Pradesh. Based in New Delhi, he is a prominent social entrepreneur and Chairman of the ASSOCHAM National Council on Education. He also serves as the Patron of the Centre for Education Growth & Research (CEGR).

Dedicated to empowering rural youth through education and skilling, he has been instrumental in establishing numerous educational, social, and health organizations over the past three decades, including two universities and an Ayurveda Medical College & Research Centre. His family Trust has also established a 200-bed Ayurveda hospital with a Yoga and Naturopathy center in rural western Uttar Pradesh.

Kunwar Shekhar Vijendra is committed to promoting harmony and unity among people and actively engages with various civil society organizations to this end. His affiliations include:

Advisor, Shri Jagdish Prasad Mathur Charitable Trust, Delhi (Mentored by Shri LK Advani ji);
Chairman, Livelihood Development Research Foundation, Delhi
Mentor, Centre for Law and Good Governance, Delhi
Member, Executive Committee of Harijan Sevak Sangh (Founded by Gandhi Ji in 1932);
Member, National Advisory Board, SPIC MACAY
Chairman, U.P. Body Building & Fitness Association
He has been honored and awarded for his contributions and has traveled globally to participate in various professional, social, and educational activities.

He is a Philanthropist, Social Speaker, Academic Influencer, Occasional Poet, and a Dreamer!
        </Text>
      </View>
    </ScrollView>
  );
};

export default UniversityLeadership;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  card: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: 14,
    resizeMode: 'cover',
    marginBottom: 14,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'justify',
    lineHeight: 20,
  },
});
