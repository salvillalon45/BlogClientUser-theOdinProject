import React from 'react';
import { graphql } from 'gatsby';
import Comments from './Comments';
import { formatDate } from '../../lib/utils';
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}` // this dotenv config gives access to process.env object
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
				`${process.env.GATSBY_DEV_BLOG_API}/posts/${postid}/comments`
			);
			const commentsData = await response.json();
			const { comments } = commentsData;
			setCommments(comments);
			setIsLoaded(true);
		} catch (err) {
			setIsLoaded(true);
			setError(error);
		}
	}, []);

	console.log('What are comments');
	console.log(comments);

	function showComments() {
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else if (setCommments.length === 0) {
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
			{showComments()}
		</div>
	);
}

export default BlogPageContent;
