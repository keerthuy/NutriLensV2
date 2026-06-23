import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/onboarding/SplashScreen';
import GetStartedScreen from '../screens/onboarding/GetStartedScreen';
import GuidelineScreen1 from '../screens/onboarding/GuidelineScreen1';
import GuidelineScreen2 from '../screens/onboarding/GuidelineScreen2';
import GuidelineScreen3 from '../screens/onboarding/GuidelineScreen3';
import TermsAndConditionsScreen from '../screens/onboarding/TermsAndConditionsScreen';

import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import DietPreferenceScreen from '../screens/registration/DietPreferenceScreen';
import MedicalConditionScreen from '../screens/registration/MedicalConditionScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      
      {/* Routes for onboarding flow */}
      <Stack.Screen name="Guideline1" component={GuidelineScreen1} />
      <Stack.Screen name="Guideline2" component={GuidelineScreen2} />
      <Stack.Screen name="Guideline3" component={GuidelineScreen3} />
      <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="DietPreferenceScreen" component={DietPreferenceScreen} />
      <Stack.Screen name="MedicalConditionScreen" component={MedicalConditionScreen} />
    </Stack.Navigator>
  );
}