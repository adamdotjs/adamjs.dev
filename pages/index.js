import { css } from '../stitches.config';
import { motion } from 'framer-motion';
import Box from '../components/Box';
import Bouncer from '../components/Bouncer';
import Flex from '../components/Flex';
import Grid from '../components/Grid';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Container from '../components/Container';
import Stack from '../components/Stack';
import Nav from '../components/Nav';
import Socials from '../components/Socials';
import Button from '../components/Button';

export default function Home() {
	return (
		<Container>
			<Grid>
				<Box css={{ marginBlockStart: '$700' }}>
					<Box css={{ marginLeft: 'flex-end' }}>
						<Nav />
					</Box>
					<Heading
						css={{ fontSize: '$900', textTransform: 'uppercase', marginBlockStart: '$700' }}
						as={motion.h1}
						initial={{ y: '-200%' }}
						animate={{ y: '0' }}
					>
						Hey,
					</Heading>
					<Heading
						css={{ fontSize: '$900', textTransform: 'uppercase' }}
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
					<Text>
						I&apos;m a US based junior software engineer. I specialise in front end web development
						for mobile and web-based applications with a focus on user experience &amp;
						accessibility. I&apos;ve always had a passion for building things and decided being a
						developer would be a great way to do it professionally.
					</Text>
					<Text>
						I&apos;m currently open for work opportunities and am looking for a home I can continue
						to grow and learn. I was with my previous company in the commercial printing industry
						for almost fifteen years and have experience with product management, problem solving
						and developing solutions to make life easier.
					</Text>
				</Stack>
			</Grid>
			<Flex
				as="footer"
				direction={{ '@initial': 'column', '@bp3': 'row' }}
				css={{
					marginBlockStart: '$900',
				}}
			>
				<Socials />
				<Box
					css={{
						fontSize: '$400',
						fontWeight: 'bold',
						textAlign: 'center',
						marginBlockStart: '$400',
						'@bp3': {
							marginBlockStart: '0',
							marginLeft: 'auto',
						},
					}}
				>
					<Button>Get in touch</Button>
				</Box>
			</Flex>
		</Container>
	);
}
