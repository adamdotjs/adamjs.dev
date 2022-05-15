import { styled } from '../../stitches.config';

const Ground = styled('div', {
	zIndex: '99',
	height: '118px',
	bottom: '0',
	backgroundImage: 'url(./layers/ground.svg)',
	animationDuration: '15s',
});

export default Ground;
