/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      serif: ['"Lora"', 'serif'],
      mono: ['"Inconsolata"', 'monospace']
    },
    fontSize: {
      bodyS: [
        '14px',
        {
          lineHeight: '15px',
          fontWeight: '400'
        }
      ],
      bodyM: [
        '18px',
        {
          lineHeight: '24px',
          fontWeight: '400'
        }
      ],
      headingS: [
        '20px',
        {
          lineHeight: '24px',
          fontWeight: '400'
        }
      ],
      headingM: [
        '24px',
        {
          lineHeight: '29px',
          fontWeight: '400'
        }
      ],
      headingL: [
        '64px',
        {
          lineHeight: '77px',
          fontWeight: '700'
        }
      ]
    },
    colors: {
      white: '#fff',
      black: '#000',
      purple: '#A445ED',
      bgLight: '#fff',
      dot: '#8F19E8',
      dividerLight: '#e9e9e9',
      textColorLight_1: '#2d2d2d',
      textColorLight_2: '#757575'
    },
    extend: {}
  },
  plugins: []
};
