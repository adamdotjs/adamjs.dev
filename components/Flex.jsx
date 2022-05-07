import { styled } from '../stitches.config';

const Flex = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	variants: {
		direction: {
			row: {
				flexDirection: 'row',
			},
			column: {
				flexDirection: 'column',
			},
		},
	},
	defaultVariants: {
		direction: 'row',
	},
});

export default Flex;
