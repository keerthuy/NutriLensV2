import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const SafeAreaWrapper = ({ children, style, backgroundColor = colors.backgroundWhite }) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeAreaWrapper;