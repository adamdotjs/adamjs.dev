import { styled, keyframes } from '../../stitches.config';

const walk = keyframes({
	'0%': { backgroundPosition: '0 0' },
	'100%': { backgroundPosition: '-1000px 0' },
});

const Cat = styled('div', {
	height: '166px',
	width: '250px',
	left: '50%',
	transform: 'translateX(-50%)',
	overflow: 'hidden',
	bottom: '105px',
	zIndex: '9999',
	backgroundImage: 'url(./layers/cat.svg)',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	animation: `${walk} 0.8s steps(4) infinite reverse`,

	'@media (prefers-reduced-motion)': {
		animation: 'none',
	},
});

export default Cat;
