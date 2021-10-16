import React from 'react';

import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

import { checkUserLoggedIn } from '../../../lib/utils';

function Comments(props) {
	const userCheck = checkUserLoggedIn();
	const { comments } = props;
	const [currentComments, setCurrentComments] = React.useState(comments);

	function handleCommmentsChange(formInput) {
		console.log('Inside handleCommentsChange');
		console.log({ formInput });
		setCurrentComments([...currentComments, formInput]);
	}

	const commentItems = currentComments.map((comment) => {
		const { timestamp, content, user_ref } = comment;
		const { username } = user_ref;
		const commentData = { timestamp, username, content };
		return (
			<>
				<hr />
				<CommentItem commentData={commentData} />
			</>
		);
	});

	return (
		<div className='commmentsContainer flex flex-col items-center'>
			<h1>Comment go here</h1>

			{commentItems}

			<CommentForm handleCommmentsChange={handleCommmentsChange} />
		</div>
	);
}

export default Comments;