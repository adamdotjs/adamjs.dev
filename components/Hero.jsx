import { styled } from '@stitches/react';
import {
	BsTwitter,
	BsGithub,
	BsLinkedin,
	BsMailbox,
	BsFillFileEarmarkPersonFill,
} from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import nameGraphic from '../public/layers/name.svg';

const HeroWrapper = styled('main', {
	maxWidth: '1400px',
	paddingTop: '20vh',
	height: '100vh',
	gridColumn: '1/-1',
	gridRow: '1/-1',
	zIndex: '99999',
	marginInline: 'auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '3vh',
});

const NameGraphic = styled('h1', {
	width: 'clamp(325px, 25vw, 600px)',
	marginInline: 'auto',
});

const Title = styled('h2', {
	fontSize: '$500',
	color: 'black',
	textShadow: '0px 3px 0px rgba(255, 255, 255, 0.8)',
	fontFamily: '$sans',
});

const Socials = styled('ul', {
	display: 'flex',
	fontSize: '36px',
	color: 'white',
	padding: 0,
});

const Social = styled('li', {
	cursor: 'pointer',
	width: '60px',
	height: '60px',
	border: '6px solid black',
	borderRadius: '12px',
	display: 'grid',
	placeContent: 'center',
	background: '#00bb00',
	boxShadow: 'inset 3px 3px 0px rgba(255, 255, 255, 0.8), inset -4px -4px 0px rgba(0, 0, 0, 0.25)',
	transition: 'all 100ms',

	'&:hover': {
		transform: 'translateY(-5px)',
	},
});

const Hero = () => {
	return (
		<HeroWrapper>
			<NameGraphic>
				<Image src={nameGraphic} alt="Adam Shea" />
			</NameGraphic>
			<Title>Creative, detail-obsessed front-end web developer.</Title>
			<Socials>
				<Link href="https://github.com/adamdotjs" passHref>
					<a>
						<Social>
							<BsGithub />
						</Social>
					</a>
				</Link>
				<Link href="https://www.linkedin.com/in/adamdotjs/" passHref>
					<a>
						<Social>
							<BsLinkedin />
						</Social>
					</a>
				</Link>
				<Link href="https://twitter.com/adamdotjs" passHref>
					<a>
						<Social>
							<BsTwitter />
						</Social>
					</a>
				</Link>
				<Link href="mailto:adamdotjs@gmail.com" passHref>
					<a>
						<Social>
							<BsMailbox />
						</Social>
					</a>
				</Link>
				<Link href="/Adam_Shea.pdf" target="_blank" rel="noopener noreferrer" passHref>
					<a>
						<Social>
							<BsFillFileEarmarkPersonFill />
						</Social>
					</a>
				</Link>
			</Socials>
		</HeroWrapper>
	);
};

export default Hero;
