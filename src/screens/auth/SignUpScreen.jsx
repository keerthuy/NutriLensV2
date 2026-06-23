import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';

const InputField = ({ icon, placeholder, secureTextEntry, value, onChangeText, error }) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={[styles.inputContainer, error && styles.inputError]}>
        <Feather name={icon} size={20} color={error ? colors.primaryRed : "#212121"} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#555"
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const SignUpScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSignUp = () => {
    let newErrors = {};

    if (!userName.trim()) {
      newErrors.userName = 'Username is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Validation passed, navigate to DietPreferenceScreen
      navigation.navigate('DietPreferenceScreen');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backButton}>
              <Feather name="chevron-left" size={32} color="#212121" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>NutriLens</Text>
            <View style={{ width: 32 }} /> {/* Placeholder for balance */}
          </View>

          {/* Titles */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.subtitle}>create an account to continue!</Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <InputField
              icon="user"
              placeholder="User Name"
              value={userName}
              onChangeText={setUserName}
              error={errors.userName}
            />
            <InputField
              icon="mail"
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
            />
            <InputField
              icon="lock"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              error={errors.password}
            />
            <InputField
              icon="lock"
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              error={errors.confirmPassword}
            />

            <TouchableOpacity 
              style={styles.signupButton} 
              activeOpacity={0.8}
              onPress={handleSignUp}
            >
              <Text style={styles.signupButtonText}>SignUp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginLink} onPress={() => navigation?.navigate('LoginScreen')}>
              <Text style={styles.loginText}>
                Already have an account? <Text style={styles.loginTextBold}>Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Bottom Waves */}
        <View style={styles.waveContainer} pointerEvents="none">
          <View style={[styles.circle, styles.circleLeft]} />
          <View style={[styles.circle, styles.circleRight]} />
          <View style={[styles.circle, styles.circleMiddle]} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEF5EE', // Light greenish tint
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 120, // space for waves
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'android' ? 20 : 10,
    marginBottom: 40,
  },
  backButton: {
    padding: 4,
    marginLeft: -10,
  },
  headerTitle: {
    fontFamily: typography.fonts.bold,
    fontSize: 20,
    color: '#2ECC71',
    letterSpacing: 0.5,
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontFamily: typography.fonts.bold,
    fontSize: 36,
    color: '#2ECC71',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: typography.fonts.regular,
    fontSize: 16,
    color: '#333',
  },
  formContainer: {
    gap: 15,
  },
  inputWrapper: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5EFE6', // Slightly darker than background
    borderWidth: 1,
    borderColor: '#2ECC71',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 54,
  },
  inputError: {
    borderColor: colors.primaryRed,
    backgroundColor: '#FCEBEA',
  },
  errorText: {
    color: colors.primaryRed,
    fontFamily: typography.fonts.medium,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontFamily: typography.fonts.regular,
    fontSize: 16,
    color: '#212121',
    height: '100%',
  },
  signupButton: {
    backgroundColor: '#009933', // Darker green
    borderRadius: 25,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    alignSelf: 'center',
    paddingHorizontal: 40,
  },
  signupButtonText: {
    color: colors.backgroundWhite,
    fontFamily: typography.fonts.bold,
    fontSize: 18,
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontFamily: typography.fonts.semiBold,
    fontSize: 16,
    color: '#2E7D32',
  },
  loginTextBold: {
    fontFamily: typography.fonts.extraBold,
  },
  waveContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    overflow: 'hidden',
    zIndex: -1,
  },
  circle: {
    position: 'absolute',
    borderRadius: 999,
  },
  circleLeft: {
    width: 250,
    height: 250,
    backgroundColor: '#72DA96',
    bottom: -150,
    left: -100,
  },
  circleMiddle: {
    width: 320,
    height: 320,
    backgroundColor: '#5CD084',
    bottom: -180,
    left: '50%',
    marginLeft: -160,
  },
  circleRight: {
    width: 220,
    height: 220,
    backgroundColor: '#5CD084',
    bottom: -120,
    right: -80,
  },
});

export default SignUpScreen;