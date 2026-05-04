import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { ViewStyle } from "react-native";
import { semantic } from "../../tokens/colors.js";
import { radii } from "../../tokens/radii.js";
import { typography } from "../../tokens/typography.js";
import { sx } from "../../utils/styleUtils.js";

export type BadgeVariant = "default" | "brand" | "success" | "warning" | "danger";
export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  children: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  style?: ViewStyle;
}

const variantStyles = {
  default: { bg: semantic.bgElevated, text: semantic.fg2 },
  brand:   { bg: semantic.brandSubtle, text: semantic.brand },
  success: { bg: "rgba(0,179,126,0.12)", text: semantic.success },
  warning: { bg: "rgba(251,169,76,0.12)", text: semantic.warning },
  danger:  { bg: "rgba(247,90,104,0.12)", text: semantic.danger },
};

export function Badge({ children, variant = "default", size = "md", style }: BadgeProps) {
  const vs = variantStyles[variant];
  const pad = size === "sm" ? { paddingHorizontal: 6, paddingVertical: 2 } : { paddingHorizontal: 8, paddingVertical: 3 };
  const fs = size === "sm" ? typography.fontSizeXs : typography.fontSizeSm;
  return (
    <View style={sx<ViewStyle>(styles.base, { backgroundColor: vs.bg }, pad, style)}>
      <Text style={{ color: vs.text, fontSize: fs, fontWeight: typography.fontWeightMedium }}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({ base: { borderRadius: radii.pill, alignSelf: "flex-start" } });
