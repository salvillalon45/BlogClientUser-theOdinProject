import React from 'react';
import { getPostId } from '../../../../lib/utils';
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

function CommentForm(props) {
	const [name, setName] = React.useState('');
	const [content, setContent] = React.useState('');

	function handleChange(event) {
		const { name, value } = event.target;

		if (name === 'comment') {
			setContent(value);
		} else {
			setName(value);
		}
	}

	async function handleSubmit() {
		try {
			// Will come from localstorage
			const { username, user_ref } = JSON.parse(
				localStorage.getItem('user')
			);
			const formInput = {
				user_ref: user_ref,
				content,
				timestamp: String(new Date())
			};
			props.handleCommmentsChange(formInput);
			const postid = getPostId();
			// const user_ref = '61609beae78c285ad1f6e775';
			const newCommentBody = { content, user_ref };
			const response = await fetch(
				`${process.env.GATSBY_DEV_BLOG_API}/posts/${postid}/comments`,
				{
					method: 'post',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newCommentBody)
				}
			);
		} catch (err) {
			return <div>Error Occurred</div>;
		}
	}

	return (
		<div className='commentFormWrapperContainer w-full max-w-xs m-auto'>
			<form className='commentFormContainer bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						for='name'
					>
						Name
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='name'
						name='name'
						type='text'
						placeholder='Name'
						// value={name}
						onChange={(event) => handleChange(event)}
					/>
				</div>
				<div className='mb-6'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						for='comment'
					>
						Your Comment
					</label>
					<textarea
						className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						id='comment'
						name='comment'
						type='text'
						placeholder='Your comment here'
						// value={content}
						onChange={(event) => handleChange(event)}
					/>
				</div>
				<div className='flex items-center justify-between'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='button'
						onClick={() => handleSubmit()}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default CommentForm;
