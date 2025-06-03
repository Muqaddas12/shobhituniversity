import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const QuerySection = () => {
  // State variables to hold the input values
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle the "Send" button press
  const handleSend = () => {
    // Basic validation
    if (!name || !phoneNumber || !email || !subject || !message) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // You would typically send this data to a backend service here.
    // For now, we'll just log it and show an alert.
    console.log({
      name,
      phoneNumber,
      email,
      subject,
      message,
    });

    Alert.alert('Success', 'Your query has been sent!');

    // Clear the form after sending
    setName('');
    setPhoneNumber('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Send Us a Query</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#888"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad" // Suggests a numeric keyboard for phone numbers
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address" // Suggests an email keyboard
        autoCapitalize="none" // Prevents auto-capitalization for email
      />
      <TextInput
        style={styles.input}
        placeholder="Subject"
        placeholderTextColor="#888"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={[styles.input, styles.messageInput]} // Apply additional style for message
        placeholder="Your Message"
        placeholderTextColor="#888"
        value={message}
        onChangeText={setMessage}
        multiline // Allows multiple lines of text
        numberOfLines={4} // Initial number of lines visible
        textAlignVertical="top" // Aligns text to the top for multiline input
      />

      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4f7', // Light background for the section
    padding: 20,
    borderRadius: 12,
    marginVertical: 20, // Space above and below the section
    shadowColor: '#000', // Subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00796b', // Matching your primary color
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    marginBottom: 15, // Space between inputs
  },
  messageInput: {
    height: 120, // Taller input for the message
  },
  sendButton: {
    backgroundColor: '#2e7d32', // A pleasant green for the button
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center', // Center text horizontally
    marginTop: 10,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuerySection;
