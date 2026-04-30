import type { StorybookConfig } from "@storybook/react-vite";
import { join, resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: [
    // Stories co-localizadas nos packages
    "../../../packages/react/src/**/*.stories.@(ts|tsx)",
    // Stories de overview (tokens, fundamentos)
    "../src/stories/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal(config) {
    const storybookDir = resolve(__dirname, "..");
    return {
      ...config,
      plugins: [
        // Tailwind v4 precisa vir ANTES dos plugins do Storybook/Vite
        tailwindcss(),
        ...(config.plugins ?? []),
      ],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          // Aponta para o source diretamente para hot-reload funcionar em dev
          "@kaiserinc/react": join(storybookDir, "../../packages/react/src/index.ts"),
          "@kaiserinc/tokens": join(storybookDir, "../../packages/tokens/src/index.ts"),
        },
      },
    };
  },
};

export default config;
