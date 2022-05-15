import { styled, keyframes } from '../../stitches.config';

const parallax = keyframes({
	'0%': { transform: 'translateX(0)' },
	'100%': { transform: 'translateX(-2560px)' },
});

const Scene = styled('div', {
	gridColumn: '1/-1',
	gridRow: '1/-1',
	width: '100vw',
	height: '100vh',
	position: 'relative',

	'& > *': {
		position: 'absolute',
		width: '5120px',
		backgroundRepeat: 'repeat-x',
		animation: `${parallax} linear infinite`,
		willChange: 'transform',

		'@media (prefers-reduced-motion)': {
			animation: 'none',
		},
	},
});

export default Scene;
