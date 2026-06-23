import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { typography } from '../../utils/typography';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const GuidelineScreen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {/* Placeholder for Guideline 3 image */}
        <Image
          source={require('../../assets/images/guideline3.png')} // Temporarily using logo until you provide guideline3 image
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.titleText}>
          Get clear, colour-coded safety scores and instant warnings for potential allergens or dietary triggers.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.nextButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('TermsAndConditionsScreen')}
          >
            <Ionicons name="checkmark" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4EC',
  },
  imageWrapper: {
    height: height * 0.65,
    width: '100%',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 8,
    borderBottomColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 52, // slightly smaller so it nests perfectly inside the border
    borderBottomRightRadius: 52,
  },
  bottomSection: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  titleText: {
    fontFamily: typography.fonts.extraBold,
    fontSize: 22,
    color: '#000000',
    lineHeight: 32,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    width: '100%',
  },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2ecc71',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default GuidelineScreen3;