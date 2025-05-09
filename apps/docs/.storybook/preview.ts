import type { Preview } from '@storybook/react';
import '../global.css';
import '../../../packages/ui/dist/index.css';
// import '@repo/ui/dist/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;