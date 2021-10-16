import React from 'react';
import { graphql } from 'gatsby';
import Comments from './Comments';
import { formatDate } from '../../lib/utils';
import Errors from '../Reusable/Errors';
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

function BlogPageContent(props) {
	const {
		username,
		alt,
		image,
		slug,
		title,
		timestamp,
		content,
		_id: postid
	} = props.post;
	const [comments, setCommments] = React.useState(null);
	const [error, setError] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);

	// Client-side Runtime Data Fetching
	React.useEffect(async () => {
		try {
			const response = await fetch(
				`${process.env.GATSBY_DEV_BLOG_API}/posts/${postid}/comments`,
				{
					method: 'get',
					headers: {
						Authorization: localStorage.getItem('token'),
						'Content-Type': 'application/json'
					}
				}
			);

			const { status, statusText } = response;
			if (status === 401 && statusText === 'Unauthorized') {
				throw {
					errors: [
						'Create an account or log in to your current account to view comments and create comments!'
					]
				};
			}

			const commentsData = await response.json();
			const { comments } = commentsData;

			setCommments(comments);
			setIsLoaded(true);
		} catch (error) {
			setError(error.errors);
			setIsLoaded(true);
		}
	}, []);

	function showComments() {
		if (error) {
			return <Errors errors={error} />;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else if (comments && comments.length === 0) {
			return <div>No comments for this post</div>;
		}

		return <Comments comments={comments} />;
	}

	return (
		<div className='blogPageContentContainer'>
			<p>HI</p>
			<p>{username}</p>
			<p>{alt}</p>
			<p>{slug}</p>
			<p>{title}</p>
			<p>{timestamp}</p>
			<p>{content}</p>

			<hr />

			{isLoaded && showComments()}
		</div>
	);
}

export default BlogPageContent;
