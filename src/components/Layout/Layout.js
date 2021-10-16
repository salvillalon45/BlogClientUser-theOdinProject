import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Styling
import '../../styles/global.css';

import { checkUserLoggedIn } from '../../lib/utils';

function Layout({ children }) {
	// const userCheck = checkUserLoggedIn();
	// console.log({ userCheck });

	return (
		<>
			{/* <Header userCheck={userCheck} /> */}
			<Header />

			<main>{children}</main>

			<Footer />
		</>
	);
}

export default Layout;
