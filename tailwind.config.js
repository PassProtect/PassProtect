/** @type {import('tailwindcss').Config} */
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
// import { customThemeOne } from './customThemeOne.ts';


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
			themes: { preset: [
        { name: 'rocket', enhancements: true }, 
        { name: 'wintry', enhancements: true },
        { name: 'skeleton', enhancements: true },
        { name: 'crimson', enhancements: true },
        { name: 'gold-nouveau', enhancements: true },
        // { name: customThemeOne, enhancements: true },
      ]}
		}),
		forms
  ],
}

