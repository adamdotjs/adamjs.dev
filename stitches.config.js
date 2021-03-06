import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, theme, createTheme, getCssText } = createStitches(
	{
		theme: {
			colors: {
				blue: '#0B9BD7',
				green: '#45AF4A',
				yellow: '#FACF07',
				gold: '#00bb00',
				orange: '#EA580C',
				red: '#E52927',
			},
			space: {
				100: 'clamp(0.25rem, calc(0.23rem + 0.09vw), 0.31rem)',
				200: 'clamp(0.50rem, calc(0.46rem + 0.18vw), 0.63rem)',
				300: 'clamp(0.75rem, calc(0.70rem + 0.27vw), 0.94rem)',
				400: 'clamp(1.00rem, calc(0.93rem + 0.36vw), 1.25rem)',
				500: 'clamp(1.50rem, calc(1.39rem + 0.54vw), 1.88rem)',
				600: 'clamp(2.00rem, calc(1.85rem + 0.72vw), 2.50rem)',
				700: 'clamp(3.00rem, calc(2.78rem + 1.08vw), 3.75rem)',
				800: 'clamp(4.00rem, calc(3.71rem + 1.43vw), 5.00rem)',
				900: 'clamp(6.00rem, calc(5.56rem + 2.15vw), 7.50rem)',
			},
			fontSizes: {
				200: 'clamp(0.48rem, calc(0.59rem + -0.12vw), 0.56rem)',
				300: 'clamp(0.75rem, calc(0.74rem + 0.03vw), 0.77rem)',
				400: 'clamp(1.00rem, calc(0.93rem + 0.36vw), 1.25rem)',
				500: 'clamp(1.33rem, calc(1.13rem + 0.99vw), 2.02rem)',
				600: 'clamp(1.78rem, calc(1.34rem + 2.15vw), 3.27rem)',
				700: 'clamp(2.37rem, calc(1.52rem + 4.20vw), 5.30rem)',
				800: 'clamp(3.16rem, calc(1.58rem + 7.76vw), 8.57rem)',
				900: 'clamp(4.21rem, calc(1.40rem + 13.85vw), 13.86rem)',
			},
			fonts: {
				sans: "'IBM Plex Sans', sans-serif",
				mono: "'IBM Plex Mono', monospace",
			},
			fontWeights: {},
			lineHeights: {},
			letterSpacings: {},
			sizes: {},
			borderWidths: {},
			borderStyles: {},
			radii: {},
			shadows: {},
			zIndices: {},
			transitions: {},
		},
		media: {
			bp1: '(min-width: 640px)',
			bp2: '(min-width: 768px)',
			bp3: '(min-width: 1024px)',
			bp4: '(min-width: 1440px)',
		},
	}
);
