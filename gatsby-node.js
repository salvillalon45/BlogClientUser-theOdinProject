const fetch = require(`node-fetch`);
const pathTest = require(`path`);
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}` // this dotenv config gives access to process.env object
});

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

exports.sourceNodes = async ({
	actions: { createNode, createPage },
	createContentDigest
}) => {
	// get data from GitHub API at build time
	const response = await fetch(`${process.env.GATSBY_DEV_BLOG_API}/posts`);
	const postsData = await response.json();
	console.log('What are postsData');
	console.log(postsData);

	// create node for build time data example in the docs
	createNode({
		// nameWithOwner and url are arbitrary fields from the data
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

	postsData.posts.forEach((item) => {
		createPage({
			path: item._id,
			component: pathTest.resolve(`src/templates/article.js`),
			context: { slug: item._id }
		});
	});
};
