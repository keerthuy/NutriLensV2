import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  // Mock auth state for phase 1
  const isAuthenticated = false; // Set false to show Onboarding/Auth

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen 
            name="AuthNavigator" 
            component={AuthNavigator}
            options={{ animationEnabled: false }}
          />
        ) : (
          <Stack.Screen 
            name="MainNavigator" 
            component={() => <View style={{ flex: 1 }} />}
            options={{ animationEnabled: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}