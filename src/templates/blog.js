import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import BlogPageContent from '../components/BlogPageContent';
import { getPostById } from '../lib/utils';

function BlogTemplate(props) {
	const id = 'blogPageContainer';

	const { posts } = props.data.blogs;
	const { pathname } = props.location;
	const postid = pathname.split('/')[2];
	const post = getPostById(posts, postid);

	return (
		<Layout id={id}>
			<section>
				<Seo title={`Blog: ${post.title}`} />

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
