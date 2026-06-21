import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';

const Button = ({
  title,
  onPress,
  variant = 'primary', // 'primary' | 'outline'
  disabled = false,
  loading = false,
  style,
}) => {
  const isOutline = variant === 'outline';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOutline ? styles.outlineButton : styles.primaryButton,
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={isOutline ? '#2ECC71' : colors.backgroundWhite} />
      ) : (
        <Text
          style={[
            styles.text,
            isOutline ? styles.outlineText : styles.primaryText,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30, // Pill shape
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 8,
  },
  primaryButton: {
    backgroundColor: '#2ECC71', // Bright green from design
    borderWidth: 2,
    borderColor: '#2ECC71',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#2ECC71',
  },
  disabledButton: {
    opacity: 0.6,
  },
  text: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
  },
  primaryText: {
    color: colors.backgroundWhite,
  },
  outlineText: {
    color: '#2ECC71', // Match border
  },
});

export default Button;