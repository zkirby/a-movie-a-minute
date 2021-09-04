module.exports = {
	siteMetadata: {
		title: 'A Movie a Minute',
		description: 'Got a minute?',
		author: '@zkirby',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-image',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
		},
		'gatsby-plugin-gatsby-cloud',
	],
};
