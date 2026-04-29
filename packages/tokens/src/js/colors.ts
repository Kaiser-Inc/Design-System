export const colors = {
  purple: {
    50: "#f1ebff",
    100: "#e0d2ff",
    200: "#c4acff",
    300: "#a78bfa",
    400: "#996dff",
    500: "#8257e6",
    600: "#6938ee",
    700: "#5a3fbe",
    800: "#402090",
    900: "#2a1466",
  },
  gray: {
    50: "#fafafc",
    100: "#e1e1e6",
    200: "#c4c4cc",
    300: "#8d8d99",
    400: "#7c7c8a",
    500: "#505059",
    600: "#323238",
    700: "#29292e",
    800: "#202024",
    900: "#121214",
    950: "#09090a",
  },
  success: {
    300: "#04d361",
    500: "#00b37e",
  },
  warning: {
    300: "#ffca80",
    500: "#fba94c",
  },
  danger: {
    300: "#fba1a8",
    500: "#f75a68",
  },
} as const;

export type Colors = typeof colors;
export type PurpleScale = typeof colors.purple;
export type GrayScale = typeof colors.gray;
