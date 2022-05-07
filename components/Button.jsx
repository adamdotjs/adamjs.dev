import { styled } from '../stitches.config';

const Button = styled('button', {
	all: 'unset',
	border: '4px solid transparent',
	borderRadius: '999px',
	background: '$orange',
	padding: '$300 $500',
	fontWeight: 700,
	color: 'white',
	transition: 'all 200ms',

	'&:hover': {
		background: 'transparent',
		color: '$orange',
		border: '4px solid currentColor',
	},
});

export default Button;
