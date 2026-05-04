import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import type { TextInputProps, ViewStyle } from "react-native";
import { semantic } from "../../tokens/colors.js";
import { radii } from "../../tokens/radii.js";
import { typography } from "../../tokens/typography.js";
import { sx } from "../../utils/styleUtils.js";

export interface InputProps extends Omit<TextInputProps, "style"> {
  label?: string;
  hint?: string;
  error?: string;
  style?: ViewStyle;
}

export function Input({ label, hint, error, style, ...props }: InputProps) {
  const [focused, setFocused] = useState(false);
  const hasError = Boolean(error);

  return (
    <View style={sx<ViewStyle>(styles.wrapper, style)}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...props}
        onFocus={e => { setFocused(true); props.onFocus?.(e); }}
        onBlur={e => { setFocused(false); props.onBlur?.(e); }}
        placeholderTextColor={semantic.fg4}
        style={StyleSheet.flatten([
          styles.input,
          focused && styles.focused,
          hasError && styles.errored,
        ])}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      {hint && !error && <Text style={styles.hint}>{hint}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 6 },
  label: { fontSize: typography.fontSizeSm, fontWeight: typography.fontWeightMedium, color: semantic.fg2 },
  input: {
    height: 40, borderRadius: radii.md, borderWidth: 1,
    borderColor: semantic.borderDefault, backgroundColor: semantic.bgElevated,
    color: semantic.fg1, fontSize: typography.fontSizeSm,
    paddingHorizontal: 12,
  },
  focused: { borderColor: semantic.brand },
  errored: { borderColor: semantic.danger },
  error: { fontSize: typography.fontSizeXs, color: semantic.danger },
  hint: { fontSize: typography.fontSizeXs, color: semantic.fg4 },
});
