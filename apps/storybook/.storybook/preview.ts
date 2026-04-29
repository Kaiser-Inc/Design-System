import type { Preview } from "@storybook/react";
// Importa todos os tokens CSS globalmente no Storybook
import "../../packages/tokens/src/css/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      // Por padrão usa o fundo dark do design system
      default: "dark",
      values: [
        { name: "dark",    value: "#09090a" },
        { name: "surface", value: "#121214" },
        { name: "light",   value: "#fafafc" },
      ],
    },
    layout: "centered",
    a11y: {
      // Configuração do addon-a11y para WCAG 2.1 AA
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
        ],
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
      const theme = context.globals["theme"] as string;
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
