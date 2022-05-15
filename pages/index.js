import { styled } from '../stitches.config';
import Cat from '../components/scene/Cat';
import Curtains from '../components/scene/Curtains';
import Ground from '../components/scene/Ground';
import LeftSpiral from '../components/scene/LeftSpiral';
import MiniTrees from '../components/scene/MiniTrees';
import Mountains from '../components/scene/Mountains';
import RightSpiral from '../components/scene/RightSpiral';
import Scene from '../components/scene/Scene';
import SmallSpiral from '../components/scene/SmallSpiral';
import Trees from '../components/scene/Trees';
import Hero from '../components/Hero';

const Wrapper = styled('div', {
	height: '100vh',
	backgroundImage: 'url(./layers/bg.svg)',
	position: 'relative',
	overflow: 'hidden',
	display: 'grid',
	gridTemplateColumns: '1fr',
	gridTemplateRows: '1fr',
	fontFamily: 'sans-serif',
	textAlign: 'center',
});

const Game = () => {
	return (
		<Wrapper>
			<Hero />
			<Scene>
				<Cat />
				<Curtains />
				<Trees />
				<MiniTrees />
				<Mountains />
				<LeftSpiral />
				<RightSpiral />
				<SmallSpiral />
				<Ground />
			</Scene>
		</Wrapper>
	);
};

export default Game;
