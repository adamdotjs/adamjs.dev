import { styled } from '../stitches.config';
import { motion } from 'framer-motion';

const BouncerWrapper = styled('div', {
	display: 'flex',
	gap: '11px',
});

const Ball = styled(motion.div, {
	background: 'currentColor',
	width: '16px',
	height: '16px',
	borderRadius: '999px',
});

const Bouncer = () => {
	const animationSettings = {
		animation: {
			y: [0, -20, 0],
			scale: [1, 1.25, 1],
		},
		transition: {
			repeat: Infinity,
			repeatDelay: 3,
		},
	};

	return (
		<BouncerWrapper>
			<Ball
				animate={animationSettings.animation}
				transition={{ ...animationSettings.transition, delay: 1.2 }}
			/>
			<Ball
				animate={animationSettings.animation}
				transition={{ ...animationSettings.transition, delay: 1.4 }}
			/>
			<Ball
				animate={animationSettings.animation}
				transition={{ ...animationSettings.transition, delay: 1.6 }}
			/>
			<Ball
				animate={animationSettings.animation}
				transition={{ ...animationSettings.transition, delay: 1.8 }}
			/>
			<Ball
				animate={animationSettings.animation}
				transition={{ ...animationSettings.transition, delay: 2 }}
			/>
		</BouncerWrapper>
	);
};

export default Bouncer;
