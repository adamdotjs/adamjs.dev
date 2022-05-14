import { globalStyles } from '../styles/globalStyles';
import { MotionConfig } from 'framer-motion';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';

function MyApp({ Component, pageProps }) {
	globalStyles();
	return (
		<MotionConfig reducedMotion="user">
			<Component {...pageProps} />
		</MotionConfig>
	);
}

export default MyApp;
