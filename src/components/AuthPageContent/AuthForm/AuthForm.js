import React from 'react';
import { Link } from 'gatsby';

function AuthForm(props) {
	const { signUpMessage } = props;
	return (
		<div className='authFormWrapperContainer w-full max-w-xs'>
			<form className='authFormContainer bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='username'
					>
						Username
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='username'
						name='username'
						type='text'
						placeholder='Username'
						onChange={(event) => props.handleChange(event)}
					/>
				</div>
				<div className='mb-6'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='password'
					>
						Password
					</label>
					<input
						className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						id='password'
						name='password'
						type='password'
						placeholder='******************'
						onChange={(event) => props.handleChange(event)}
					/>
					<p className='text-red-500 text-xs italic'>
						Please choose a password.
					</p>
				</div>
				<div className='flex items-center justify-between'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='button'
						onClick={() => props.handleSubmit()}
					>
						Sign In
					</button>
				</div>
			</form>

			{signUpMessage && (
				<div className='nextStepContainer'>
					<p className='text-center text-gray-500 text-xs'>
						{signUpMessage}
						<Link to='/auth?log-in'>Log In</Link>
					</p>
				</div>
			)}
		</div>
	);
}

export default AuthForm;
