
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from "react-native";
import type { TouchableOpacityProps, ViewStyle, TextStyle } from "react-native";
import { semantic } from "../../tokens/colors.js";
import { radii } from "../../tokens/radii.js";
import { typography } from "../../tokens/typography.js";
import { sx } from "../../utils/styleUtils.js";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<TouchableOpacityProps, "style"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: string;
  style?: ViewStyle;
}

const variantStyle: Record<ButtonVariant, { container: ViewStyle; text: TextStyle }> = {
  primary:   { container: { backgroundColor: semantic.brand }, text: { color: semantic.fg1 } },
  secondary: { container: { backgroundColor: semantic.bgElevated, borderWidth: 1, borderColor: semantic.borderDefault }, text: { color: semantic.fg2 } },
  ghost:     { container: { backgroundColor: "transparent" }, text: { color: semantic.fg3 } },
  danger:    { container: { backgroundColor: "transparent", borderWidth: 1, borderColor: semantic.danger }, text: { color: semantic.danger } },
  outline:   { container: { backgroundColor: "transparent", borderWidth: 1, borderColor: semantic.brand }, text: { color: semantic.brand } },
};

const sizeStyle: Record<ButtonSize, { container: ViewStyle; text: TextStyle }> = {
  sm: { container: { height: 32, paddingHorizontal: 12 }, text: { fontSize: typography.fontSizeSm } },
  md: { container: { height: 40, paddingHorizontal: 16 }, text: { fontSize: typography.fontSizeSm } },
  lg: { container: { height: 48, paddingHorizontal: 24 }, text: { fontSize: typography.fontSizeMd } },
};

export function Button({ variant = "primary", size = "md", loading = false, disabled, leftIcon, rightIcon, children, style, ...props }: ButtonProps) {
  const vs = variantStyle[variant];
  const ss = sizeStyle[size];
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={0.75}
      style={sx<ViewStyle>(styles.base, vs.container, ss.container, isDisabled && styles.disabled, style)}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={vs.text.color as string} />
      ) : (
        <>
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
          <Text style={sx<TextStyle>(styles.text, vs.text, ss.text)}>{children}</Text>
          {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: radii.md, gap: 8 },
  text: { fontWeight: typography.fontWeightMedium, includeFontPadding: false },
  icon: { flexShrink: 0 },
  disabled: { opacity: 0.5 },
});
