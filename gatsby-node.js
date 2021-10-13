const fetch = require(`node-fetch`);
const path = require(`path`);
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}` // this dotenv config gives access to process.env object
});

// This needs to be here since due to Gatsby migration from v2 to v3
// webpack 5 node configuration changed (node.fs, node.path, …)
// Some components need you to patch/disable node APIs in the browser, like path or fs. webpack removed these automatic polyfills.
// You now have to manually set them in your configurations.
// More here https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#webpack-5-node-configuration-changed-nodefs-nodepath-
exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
	if (stage === 'build-javascript' || stage === 'develop') {
		actions.setWebpackConfig({
			plugins: [plugins.provide({ process: 'process/browser' })]
		});
	}

	actions.setWebpackConfig({
		resolve: {
			alias: {
				path: require.resolve('path-browserify')
			},
			fallback: {
				fs: false
			}
		}
	});
};

// This helps create dynamic page based on the id of the blog
// More here: https://medium.com/@ghoshanimesh/dynamic-routing-in-gatsby-b6ada258f6c2
exports.createPages = async ({ graphql, actions }) => {
	console.log('What is createPages()');
	const response = await fetch(`${process.env.GATSBY_DEV_BLOG_API}/posts`);
	const postsData = await response.json();

	postsData.posts.forEach((item) => {
		console.log({ item });
		actions.createPage({
			path: item._id,
			component: path.resolve('src/templates/article.js'),
			context: { slug: item._id }
		});
	});
};
// exports.onCreatePage = async ({ page, actions }) => {
// 	const { createPage } = actions;
// 	console.log('Page -- ', page.path);

// 	if (page.path.match(/^\/blog/)) {
// 		createPage({
// 			path: '/blog',
// 			matchPath: '/blog/*',
// 			component: path.resolve('src/pages/blog.js')
// 		});
// 	}
// };

// This retrieves the posts data at build time! Since the blogs will not be changing a lot
// It is a good idea to use at Build time
// More here: https://www.gatsbyjs.com/docs/conceptual/data-fetching/
// I had the same mistake that this person was going through. Thanks for the article: https://betterprogramming.pub/getting-gatsby-wrong-836c198eb6ea
exports.sourceNodes = async ({
	actions: { createNode },
	createContentDigest
}) => {
	// Get data from Blog API at build time
	const response = await fetch(`${process.env.GATSBY_DEV_BLOG_API}/posts`);
	const postsData = await response.json();

	// Create node for build time data. Here we are creating a GraphQL NODE!
	createNode({
		// Data for the node
		posts: postsData.posts,

		// required fields
		id: `example-build-time-data`,
		parent: null,
		children: [],
		internal: {
			type: `Blogs`,
			contentDigest: createContentDigest(postsData)
		}
	});
};
