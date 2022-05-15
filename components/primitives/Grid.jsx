import { styled } from '../stitches.config';

const GridWrapper = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'repeat(12, 1fr)',

	// by default, set all children to span the grid
	'& *': {
		gridColumn: '1 / -1',
	},
});

const Grid = ({ children }) => {
	return <GridWrapper>{children}</GridWrapper>;
};

export default Grid;
