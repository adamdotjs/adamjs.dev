import * as Tooltip from '@radix-ui/react-tooltip';
import { styled } from '@stitches/react';
import Link from 'next/link';
import {
	RiGithubFill,
	RiLinkedinBoxFill,
	RiTwitterFill,
	RiMailSendLine,
	RiFileUserLine,
} from 'react-icons/ri';

const SocialIcon = styled('div', {
	cursor: 'pointer',
	display: 'grid',
	placeContent: 'center',
	width: '60px',
	height: '60px',
	border: '6px solid black',
	borderRadius: '12px',
	background: '$gold',
	color: 'white',
	boxShadow: 'inset 3px 3px 0px rgba(255, 255, 255, 0.8), inset -4px -4px 0px rgba(0, 0, 0, 0.25)',
	transition: 'transform 100ms',
	textShadow: '4px 4px black',

	'&:hover': {
		transform: 'translateY(-5px)',
	},
});

const SocialButtonsWrapper = styled('ul', {
	display: 'flex',
	padding: 0,
	fontSize: '36px',
	listStyle: 'none',
});

const TooltipContent = styled(Tooltip.Content, {
	padding: '$200 $400',
	borderRadius: '4px',
	fontSize: '$400',
	lineHeight: 1,
	backgroundColor: '$yellow',
	color: 'black',
	border: '4px solid black',
	boxShadow: '0px 4px 0px black',

	'&::before': {
		display: 'block',
		content: '',
		position: 'absolute',
		left: '50%',
		top: '-15px',
		width: '4px',
		height: '15px',
		background: 'black',
		transform: 'translateX(-50%)',
	},
});

const SocialButton = ({ link, icon, tooltip }) => {
	return (
		<Tooltip.Root delayDuration={0}>
			<Tooltip.Trigger asChild>
				<li>
					<Link href={link}>
						<a>
							<SocialIcon>{icon}</SocialIcon>
						</a>
					</Link>
				</li>
			</Tooltip.Trigger>
			<TooltipContent sideOffset={10}>{tooltip}</TooltipContent>
		</Tooltip.Root>
	);
};

const SocialButtons = () => {
	return (
		<SocialButtonsWrapper>
			<SocialButton
				link="https://github.com/adamdotjs"
				icon={<RiGithubFill title="Projects" />}
				tooltip="See my projects"
			/>
			<SocialButton
				link="https://www.linkedin.com/in/adamdotjs/"
				icon={<RiLinkedinBoxFill title="LinkedIn" />}
				tooltip="Connect on LinkedIn"
			/>
			<SocialButton
				link="https://twitter.com/adamdotjs"
				icon={<RiTwitterFill title="Twitter" />}
				tooltip="Follow me on Twitter"
			/>
			<SocialButton
				link="mailto:adamdotjs@gmail.com"
				icon={<RiMailSendLine title="E-mail" />}
				tooltip="Send me an e-mail"
			/>
			<SocialButton
				link="/adam-shea-resume.pdf"
				icon={<RiFileUserLine title="Resume" />}
				tooltip="See my resume"
			/>
		</SocialButtonsWrapper>
	);
};

export default SocialButtons;
