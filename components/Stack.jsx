import { styled } from '../stitches.config';

const Stack = styled('div', {
	'& > * + *': {
		marginBlockStart: '$400',
	},
});

export default Stack;
