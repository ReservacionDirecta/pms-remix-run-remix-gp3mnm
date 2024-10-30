import { theme } from './app/styles/theme';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: theme.colors,
      boxShadow: theme.shadows,
    },
  },
  plugins: [],
}; 