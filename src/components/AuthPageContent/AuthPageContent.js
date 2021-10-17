import React from 'react';
import AuthForm from './AuthForm';
import { Link, navigate } from 'gatsby';
import { getAuthPage, checkAuthPage, checkUserLoggedIn } from '../../lib/utils';
import Errors from '../Reusable/Errors';

function AuthPageContent(props) {
	const authFlag = getAuthPage();
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [signUpMessage, setSignUpMessage] = React.useState('');
	const [errors, setErrors] = React.useState(null);

	React.useEffect(() => {
		if (checkUserLoggedIn()) {
			navigate('/');
		}
	});

	async function handleSubmit() {
		try {
			const authData = { username, password };

			const response = await fetch(
				`${process.env.GATSBY_BLOG_API}/${authFlag}`,
				{
					method: 'post',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(authData)
				}
			);

			const loginData = await response.json();
			const errors = loginData.errors ?? '';

			if (errors) {
				setErrors(errors);
				return;
			}

			if (authFlag === 'sign-up' && !errors) {
				setErrors(null);
				setSignUpMessage("Let's Log In!");
				setUsername('');
				setPassword('');
			} else {
				setErrors(null);
				setSignUpMessage('');

				const { user, token } = loginData;
				const { username, _id: user_ref } = user;

				localStorage.setItem(
					'user',
					JSON.stringify({ username, user_ref })
				);
				localStorage.setItem('token', token);

				setUsername('');
				setPassword('');
				navigate('/');
			}
		} catch (err) {
			console.log(err);
			setErrors(err);
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

	if (checkAuthPage(authFlag)) {
		return (
			<>
				<Errors
					errors={['Looks like you are lost. See the links below']}
				/>

				<div className='authErrorContainer flex justify-center'>
					<Link
						to='/'
						type='button'
						className='block w-20 mx-12 font-lora p-2 rounded-lg text-white bg-linearBlue text-center mt-6 m-auto'
					>
						Home
					</Link>
					<Link
						to='/auth?log-in'
						type='button'
						className='block w-20 mx-12 font-lora p-2 rounded-lg text-white bg-linearBlue text-center mt-6 m-auto'
					>
						Log In
					</Link>
					<Link
						to='/auth?sign-up'
						type='button'
						className='block w-20 mx-12	font-lora p-2 rounded-lg text-white bg-linearBlue text-center mt-6 m-auto'
					>
						Sign Up
					</Link>
				</div>
			</>
		);
	}

	return (
		<div className='authPageContentContainer'>
			<h2 className='font-lora text-2xl text-center my-6'>
				{authFlag === 'sign-up' ? 'Sign Up' : 'Log In'}
			</h2>

			<AuthForm
				signUpMessage={authFlag === 'log-in' ? '' : signUpMessage}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				buttonMessage={authFlag === 'sign-up' ? 'Sign Up' : 'Log In'}
				username={username}
				password={password}
			/>

			{errors && <Errors errors={errors} />}
		</div>
	);
}

export default AuthPageContent;
