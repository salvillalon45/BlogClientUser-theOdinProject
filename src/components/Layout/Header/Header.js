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
			<nav className='flex sm:justify-between justify-around items-center bg-green-900 lg:px-20 sm:px-6 py-8 text-gray-100'>
				<h3 className={logoStyle}>HealthRoom</h3>
				<ul className='flex'>
					<li className={linkStyle}>
						<Link to='/'>Home</Link>
					</li>
					<li className={linkStyle}>
						<Link to='/contact'>Contact</Link>
					</li>
					<li className={linkStyle}>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
