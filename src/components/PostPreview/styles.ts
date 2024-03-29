const sx: StyleTypes = {
	wrapper: {
		py: 6,
		maxWidth: 'spacing07',
		borderBottom: '1px solid #191917',
	},
	heading: {
		fontSize: [3, 3, 3, 3, 4],
		fontFamily: 'heading',
		letterSpacing: '0.0125rem',
		mb: 4,
		lineHeight: 1.1,
		transition: 'all 200ms ease-in-out',

		'&:hover': {
			opacity: '.7',
		},
	},
	category: {
		fontSize: 0,
		textTransform: 'uppercase',
		letterSpacing: '0.05rem',
		mb: 3,
		display: 'block',
	},
	text: {
		fontSize: [1, 1, 1, 1, 2],
		lineHeight: 1.5,
	},
	readMore: {
		mt: 6,
		color: 'text',
	},
};

export default sx;
