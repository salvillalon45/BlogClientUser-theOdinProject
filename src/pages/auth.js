import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import AuthPageContent from '../components/AuthPageContent';

function AuthPage(props) {
	const id = 'authPageContentContainer';
	const authFlag = props.location.search.split('?')[1];

	return (
		<Layout id={id}>
			<section>
				<Seo title='Get Started' />

				<AuthPageContent authFlag={authFlag} />
			</section>
		</Layout>
	);
}

export default AuthPage;
