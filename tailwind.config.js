/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D8BD7', // change this to actual primary color
        'primary-dark': '#1d77d0',
        'primary-half': 'rgba(61, 139, 215, 0.5)',
        'primary-light': 'rgba(61, 139, 215, 0.2)',
        'primary-ultra-light': 'rgba(61, 139, 215, 0.1)',
        purple: '#A772EB',
        'purple-dark': '#8434eb',
        'purple-half': 'rgba(167, 114, 235, 0.5)',
        'purple-light': 'rgba(167, 114, 235, 0.2)',
        'purple-ultra-light': 'rgba(167, 114, 235, 0.1)',
        success: '#4CA859',
        'success-dark': '#2ba53d',
        'success-half': 'rgba(76, 168, 89, 0.5)',
        'success-light': 'rgba(76, 168, 89, 0.2)',
        'success-ultra-light': 'rgba(76, 168, 89, 0.1)',
      },
    },
  },
  plugins: [],
}
