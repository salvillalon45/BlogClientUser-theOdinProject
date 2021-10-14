// -----------------------------------------------
//
// Pages -> index.js
// Desc: Home Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
// import Seo from '../components/Seo';
import { graphql } from 'gatsby';

import BlogPageContent from '../components/BlogPageContent';

// Util
import { getPostById } from '../lib/utils';
// -----------------------------------------------

function BlogTemplate(props) {
	const id = 'blogPageContainer';
	// console.log('What are props in Blog Page');
	// console.log({ props });
	const { posts } = props.data.blogs;
	const { pathname } = props.location;
	const postid = pathname.split('/')[2];
	const post = getPostById(posts, postid);

	return (
		<Layout id={id}>
			<section>
				{/* <Seo title='Landing' /> */}

				<BlogPageContent post={post} />
			</section>
		</Layout>
	);
}

export const query = graphql`
	query {
		blogs {
			posts {
				title
				content
				_id
				timestamp
				author {
					username
				}
			}
		}
	}
`;

export default BlogTemplate;
