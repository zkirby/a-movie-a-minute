require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: 'A Movie a Minute',
		description: 'Got a minute?',
		author: '@zkirby',
	},
	plugins: [
		'gatsby-plugin-use-query-params',
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-gatsby-cloud',
	],
};
