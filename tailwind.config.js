/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue_light: '#EBF1FF',
      blue: '#2E6AF6',
      blue_dark: '#003CC9',
      red_light: '#FFF2F2',
      red: '#FF0000',
      red_dark: '#D70000',
      green: '#00C100',
      white: '#FFFFFF',
      gray_background: '#101010',
      gray_menu_onclick: '#171717',
      gray_menu_selected: '#1F1F1F',
      gray_caption: '#A6A6A6',
      gray_text_inactive: '#C3C3C3',
      gray_field_background: '#D4D4D4',
      gray_button_inactive: '#F2F2F2',
    },
    extend: {},
  },
  plugins: [],
};
