import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
	/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
	'*': {
		margin: 0,
	},
	html: {
		scrollBehavior: 'smooth',
	},
	'html, body': {
		height: '100%',
	},
	body: {
		backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1073%26quot%3b)' fill='none'%3e%3cpath d='M1419.059%2c278.419C1463.661%2c275.265%2c1504.955%2c256.845%2c1529.442%2c219.433C1556.742%2c177.723%2c1571.461%2c125.236%2c1548.166%2c81.164C1523.602%2c34.691%2c1471.612%2c11.785%2c1419.059%2c10.599C1364.129%2c9.36%2c1308.503%2c28.466%2c1279.449%2c75.1C1248.82%2c124.262%2c1245.078%2c189.471%2c1277.866%2c237.221C1307.611%2c280.539%2c1366.643%2c282.125%2c1419.059%2c278.419' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M244.5462825064228 372.09746020247366L125.59212712438027 420.1580586488891 173.65272557079572 539.1122140309317 292.60688095283825 491.0516155845162z' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M562.42 522.02 a167.59 167.59 0 1 0 335.18 0 a167.59 167.59 0 1 0 -335.18 0z' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M554.315560540068 55.492073584928804L491.0994091568589-17.22978979241566 481.5936971627235 118.7082249681379z' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-116.97 117.63 a128.34 128.34 0 1 0 256.68 0 a128.34 128.34 0 1 0 -256.68 0z' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1027.1517354889677 281.53345249662715L933.3399873250779 342.3284834506793 1019.6223097274672 388.2056080576862z' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M473.85377032426766 274.42558073033183L406.51299748100377 344.15899236361633 476.2464091142883 411.4997652068802 543.5871819575522 341.7663535735957z' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1419.2557358157217 68.79415239441593L1354.0055428712278 51.31041588896387 1360.4050345852968 157.9275735584306z' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M336.6389547203578 293.1709398026631L247.85976859701378 239.82702307182763 283.2950379895223 381.9501259260071z' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M736.5514473105512 374.5289623110916L774.0842844187302 467.4259940089607 866.9813161165994 429.8931569007817 829.4484790084203 336.9961252029126z' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M422.29 44 a115.09 115.09 0 1 0 230.18 0 a115.09 115.09 0 1 0 -230.18 0z' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1133.5111109644263-13.543025531771008L1002.5357868868132-92.24093983438091 923.8378725842033 38.73438424323213 1054.8131966618164 117.43229854584203z' fill='rgba(46%2c 52%2c 64%2c 0.12549019607843137)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1073'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		backgroundColor: '$base200',
		color: '$base900',
		fontSize: '$400',
		fontFamily: '$sans',
		lineHeight: '1.5',
		fontSmooth: 'antialiased',
	},
	'img, picture, video, canvas, svg': {
		display: 'block',
		maxWidth: '100%',
	},
	'input, button, textarea, select': {
		font: 'inherit',
	},
	'p, h1, h2, h3, h4, h5, h6': {
		overflowWrap: 'break-word',
	},
	'#root, #__next': {
		isolation: 'isolate',
	},
	a: {
		cursor: 'pointer',
		color: 'CurrentColor',
		transition: 'color 200ms',
		'&:hover': {
			color: '$orange',
		},
	},
});
