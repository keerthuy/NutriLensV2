import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const MockScreen = ({ name }) => null;

export const AppNavigator = () => {
  // Mock auth state for phase 1
  const isAuthenticated = false; // Set false to show Onboarding/Auth

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        ) : (
          <Stack.Screen name="MainNavigator" component={MockScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;