import React from 'react';

import IntroHeader from './IntroHeader';
import BlogGrid from './BlogGrid';

function IndexPageContent() {
	return (
		<div className='IndexPageContentContainer'>
			<IntroHeader />
			<h1>INDEX PAGE </h1>
			<BlogGrid />
		</div>
	);
}

export default IndexPageContent;
