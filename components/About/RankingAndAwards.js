import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Using FontAwesome 5 for icons

// --- Data for the component ---
const awardsAndRankingsData = {
  introduction: "Shobhit University is a research-intensive, multi-disciplinary University that shares the values of high-quality teaching within an environment of internationally competitive research. The University has received many awards and has been ranked amongst top rankings in different categories time to time.",
  years: [
    {
      year: "2025",
      achievements: [
        "Shobhit University, Gangoh, has been honored with a #Diamond Band rating in the #Sustainable Institutions of India – Green Rankings 2025."
      ]
    },
    {
      year: "2023",
      achievements: [
        "Ranked in Top 101-125 Band of NIRF 2023 Ranking by Ministry of Education, National Institutional Ranking Framework (NIRF), Government of India.",
        "Outstanding University in Pharma & Ayurveda Education by NEW NORMAL HEALTHCARE Leadership Summit & Awards.",
        "Listed in India’s Top 13 Best Ayurveda College by Careeer360 best Ayurveda College.",
        "Best Private University in North India by ICC (Integrated Chambers of Commerce and Industry).",
        "EduShine National Excellence Awards 2023: Most Progressive University Serving in Rural India by ASSOCHAM, India.",
        "Shobhit University, Gangoh: AVIPS, NIRF Ranking Band-101-125 (NIRF Ranking-2023).",
        "Shobhit University, Gangoh: Ranked with GOLD BAND in The Mental Health and Wellness (MHW) Rankings 2023 by R. World Institutional Ranking.",
        "Shobhit University, Gangoh: ranked with A+ grade and with Diamond Band in The Green Rankings 2023 by R. World Institutional Ranking."
      ]
    },
    {
      year: "2022",
      achievements: [
        "Shobhit University, Gangoh: Sustainable Institutes of India- The Green Institutional Rankings-2022, Ranked #45 across India by R World Institutional Rankings.",
        "Shobhit University, Gangoh: Digital Distinction-Technology Confirmation to NEP, Certificate of Appreciation-2022 conferred during the Edutech 100 Summit held at Delhi on 14th December, 2022 by ASSOCHAM Council on Education.",
        "Shobhit University, Gangoh: Sahyog Samman-2022 by Krishi Vigyan Kendra Saharanpur for supporting the project on awareness about Crop Waste Management.",
        "Shobhit University, Gangoh: School of Law and Constitutional Studies ranked 3rd in India's Top Law School of Excellence in overall category (Source: Competition Success Review-GHRDC Law Schools Survey 2022).",
        "Outstanding University in Pharma & Ayurveda Education 2022 by NEW NORMAL HEALTHCARE Leadership Summit & Awards 2022."
      ]
    },
    {
      year: "2021",
      achievements: [
        "Listed in India’s Top 13 Best Ayurveda College by Careeer360 best Ayurveda College survey 2021.",
        "Best Private University in North India 2021 by ICC (Integrated Chambers of Commerce and Industry)."
      ]
    },
    {
      year: "2020",
      achievements: [
        "EduShine National Excellence Awards 2020: Most Progressive University Serving in Rural India by ASSOCHAM, India."
      ]
    },
    {
      year: "2019",
      achievements: [
        "EduShine Excellence Awards 2019: Most Progressive University Serving in Rural India 2019.",
        "National Educational Excellence Award 2019 Conferred by SPER."
      ]
    },
    {
      year: "2018",
      achievements: [
        "'Best Pharmacy College in North India 2018 Award' conferred upon 'Adarsh Vijendra Institute of Pharmaceutical Sciences' of Shobhit University Gangoh by CEGR during 4th Higher Education Summit in New Delhi on April 18, 2018.",
        "National Education Excellence Awards 2018: BEST UNIVERSITY SERVING SOCIAL CAUSE-CSR (CORPORATE SOCIAL RESPONSIBILITIES) - Shobhit University, Gangoh presented by Dr. Satya Pal Singh, Hon'ble State Minister of HRD on 17 February 2018 bestowed by The Associated Chambers of Commerce of India (ASSOCHAM) India.",
        "'School of Law and Constitutional Studies' of Shobhit University featured in \"40 BEST LAW COLLEGES IN INDIA\" by India Today ASPIRE (January 2018 issue)."
      ]
    },
    {
      year: "2017",
      achievements: [
        "Conferred upon 'Best University for Research 2017 Award' by Centre for Education Growth and Research (CEGR).",
        "Shobhit University Gangoh: Listed amongst Budding and Emerging Universities of India by Career 360 - India's Largest Higher Education & Careers magazine (March 2017).",
        "Received 'CSR Excellence in Education Award 2017' And 'CSR Top Institutes of India Award 2017' bestowed by Competition Success Review.",
        "National Education Excellence Awards 2017: Best University in Rural Area - Shobhit University, Gangoh presented by Shri Prakash Javadekar, Hon'ble Union Minister of HRD on 23 February 2017 bestowed by The Associated Chambers of Commerce of India (ASSOCHAM) India.",
        "Times of India 'Brand Icon Awards 2017' bestowed by The Times of India (The Times Group).",
        "Ranked amongst Top 25 Multi-Disciplinary Non-Government Universities of India, and amongst Top 10 in North Zone by The Week-Hansa Research Survey, 2017 - India's Best Universities (Published in The Week Magazine, May 2017)."
      ]
    },
    {
      year: "2016",
      achievements: [
        "Received ‘Best Institution for Promoting Industry-Academia Interface Award 2016’ bestowed by The Associated Chambers of Commerce of India (ASSOCHAM).",
        "Ranked amongst Top 20 Multi-Disciplinary Non-Government Universities of India by Hansa- The Week Higher Education Survey, 2016 (Published in The Week Magazine, May 2016).",
        "Ranked amongst Top 20 Multi-Disciplinary Universities of North India by Hansa- The Week Higher Education Survey, 2016 (Published in The Week Magazine, May 2016)."
      ]
    },
     {
      year: "2014",
      achievements: [
        "Listed amongst India's most Emerging Universities in India by Career 360 - India's Largest Higher Education & Careers magazine (By: Team Careers360, 28-Mar-2014)."
      ]
    },
    {
      year: "2012",
      achievements: [
        "Ranked amongst India's top 50 Universities by The Pioneer - A leading daily newspaper (A Survey of the Indian Universities - June & February 2012).",
        "Ranked amongst India's top 50 Private Universities by Lakshya Bhaskar - A publication of Dainik Bhaskar Group (A Survey conducted by Acumen Media Network, Mumbai - June, 2012)."
      ]
    },
    {
      year: "2011",
      achievements: [
        "Ranked amongst India's top 50 Private Universities by Lakshya Bhaskar - A publication of Dainik Bhaskar Group (A Survey conducted by Acumen Media Network, Mumbai - August 2011)."
      ]
    },
    {
      year: "2009",
      achievements: [
        "Ranked amongst top 50 Universities in India by Education Times - Times of India Group Publication (An Education Times-Gfk-Mode Study 2009 rankings).",
        "Ranked amongst top 10 Universities established after year 2000 by Financial Express – The Express Group Publication (A Comprehensive study on universities - June 2009)."
      ]
    }
  ]
};
// --- End of Data ---


const AwardsAndRankingsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.introCard}>
          <Icon name="university" size={30} color="#005A9C" style={styles.introIcon} />
          <Text style={styles.introText}>{awardsAndRankingsData.introduction}</Text>
        </View>

        <Text style={styles.mainTitle}>Awards & Rankings</Text>

        {awardsAndRankingsData.years.map((yearData) => (
          <View key={yearData.year} style={styles.yearSection}>
            <Text style={styles.yearHeader}>{yearData.year}</Text>
            {yearData.achievements.map((achievement, index) => (
              <View key={index} style={styles.achievementItem}>
                <Icon name="award" size={16} color="#FFC107" style={styles.achievementIcon} />
                <Text style={styles.achievementText}>{achievement}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEFEF', // Light grey background for the whole screen
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  introCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  introIcon: {
    marginBottom: 15,
  },
  introText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'center',
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#005A9C',
    paddingBottom: 10,
  },
  yearSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  yearHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005A9C', // University theme color
    marginBottom: 15,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align icon with the start of multi-line text
    marginBottom: 12,
  },
  achievementIcon: {
    marginRight: 12,
    marginTop: 4, // Adjust for better alignment with text
  },
  achievementText: {
    flex: 1, // Allow text to wrap
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
});

export default AwardsAndRankingsScreen;