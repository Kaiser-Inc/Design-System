import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    // Stories co-localizadas nos packages
    "../../../packages/react/src/**/*.stories.@(ts|tsx)",
    // Stories de overview (tokens, fundamentos)
    "../src/stories/**/*.stories.@(ts|tsx)",
    "../src/stories/**/*.mdx",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@chromatic-com/storybook"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@kaiserinc/react": join(__dirname, "../../../packages/react/src/index.ts"),
          "@kaiserinc/tokens": join(__dirname, "../../../packages/tokens/src/index.ts"),
        },
      },
    };
  },
};

export default config;
