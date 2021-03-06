const sx: StyleTypes = {
	wrapper: {
		height: '100%',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		minHeight: '100vh',
		zIndex: 9999,
		overflowY: 'hidden',
		margin: 0,
	},
	content: {
		width: '100%',
		position: 'fixed',
		top: '0',
		bg: 'background',
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		margin: [0],
		minHeight: '100vh',
		height: '100%',
		overflowY: 'hidden',
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		pt: [3, 3, 4, 5, 5, 6],
		position: 'relative',
	},
	menu: {
		height: '100%',
		width: '100%',
		display: 'grid',
		placeItems: 'center',
		textAlign: 'center',
		a: {
			color: 'muted',
			textDecoration: 'none',
			fontFamily: 'Founders Grotesk Condensed',
			fontSize: [3, 3, 3, 5, 6],
			display: 'inline-block',
			textTransform: 'uppercase',
			pb: [4, 4, 4, 6, 7],
		},
	},
	close: {
		cursor: 'pointer',
	},
	link: {
		position: 'relative',
		zIndex: 10,
	},
};

export default sx;
