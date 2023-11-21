/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './src/**/*.vue',
    './src/views/**/*.vue',
    './src/components/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'wzp-color': '#32BB46',
        'logo-ligh-green': '#4CB853',
        'logo-lighgray-green': '#63bb69a9',
        'logo-ligh-orange': '#F6851F',
        'logo-lighgray-orange': '#F6851Fa9',
        'logo-ligh-red': '#E01F27',
        'logo-lighgray-red': '#E01F27a9',

        'logo-ligh-blue': '#1E9680',
        'logo-lighgray-blue': '#1E9680a9',
        'logo-text' : '#f79720'
      },
    },
  },
  plugins: [],
}

