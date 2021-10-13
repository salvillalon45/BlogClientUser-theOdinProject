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
// import Seo from '../components/Seo';
import BlogPageContent from '../components/BlogPageContent';
// -----------------------------------------------

function BlogPage(props) {
	const id = 'blogPageContainer';
	console.log({ props });
	const { postDetail } = props.location.state ?? {};

	return (
		<Layout id={id}>
			<section>
				{/* <Seo title='Landing' /> */}

				<BlogPageContent postDetail={postDetail} />
			</section>
		</Layout>
	);
}

export default BlogPage;
