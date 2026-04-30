import type { Preview } from "@storybook/react";
// globals.css inclui: Tailwind v4 + @source dos componentes + KaiserInc tokens
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark",    value: "#09090a" },
        { name: "surface", value: "#121214" },
        { name: "light",   value: "#fafafc" },
      ],
    },
    layout: "centered",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: true }],
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Tema global",
      defaultValue: "dark",
      toolbar: {
        title: "Tema",
        icon: "circlehollow",
        items: [
          { value: "dark",  title: "Dark (padrão)" },
          { value: "light", title: "Light" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals["theme"] as string) ?? "dark";
      document.documentElement.setAttribute("data-theme", theme);
      document.body.style.fontFamily =
        "Roboto, -apple-system, BlinkMacSystemFont, sans-serif";
      document.body.style.backgroundColor =
        theme === "light" ? "#fafafc" : "#09090a";
      return Story();
    },
  ],
};

export default preview;
