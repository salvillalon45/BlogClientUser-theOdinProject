import React from 'react';
import { Link } from 'gatsby';

function Header() {
	const linkStyle = `
     Hover:opacity-70
     text-sm
     sm:text-lg
    `;

	const logoStyle = `
    text-white 
    font-rammetto
    sm:text-base
    text-sm
    `;

	return (
		<header>
			<nav className='flex sm:justify-between justify-around items-center bg-blue lg:px-20 sm:px-6 py-8 text-gray-100'>
				<h3 className='font-lora text-2xl'>Sal Blog</h3>

				<ul className='flex'>
					<li className='font-lora mx-4 text-xl'>
						<Link to='/'>Log In</Link>
					</li>
					<li className='font-lora mx-4 text-xl'>
						<Link to='/contact'>Sign Up</Link>
					</li>
					<li className='font-lora mx-4 text-xl'>
						<Link to='/about'>Log Out</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;