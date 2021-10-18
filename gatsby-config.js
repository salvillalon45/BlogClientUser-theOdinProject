require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: 'Sal Blog',
		titleTemplate: '%s · Sal Blog',
		description: 'A blog made by Salvador Villalon',
		url: 'https://www.doe.com', // No trailing slash allowed!
		image: '/images/sal.png', // Path to your image you placed in the 'static' folder
		twitterUsername: '@salvillalon45'
	},
	plugins: [
		'gatsby-plugin-image',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `src/images/logo.png` // This path is relative to the root of the site.
			}
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-plugin-postcss',
		'gatsby-transformer-sharp'
	]
};
