import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import SafeAreaWrapper from '../../components/common/SafeAreaWrapper';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const GuidelineScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Image Section with Curved Bottom */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/images/guideline1.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Text and Button Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.titleText}>
          Instantly analyze fresh ingredients, packaged foods, or entire meals using our smart AI lens.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.nextButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Guideline2')}
          >
            <Ionicons name="arrow-forward" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4EC', // Very light green background matching the image
  },
  imageWrapper: {
    height: height * 0.65,
    width: '100%',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
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
    fontSize: 24, // Adjusted size slightly to match Outfit's scale
    color: '#000000',
    lineHeight: 34,
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

export default GuidelineScreen1;