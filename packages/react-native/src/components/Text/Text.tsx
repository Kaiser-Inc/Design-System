
import { Text as RNText, StyleSheet } from "react-native";
import type { TextProps as RNTextProps } from "react-native";
import { semantic } from "../../tokens/colors.js";
import { typography } from "../../tokens/typography.js";

export type TextPreset = "heading1" | "heading2" | "heading3" | "heading4" | "body" | "caption" | "label" | "mono";

export interface TextProps extends RNTextProps {
  preset?: TextPreset;
}

export function Text({ preset = "body", style, children, ...props }: TextProps) {
  return <RNText style={[presetStyles[preset], style]} {...props}>{children}</RNText>;
}

const presetStyles = StyleSheet.create({
  heading1: { fontSize: typography.fontSize4xl, fontWeight: typography.fontWeightBold, color: semantic.fg1, lineHeight: typography.lineHeightXl + 12 },
  heading2: { fontSize: typography.fontSize3xl, fontWeight: typography.fontWeightBold, color: semantic.fg1, lineHeight: typography.lineHeightXl + 4 },
  heading3: { fontSize: typography.fontSize2xl, fontWeight: typography.fontWeightSemibold, color: semantic.fg1, lineHeight: typography.lineHeightXl },
  heading4: { fontSize: typography.fontSizeXl, fontWeight: typography.fontWeightSemibold, color: semantic.fg1, lineHeight: typography.lineHeightLg },
  body:     { fontSize: typography.fontSizeMd, fontWeight: typography.fontWeightNormal, color: semantic.fg2, lineHeight: typography.lineHeightMd },
  caption:  { fontSize: typography.fontSizeSm, fontWeight: typography.fontWeightNormal, color: semantic.fg3, lineHeight: typography.lineHeightSm },
  label:    { fontSize: typography.fontSizeSm, fontWeight: typography.fontWeightMedium, color: semantic.fg2, lineHeight: typography.lineHeightSm },
  mono:     { fontSize: typography.fontSizeSm, fontFamily: "monospace", color: semantic.fg2, lineHeight: typography.lineHeightMd },
});
