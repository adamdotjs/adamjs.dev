import { css } from '../stitches.config';
import { motion } from 'framer-motion';
import Box from '../components/Box';
import Flex from '../components/Flex';
import Grid from '../components/Grid';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Container from '../components/Container';
import Stack from '../components/Stack';
import Nav from '../components/Nav';
import Socials from '../components/Socials';
import Button from '../components/Button';
import Bouncer from '../components/Bouncer';

export default function Home() {
	return (
		<Container>
			<Grid>
				<Box css={{ marginBlockStart: '$700' }}>
					<Box css={{ marginLeft: 'flex-end' }}>
						<Nav />
					</Box>
					<Heading
						css={{ fontSize: '$800', marginBlockStart: '$700' }}
						as={motion.h1}
						initial={{ y: '-200%' }}
						animate={{ y: '0' }}
					>
						Hey,
					</Heading>
					<Heading
						css={{ fontSize: '$900' }}
						as={motion.h1}
						initial={{ y: '-300%' }}
						animate={{ y: '0' }}
						transition={{ delay: 0.25 }}
					>
						I&apos;m Adam
					</Heading>
				</Box>
				<Stack
					css={{
						marginTop: '$700',
						'@bp3': {
							gridColumn: '5 / -1',
						},
					}}
				>
					<Bouncer />
					<Text>
						I&apos;m a software engineer based in the US and specialise in front end web
						development.
					</Text>
					<Text>
						I&apos;ve always loved to build things and make them work, so I decided pursuing
						software engineering would be a great way to do it professionally. Outside of web
						development, I have almost fifteen years of experience with project management, problem
						solving and creating solutions to make life easier for myself and those I work with.
					</Text>
				</Stack>
			</Grid>
			<Flex
				as="footer"
				direction={{ '@initial': 'column', '@bp3': 'row' }}
				css={{
					marginBlockStart: '$700',
					gap: '$600',
					justifyContent: 'space-between',
					paddingBottom: '$600',
				}}
			>
				<Socials />
				<Button as="a" href="mailto:adamdotjs@gmail.com">
					Get in touch
				</Button>
			</Flex>
		</Container>
	);
}
