import React from 'react';
import { checkAuthPage } from '../../lib/utils';

function AuthPageContent(props) {
	const authFlag = checkAuthPage();
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [signUpMessage, setSignUpMessage] = React.useState('');

	function handleSubmit() {
		const authData = { username, password };

		const response = await fetch(
			`${process.env.GATSBY_DEV_BLOG_API}/${authFlag}`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(authData)
			}
		);

		if (authFlag === 'sign-up') {
			setSignUpMessage('Great! Now you need to log in!');
		} else {
			// store is local storage
		}
	}

	function handleChange(event) {
		const { name, value } = event.target;

		if (name === 'username') {
			setUsername(value);
		} else {
			setPassword(value);
		}
	}

	return (
		<div className='authFormWrapperContainer w-full max-w-xs'>
			<form className='authFormContainer bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						for='username'
					>
						Username
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='username'
						name='username'
						type='text'
						placeholder='Username'
						onChange={(event) => handleChange(event)}
					/>
				</div>
				<div className='mb-6'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						for='password'
					>
						Password
					</label>
					<input
						className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						id='password'
						name='password'
						type='password'
						placeholder='******************'
						onChange={(event) => handleChange(event)}
					/>
					<p className='text-red-500 text-xs italic'>
						Please choose a password.
					</p>
				</div>
				<div className='flex items-center justify-between'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='button'
						onClick={() => handleSubmit()}
					>
						Sign In
					</button>
					<a
						className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
						href='#'
					>
						Forgot Password?
					</a>
				</div>
			</form>
			<p className='text-center text-gray-500 text-xs'>
				&copy;2020 Acme Corp. All rights reserved.
			</p>
		</div>
	);
}

export default AuthPageContent;
