import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
	/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
	'*': {
		margin: 0,
	},
	html: {
		scrollBehavior: 'smooth',
	},
	'html, body': {
		height: '100%',
	},
	body: {
		backgroundColor: '$base200',
		color: '$base900',
		fontSize: '$400',
		fontFamily: '$sans',
		fontWeight: '500',
		lineHeight: '1.5',
		fontSmooth: 'antialiased',
	},
	'img, picture, video, canvas, svg': {
		display: 'block',
		maxWidth: '100%',
	},
	'input, button, textarea, select': {
		font: 'inherit',
	},
	'p, h1, h2, h3, h4, h5, h6': {
		overflowWrap: 'break-word',
	},
	'#root, #__next': {
		isolation: 'isolate',
	},
	a: {
		cursor: 'pointer',
		color: 'CurrentColor',
	},
});
