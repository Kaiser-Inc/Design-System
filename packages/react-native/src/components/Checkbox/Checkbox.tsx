import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import type { ViewStyle } from "react-native";
import { semantic } from "../../tokens/colors.js";
import { radii } from "../../tokens/radii.js";
import { typography } from "../../tokens/typography.js";

export interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  label?: string;
  disabled?: boolean;
  style?: ViewStyle;
}

export function Checkbox({ checked, onPress, label, disabled, style }: CheckboxProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={[styles.row, disabled && styles.disabled, style]}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
    >
      <View style={[styles.box, checked && styles.checked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  box: { width: 18, height: 18, borderRadius: radii.sm, borderWidth: 1.5, borderColor: semantic.borderDefault, alignItems: "center", justifyContent: "center", backgroundColor: semantic.bgElevated },
  checked: { backgroundColor: semantic.brand, borderColor: semantic.brand },
  checkmark: { color: semantic.fg1, fontSize: 12, fontWeight: typography.fontWeightBold, lineHeight: 14 },
  label: { fontSize: typography.fontSizeSm, color: semantic.fg1 },
  disabled: { opacity: 0.5 },
});
