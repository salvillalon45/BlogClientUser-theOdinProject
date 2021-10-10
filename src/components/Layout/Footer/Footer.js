import React from 'react';

function Footer() {
	const logoStyle = `
    text-white 
    font-rammetto
    sm:text-base
    text-sm
    `;

	return (
		<footer className='text-center py-8 bg-green-900 text-gray-100'>
			<p>
				Copyright 2030 <span className={logoStyle}>HealthRoom</span>
			</p>
		</footer>
	);
}

export default Footer;
