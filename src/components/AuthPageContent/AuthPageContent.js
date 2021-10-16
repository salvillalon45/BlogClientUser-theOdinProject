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
		// ? : '';
		if (checkUserLoggedIn()) {
			navigate('/');
		}
	});

	async function handleSubmit() {
		try {
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
			// console.log('Wht is erspon');
			// const errorsCheck = await response.json();
			const loginData = await response.json();
			// console.log({ loginData });
			const errors = loginData.errors ?? '';
			// console.log('HERE', errors);
			if (errors) {
				setErrors(errors);
				return;
			}

			if (authFlag === 'sign-up' && !errors) {
				setErrors(null);
				setSignUpMessage('Great! Now you need to log in!');
			} else {
				setErrors(null);
				setSignUpMessage('');

				// console.log({ loginData });
				const { user, token } = loginData;
				const { username, _id: user_ref } = user;

				localStorage.setItem(
					'user',
					JSON.stringify({ username, user_ref })
				);
				localStorage.setItem('token', token);

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
			<div className='authErrorContainer'>
				<p>Looks like you are lost. See the links below</p>
				<Link to='/'>Home</Link>
				<Link to='/auth?log-in'>Log In</Link>
				<Link to='/auth?sign-up'>Sign Up</Link>
			</div>
		);
	}

	// console.log(errors);

	return (
		<div className='authPageContentContainer'>
			<h2>{authFlag === 'sign-up' ? 'Sign Up' : 'Log In'}</h2>
			<AuthForm
				signUpMessage={authFlag === 'log-in' ? '' : signUpMessage}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>

			{errors && <Errors errors={errors} />}
		</div>
	);
}

export default AuthPageContent;
