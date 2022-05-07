import Flex from './Flex';
import { styled } from '../stitches.config';
import { motion } from 'framer-motion';
import Box from './Box';
import Link from 'next/link';

const NavLink = styled('a', {
	fontWeight: '700',
	textDecoration: 'none',
});

const Nav = () => {
	return (
		<Box
			as={motion.header}
			initial={{ y: '-500%' }}
			animate={{ y: '0' }}
			transition={{ delay: 0.6 }}
		>
			<Flex as="nav" css={{ gap: '$600', justifyContent: 'flex-end' }}>
				<Link href="/blog" passHref>
					<NavLink>Blog</NavLink>
				</Link>
				<Link href="/projects" passHref>
					<NavLink>Projects</NavLink>
				</Link>
				<Link href="/resume" passHref>
					<NavLink>Resume</NavLink>
				</Link>
			</Flex>
		</Box>
	);
};

export default Nav;
