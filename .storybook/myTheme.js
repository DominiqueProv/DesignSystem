import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'dodgerblue',
  colorSecondary: 'lightgray',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: 'dodgerblue',

  // Form colors
  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: "Dom's storybook",
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});
