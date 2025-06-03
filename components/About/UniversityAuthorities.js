import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView , Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Using FontAwesome 5

// --- Data for the component ---
const universityGovernanceData = {
  leadership: {
    heading: "University Leadership",
    icon: "sitemap", // Example icon for leadership structure
    description: "The University is headed by the Chancellor. The Vice-Chancellor acts as the Chief Executive Officer of the University, and is supported by Pro-Vice-Chancellors, Deans and Registrar.",
  },
  governanceStructures: {
    heading: "Governance Structures",
    icon: "landmark", // Example icon for governance
    items: [
      { id: 'gs1', name: "The Governing Council", itemIcon: "users-cog" },
      { id: 'gs2', name: "The Executive Council", itemIcon: "cogs" },
      { id: 'gs3', name: "The Academic Council", itemIcon: "graduation-cap" },
      { id: 'gs4', name: "The Finance Committee", itemIcon: "file-invoice-dollar" },
      { id: 'gs5', name: "The Planning Board", itemIcon: "clipboard-list" },
      { id: 'gs6', name: "The Board of faculties", itemIcon: "chalkboard-teacher" },
      { id: 'gs7', name: "The Board of Studies", itemIcon: "book-reader" },
      { id: 'gs8', name: "The Admission Committee", itemIcon: "user-plus" },
      { id: 'gs9', name: "The Examination Committee", itemIcon: "file-signature" },
      { id: 'gs10', name: "Any such authorities as may be declared by the statutes to be the authorities of the University.", itemIcon: "gavel" }
    ]
  },
  supportingBodies: {
    heading: "Supporting Bodies",
    icon: "hands-helping", // Example icon for support
    description: "The University also has the following supporting bodies for smooth functioning:",
    items: [
      { id: 'sb1', name: "Internal Quality Assurance Cell", itemIcon: "check-double" },
      { id: 'sb2', name: "University Training & Development Cell", itemIcon: "tools" },
      { id: 'sb3', name: "Library Committee", itemIcon: "book" },
      { id: 'sb4', name: "Sports Committee", itemIcon: "futbol" }, // 'futbol' is for football, can use 'basketball-ball', 'volleyball-ball' etc.
      { id: 'sb5', name: "Cultural Committee", itemIcon: "theater-masks" },
      { id: 'sb6', name: "Anti-ragging Committee", itemIcon: "user-shield" },
      { id: 'sb7', name: "Anti-ragging Squad", itemIcon: "shield-alt" },
      { id: 'sb8', name: "Gender Sensitization Cell", itemIcon: "venus-mars" },
      { id: 'sb9', name: "Anti-Discrimination Cell", itemIcon: "balance-scale-right" },
      { id: 'sb10', name: "Women Grievance Redressal Cell", itemIcon: "female" }, // Could also use 'user-tie' with a female silhouette if available
      { id: 'sb11', name: "Grievance Redressal Cell", itemIcon: "headset" }, // Or 'comments'
      { id: 'sb12', name: "University Research Degree Committee", itemIcon: "microscope" },
      { id: 'sb13', name: "Research Advisory Board", itemIcon: "flask" },
      { id: 'sb14', name: "Various Activity Clubs", itemIcon: "puzzle-piece" },
      { id: 'sb15', name: "Academic Centres", itemIcon: "university" },
      { id: 'sb16', name: "Institutional Innovation center (IIC)", itemIcon: "lightbulb" },
      { id: 'sb17', name: "Alumni Cell", itemIcon: "users" },
      { id: 'sb18', name: "Career Guidance & Placement Cell", itemIcon: "briefcase" }
    ]
  }
};
// --- End of Data ---

// Component for individual list items (icon first, then text)
const ListItem = ({ text, itemIconName }) => (
  <View style={styles.listItemContainer}>
    <Icon name={itemIconName || "circle"} size={18} color="#007AFF" style={styles.listItemIcon} />
    <Text style={styles.listItemText}>{text}</Text>
  </View>
);

// Main Component
const UniversityAuthorities = () => {
  const { leadership, governanceStructures, supportingBodies } = universityGovernanceData;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
<Image style={{height:'200',objectFit:'contain'}} source={{uri:'https://sug.ac.in/images/shobhit_img/su-university-authorities.jpg'}}/>
        {/* Leadership Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name={leadership.icon} size={24} color="#333" style={styles.sectionHeaderIcon} />
            <Text style={styles.sectionTitle}>{leadership.heading}</Text>
          </View>
          <Text style={styles.descriptionText}>{leadership.description}</Text>
        </View>

        {/* Governance Structures Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name={governanceStructures.icon} size={24} color="#333" style={styles.sectionHeaderIcon} />
            <Text style={styles.sectionTitle}>{governanceStructures.heading}</Text>
          </View>
          {governanceStructures.items.map(item => (
            <ListItem key={item.id} text={item.name} itemIconName={item.itemIcon} />
          ))}
        </View>

        {/* Supporting Bodies Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
             <Icon name={supportingBodies.icon} size={24} color="#333" style={styles.sectionHeaderIcon} />
            <Text style={styles.sectionTitle}>{supportingBodies.heading}</Text>
          </View>
          {supportingBodies.description && (
            <Text style={styles.descriptionTextItalic}>{supportingBodies.description}</Text>
          )}
          {supportingBodies.items.map(item => (
            <ListItem key={item.id} text={item.name} itemIconName={item.itemIcon} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F4F8', // A light, neutral background
  },
  container: {
    padding: 15,
  },
  section: {
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionHeaderIcon: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50', // A darker shade for titles
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 15,
  },
  descriptionTextItalic: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
    fontStyle: 'italic',
    marginBottom: 15,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to the start for multi-line text
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAECEE', // Light separator line
  },
  listItemIcon: {
    marginRight: 15,
    marginTop: 3, // Adjust for better alignment with text
    width: 20, // Ensure consistent spacing for icon
    textAlign: 'center',
  },
  listItemText: {
    flex: 1, // Allow text to wrap
    fontSize: 16,
    color: '#34495E', // Slightly softer than black
    lineHeight: 22,
  },
});

export default UniversityAuthorities;