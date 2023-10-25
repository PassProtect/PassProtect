/** @type {import('tailwindcss').Config} */
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import { customThemeOne, customThemeTwo, PassPro } from './customThemeOne.ts';


export default {
  // darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')

  ],
  theme: {
    // colors: {
    //   authButtons: '#1081aa'
    // },
    extend: {},
  },
  plugins: [
    skeleton({
			themes: { preset: ['rocket', 'wintry', 'skeleton', 'crimson', 'gold-nouveau', 'seafoam'], custom: [customThemeOne, customThemeTwo, PassPro] }
		}),
		forms
  ],
}

