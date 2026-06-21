import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/onboarding/SplashScreen';
import GetStartedScreen from '../screens/onboarding/GetStartedScreen';

// Placeholders for subsequent screens
const MockScreen = () => null;

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      
      {/* Routes for future screens in the onboarding/auth flow */}
      <Stack.Screen name="Guideline1" component={MockScreen} />
      <Stack.Screen name="Login" component={MockScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;