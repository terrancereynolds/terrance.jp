const sx: StyleTypes = {
	wrapper: {
		bg: '#1C1C1C',
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		margin: 0,
		minHeight: '100vh',
	},

	heading: {
		fontSize: [4, 4, 5, 6, 6, 6, 6, 7, 8],
		lineHeight: '1.0',
		//letterSpacing: ['auto', '.1rem'],
	},
	text: {
		fontFamily: 'body',
		fontSize: [1, 1, 1, 1, 1, 2, 2, 2, 3],
		mt: [4, 4, 4, 4, 4, 4, 4, 4, 5],
		lineHeight: '1.4',
		maxWidth: [
			'md',
			'spacing01',
			'spacing01',
			'spacing03',
			'spacing03',
			'spacing02',
			'spacing02',
			'spacing03',
			'spacing05',
		],
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: '2fr 2fr',
		alignItems: 'center',
		height: '100%',
	},
	label: {
		fontSize: ['.625rem', '.625rem', '.625rem', '.750rem'],
		textTransform: 'uppercase',
		color: '#BABAB3',
		ml: 4,
		display: 'block',
		letterSpacing: ['.075rem', '.1rem'],
	},
	row: {
		display: 'grid',
		maxWidth: [
			'spacing01',
			'spacing01',
			'spacing01',
			'spacing01',
			'spacing01',
			'spacing01',
			'spacing01',
			'spacing03',
			'md',
		],
		gridTemplateColumns: '5fr 4fr',
		columnGap: 4,
		alignItems: 'center',
		pr: 4,
	},
};

export default sx;
