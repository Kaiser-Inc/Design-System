import React from "react";
import { ActivityIndicator } from "react-native";
import { semantic } from "../../tokens/colors.js";

export type SpinnerSize = "sm" | "md" | "lg";
export interface SpinnerProps { size?: SpinnerSize; color?: string; }

export function Spinner({ size = "md", color = semantic.brand }: SpinnerProps) {
  const rnSize = size === "sm" ? "small" : "large";
  return <ActivityIndicator size={rnSize} color={color} />;
}
