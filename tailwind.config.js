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
      backgroundPrimary: '#ffffff',
      backgroundSecondary: '#f4f4f4',
      backgroundPrimaryDark: '#050505',
      backgroundSecondaryDark: '#1f1f1f',
      dot: '#8F19E8',
      error: '#ff5252',
      divider: '#e9e9e9',
      dividerDark: '#3a3a3a',
      iconColor: '#838383',
      textColorPrimary: '#2d2d2d',
      textColorSecondary: '#757575'
    },
    extend: {}
  },
  plugins: []
};
