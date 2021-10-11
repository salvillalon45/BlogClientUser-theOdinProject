import React from 'react';

function Footer() {
	return (
		<footer
			className='flex justify-end	py-8 bg-blue text-gray-100'
			id='footerContainer'
		>
			<div className='flex footerContentContainer'>
				<p className='font-lora mx-4 text-lg'>
					Made By Salvador Villalon
				</p>
				<p className='mx-4 text-lg'>
					<a href='https://www.linkedin.com/in/salvadorvillalon/'>
						<i class='bi bi-linkedin'></i>
					</a>
				</p>
				<p className='mx-4 text-lg'>
					<a href='https://github.com/salvillalon45'>
						<i class='bi bi-github'></i>
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
