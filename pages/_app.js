import { globalStyles } from '../styles/globalStyles';
import '@fontsource/ibm-plex-sans';

function MyApp({ Component, pageProps }) {
	globalStyles();
	return <Component {...pageProps} />;
}

export default MyApp;
