import React from 'react';
import { Link, navigate } from 'gatsby';

import { checkUserLoggedIn } from '../../../lib/utils';

function Header() {
	const userCheck = checkUserLoggedIn();
	const [logFlag, setLogFlag] = React.useState(userCheck);

	function handleLogout() {
		// console.log('Inside handleLogout');
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		setLogFlag(false);
		navigate('/');
	}

	React.useEffect(() => {
		console.group('Inside Use Effect in Header');
		const userCheck = checkUserLoggedIn();
		console.log({ userCheck });
		setLogFlag(userCheck);
		console.groupEnd();
	}, [logFlag]);

	return (
		<nav className='flex sm:justify-between justify-around items-center bg-linearBlue lg:px-20 sm:px-6 py-4 text-white'>
			<Link to='/'>
				<h3 className='font-lora text-2xl'>Sal Blog</h3>
			</Link>

			<ul className='flex'>
				{!logFlag && (
					<>
						<li className='font-lora mx-4 text-xl'>
							<Link to='/auth?log-in'>Log In</Link>
						</li>

						<li className='font-lora mx-4 text-xl'>
							<Link to='/auth?sign-up'>Sign Up</Link>
						</li>
					</>
				)}

				{logFlag && (
					<li className='font-lora mx-4 text-xl'>
						<button onClick={() => handleLogout()}>Log Out</button>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Header;
