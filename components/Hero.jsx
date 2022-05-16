import { styled } from '@stitches/react';
import Image from 'next/image';
import nameGraphic from '../public/layers/name.svg';
import SocialButtons from './SocialButtons';

const HeroWrapper = styled('main', {
	maxWidth: '1400px',
	paddingTop: '18vh',
	height: '100vh',
	gridColumn: '1/-1',
	gridRow: '1/-1',
	zIndex: '99999',
	marginInline: 'auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '4vh',
});

const NameGraphic = styled('h1', {
	width: 'clamp(350px, 30vw, 650px)',
	marginInline: 'auto',
});

const Title = styled('h2', {
	fontSize: '$500',
	color: 'black',
	textShadow: '0px 3px 0px rgba(255, 255, 255, 0.8)',
	fontFamily: '$sans',
});

const Hero = () => {
	return (
		<HeroWrapper>
			<NameGraphic>
				<Image src={nameGraphic} alt="Adam Shea" />
			</NameGraphic>
			<Title>Hi! I&apos;m Adam, a front-end dev who loves to build things.</Title>
			<SocialButtons />
		</HeroWrapper>
	);
};

export default Hero;
