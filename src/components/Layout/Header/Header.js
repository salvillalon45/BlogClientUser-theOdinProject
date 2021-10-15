import React from 'react';
import { Link } from 'gatsby';

function Header() {
	return (
		<header>
			<nav className='flex sm:justify-between justify-around items-center bg-white lg:px-20 sm:px-6 py-8 text-black'>
				<Link to='/'>
					<h3 className='font-lora text-2xl'>Sal Blog</h3>
				</Link>

				<ul className='flex'>
					<li className='font-lora mx-4 text-xl'>
						<Link to='/auth?log-in'>Log In</Link>
					</li>
					<li className='font-lora mx-4 text-xl'>
						<Link to='/auth?sign-up'>Sign Up</Link>
					</li>
					<li className='font-lora mx-4 text-xl'>
						<Link to='/log-out'>Log Out</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
