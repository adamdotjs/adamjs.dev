import Flex from './Flex';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';

const Socials = () => {
	return (
		<Flex
			css={{
				fontSize: '$600',
				gap: '$600',
				justifyContent: 'flex-start',
			}}
		>
			<Link href="https://twitter.com/adamdotjs" passHref>
				<a>
					<BsTwitter />
				</a>
			</Link>
			<Link href="https://github.com/adamdotjs" passHref>
				<a>
					<BsGithub />
				</a>
			</Link>
			<Link href="https://www.linkedin.com/in/adam-shea-41990898/" passHref>
				<a>
					<BsLinkedin />
				</a>
			</Link>
		</Flex>
	);
};

export default Socials;
