import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { typography } from '../../utils/typography';

const TermsAndConditionsScreen = ({ navigation }) => {
  const [agreed, setAgreed] = useState(false);

  const terms = [
    {
      id: 1,
      title: '1.Acceptance of Terms',
      description: 'By using the NutriLens application,you agree to follow these terms and conditions',
      icon: 'document-outline',
      iconColor: '#2ecc71',
    },
    {
      id: 2,
      title: '2. Health Information',
      description: 'NutriLens provides nutrition guidance based on user inputs.',
      icon: 'heart',
      iconColor: '#e74c3c',
    },
    {
      id: 3,
      title: '3.User Responsibility',
      description: 'Users must provide accurate dietary and health information.',
      icon: 'person',
      iconColor: '#2ecc71',
    },
    {
      id: 4,
      title: '4.Privacy',
      description: 'Personal data will be used to provide recommensations.',
      icon: 'key',
      iconColor: '#2ecc71',
    },
    {
      id: 5,
      title: '5.Updates',
      description: 'NutriLens may updates these terms when necessary.',
      icon: 'document-text',
      iconColor: '#2ecc71',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>NutriLens</Text>
          <View style={{ width: 28 }} /> {/* Spacer to center the title */}
        </View>

        <Text style={styles.pageTitle}>Terms & conditions</Text>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.card}>
            {terms.map((item) => (
              <View key={item.id} style={styles.termRow}>
                <View style={styles.iconContainer}>
                  <Ionicons name={item.icon} size={32} color={item.iconColor} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.termTitle}>{item.title}</Text>
                  <Text style={styles.termDesc}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={styles.checkboxContainer}
            activeOpacity={0.8}
            onPress={() => setAgreed(!agreed)}
          >
            <View style={[styles.checkbox, agreed && styles.checkboxActive]}>
              {agreed && <Ionicons name="checkmark" size={18} color="#000" />}
            </View>
            <Text style={styles.checkboxText}>I agree to the Terms & Conditions</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Bottom Actions */}
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={[styles.acceptButton, !agreed && styles.acceptButtonDisabled]}
            disabled={!agreed}
            onPress={() => {
              // Action when accepted
              navigation.navigate('SignUpScreen'); // Navigate to the registered route name
            }}
          >
            <Text style={styles.acceptButtonText}>Accept & Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.declineButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.declineButtonText}>Decline</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBF4EC',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
    marginLeft: -5,
  },
  headerTitle: {
    fontFamily: typography.fonts.bold,
    fontSize: 20,
    color: '#2ecc71',
  },
  pageTitle: {
    fontFamily: typography.fonts.extraBold,
    fontSize: 22,
    color: '#000',
    marginTop: 15,
    marginBottom: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#E6EFE6', // Light grayish green matching the design
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
  },
  termRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  iconContainer: {
    width: 45,
    alignItems: 'flex-start',
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
  },
  termTitle: {
    fontFamily: typography.fonts.bold,
    fontSize: 16,
    color: '#000',
    marginBottom: 6,
  },
  termDesc: {
    fontFamily: typography.fonts.bold, // Text in image is bold for description too!
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1.5,
    borderColor: '#000',
    backgroundColor: 'transparent',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxActive: {
    backgroundColor: 'transparent',
  },
  checkboxText: {
    fontFamily: typography.fonts.bold,
    fontSize: 16,
    color: '#000',
  },
  bottomSection: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: '#2ecc71',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 16,
  },
  acceptButtonDisabled: {
    opacity: 0.6,
  },
  acceptButtonText: {
    fontFamily: typography.fonts.bold,
    fontSize: 18,
    color: '#000',
  },
  declineButton: {
    paddingVertical: 10,
  },
  declineButtonText: {
    fontFamily: typography.fonts.bold,
    fontSize: 16,
    color: '#e74c3c',
  },
});

export default TermsAndConditionsScreen;