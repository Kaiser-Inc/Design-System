
import { Switch as RNSwitch, View, Text, StyleSheet } from "react-native";
import type { ViewStyle } from "react-native";
import { semantic } from "../../tokens/colors.js";
import { typography } from "../../tokens/typography.js";

export interface SwitchProps {
  value: boolean;
  onValueChange: (v: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: ViewStyle;
}

export function Switch({ value, onValueChange, label, disabled, style }: SwitchProps) {
  return (
    <View style={[styles.row, style]}>
      <RNSwitch
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        trackColor={{ false: semantic.borderDefault, true: semantic.brand }}
        thumbColor={semantic.fg1}
      />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  label: { fontSize: typography.fontSizeSm, color: semantic.fg1, fontWeight: typography.fontWeightMedium },
});
