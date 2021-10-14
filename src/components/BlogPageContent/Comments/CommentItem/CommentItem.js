import React from 'react';
import { formatDate } from '../../../../lib/utils';

function CommentItem(props) {
	const { content, timestamp, username } = props.commentData;
	return (
		<div className='commentItemContainer'>
			<p>{content}</p>
			<p>{username}</p>
			<p>{timestamp}</p>
		</div>
	);
}

export default CommentItem;
