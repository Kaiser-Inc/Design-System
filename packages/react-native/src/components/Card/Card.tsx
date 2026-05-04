import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { ViewStyle } from "react-native";
import { semantic } from "../../tokens/colors.js";
import { radii } from "../../tokens/radii.js";
import { shadows } from "../../tokens/shadows.js";
import { typography } from "../../tokens/typography.js";
import { sx } from "../../utils/styleUtils.js";

export interface CardProps { children: React.ReactNode; noPadding?: boolean; style?: ViewStyle; }
export function Card({ children, noPadding = false, style }: CardProps) {
  return <View style={sx<ViewStyle>(styles.card, !noPadding && styles.padded, style)}>{children}</View>;
}

export interface CardHeaderProps { children: React.ReactNode; style?: ViewStyle; }
export function CardHeader({ children, style }: CardHeaderProps) {
  return <View style={sx<ViewStyle>(styles.header, style)}>{children}</View>;
}

export interface CardTitleProps { children: string; }
export function CardTitle({ children }: CardTitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

export interface CardBodyProps { children: React.ReactNode; style?: ViewStyle; }
export function CardBody({ children, style }: CardBodyProps) {
  return <View style={sx<ViewStyle>(styles.body, style)}>{children}</View>;
}

const styles = StyleSheet.create({
  card: { borderRadius: radii.xl, backgroundColor: semantic.bgSurface, borderWidth: 1, borderColor: semantic.borderSubtle, ...shadows.md },
  padded: { padding: 16 },
  header: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 12 },
  title: { fontSize: typography.fontSizeMd, fontWeight: typography.fontWeightBold, color: semantic.fg1 },
  body: { gap: 8 },
});
