
import { View, StyleSheet } from "react-native";
import type { ViewStyle } from "react-native";
import { semantic } from "../../tokens/colors.js";

export interface SeparatorProps { vertical?: boolean; style?: ViewStyle; }

export function Separator({ vertical = false, style }: SeparatorProps) {
  return <View style={[vertical ? styles.vertical : styles.horizontal, style]} />;
}

const styles = StyleSheet.create({
  horizontal: { height: 1, backgroundColor: semantic.borderSubtle, width: "100%" },
  vertical: { width: 1, backgroundColor: semantic.borderSubtle, alignSelf: "stretch" },
});
