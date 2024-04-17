/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      serif: ['"Lora"', 'serif'],
      mono: ['"Inconsolata"', 'monospace']
    },
    fontSize: {
      bodyS: ['14px', { lineHeight: '15px', fontWeight: '400' }],
      bodyM: ['18px', { lineHeight: '24px', fontWeight: '400' }],
      headingS: ['20px', { lineHeight: '24px', fontWeight: '400' }],
      headingM: ['24px', { lineHeight: '29px', fontWeight: '400' }],
      headingL: ['64px', { lineHeight: '77px', fontWeight: '700' }],
      bodyMobileS: ['14px', { lineHeight: '17px', fontWeight: '400' }],
      bodyMobileM: ['15px', { lineHeight: '24px', fontWeight: '400' }],
      headingMobileS: ['16px', { lineHeight: '19px', fontWeight: '400' }],
      headingMobileM: ['24px', { lineHeight: '25px', fontWeight: '700' }],
      headingMobileL: ['32px', { lineHeight: '39px', fontWeight: '700' }]
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      purple: '#A445ED',
      background: '#fff',
      backgroundDark: '#050505',
      dot: '#8F19E8',
      divider: '#e9e9e9',
      'text-color-primary': '#2d2d2d',
      'text-color-secondary': '#757575'
    },
    extend: {}
  },
  plugins: []
};
