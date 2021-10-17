// -----------------------------------------------
//
// Pages -> index.js
// Desc: Home Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import AuthPageContent from '../components/AuthPageContent';

function AuthPage() {
	const id = 'authPageContentContainer';

	return (
		<Layout id={id}>
			<section>
				<Seo title='Get Started' />

				<AuthPageContent />
			</section>
		</Layout>
	);
}

export default AuthPage;
