module.exports = {
	siteMetadata: {
		title: 'A Movie a Minute',
		description: 'Got a minute?',
		author: '@zkirby',
	},
	plugins: [
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
		'gatsby-plugin-gatsby-cloud',
	],
};
