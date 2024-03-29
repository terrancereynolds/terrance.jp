module.exports = {
	siteMetadata: {
		title: `Terrance Reynolds | Developer & Designer | Tokyo`,
		description: `With over six years of design and development experience, 
		my work focuses on creating well-crafted UI's for the web.`,
		author: `Terrance Reynolds`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-theme-ui',

		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.mdx', '.md', '.markdown'],
			},
		},
		{
			resolve: 'gatsby-plugin-page-creator',

			options: {
				path: `${__dirname}/src/posts`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-transition-link`,

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Terrance Reynolds`,
				short_name: `Terrance`,
				start_url: `/`,
				background_color: `#0B0B0B`,
				theme_color: `#0B0B0B`,
				display: `standalone`,
				scope: '/',
				icons: [
					{
						src: '/icon-512.png',
						sizes: `512x512`,
						type: 'image/png',
						purpose: 'any maskable',
					},
					{
						src: '/icon-192.png',
						sizes: `192x192`,
						type: 'image/png',
						purpose: 'any maskable',
					},
				], // This path is relative to the root of the site.
			},
		},

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
	],
};
