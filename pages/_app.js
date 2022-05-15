import { globalStyles } from '../styles/globalStyles';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';

function MyApp({ Component, pageProps }) {
	globalStyles();
	return <Component {...pageProps} />;
}

export default MyApp;
