import { StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";

type Style = ViewStyle | TextStyle | ImageStyle;

/** Merge multiple style props into a flat style object */
export function sx<T extends Style>(...styles: (StyleProp<T> | undefined | null | false)[]): T {
  return StyleSheet.flatten(styles.filter(Boolean)) as T;
}
