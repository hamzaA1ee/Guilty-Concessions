import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        customBack: '#FFFFFF',
        customCheck: 'rgba(58, 51, 53, 0.0392)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'both-custom':
          '0px 4px 4px 0px rgba(0, 0, 0, 0.25), inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        // 0.25 is the equivalent of #00000040
      },

      colors: {
        customGray: '#908E8E',
        customWhite: '#FFFFFF',
        customPurple: '#6154A4',
        customGrayTwo: '#E9E9E9',
        customBrown: '#3A3335',
      },
      width: {
        '3.5/5': '70%', // 3.5 out of 5 is 70%
      },
      margin: {
        '28.5': '84px', // Custom class for 114px
      },

      spacing: {
        '30': '120px', // Custom class for bottom-30
      },
    },
  },
  plugins: [],
};
export default config;
