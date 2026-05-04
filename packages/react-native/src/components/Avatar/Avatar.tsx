import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import type { ViewStyle } from "react-native";
import { semantic } from "../../tokens/colors.js";
import { typography } from "../../tokens/typography.js";
import { sx } from "../../utils/styleUtils.js";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
  name?: string;
  src?: string;
  size?: AvatarSize;
  style?: ViewStyle;
}

const sizeMap: Record<AvatarSize, number> = { xs: 24, sm: 32, md: 40, lg: 48, xl: 64 };
const fontMap: Record<AvatarSize, number> = { xs: 9, sm: 12, md: 16, lg: 18, xl: 24 };

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

export function Avatar({ name, src, size = "md", style }: AvatarProps) {
  const dim = sizeMap[size];
  const fs = fontMap[size];
  const baseStyle = sx<ViewStyle>(styles.base, { width: dim, height: dim, borderRadius: dim / 2 }, style);

  if (src) {
    return <Image source={{ uri: src }} style={[baseStyle, { borderRadius: dim / 2 }]} />;
  }
  return (
    <View style={sx<ViewStyle>(baseStyle, styles.fallback)}>
      <Text style={{ color: semantic.fg1, fontSize: fs, fontWeight: typography.fontWeightSemibold }}>
        {name ? getInitials(name) : "?"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: { overflow: "hidden", alignItems: "center", justifyContent: "center" },
  fallback: { backgroundColor: semantic.brandSubtle },
});
