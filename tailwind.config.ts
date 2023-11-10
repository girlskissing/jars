import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			snow: {
				100: '#F7F3F5',
				300: '#E4DEE1',
			},
			purple: {
				300: '#928792',
				500: '#675C64',
				700: '#473144',
				900: '#2C222A',
			},
			blush: {
				100: '#FFD1D1',
				500: '#DB5375',
			},
			teal: {
				100: '#DBF9FF',
				500: '#08717D',
			},
		},
		fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
	},
	plugins: [
		plugin(function({ addUtilities }) {
      addUtilities({
        '.font-hero': {
          'font-family': 'Itim, sans-serif',
          'letter-spacing': '-0.0125em'
        },
				'.font-display': {
					'font-family': 'Itim, sans-serif',
					'letter-spacing': '-0.021em'
				}
      })
    })
	],
};

export default config;
