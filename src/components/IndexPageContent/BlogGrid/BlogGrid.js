import React from 'react';
import BlogItem from '../BlogItem';
import { graphql, useStaticQuery } from 'gatsby';

function BlogGrid(props) {
	const data = useStaticQuery(graphql`
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
	`);
	const { posts } = data?.blogs;

	const blogItems = posts.map((post, index) => {
		const { title, content, timestamp, _id } = post;
		const { username } = post.author;

		return (
			<BlogItem
				alt={`A Blog Made By ${username}`}
				image='image'
				slug={_id}
				title={title}
				timestamp={timestamp}
				username={username}
				postid={_id}
				content={content}
			/>
		);
	});

	return (
		<div className='blogGridContainer'>
			<div className='px-10 py-12'>
				<div className='grid md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 mt-8'>
					{blogItems}
				</div>
			</div>
		</div>
	);
}

export default BlogGrid;
