import React from 'react';

import IntroHeader from './IntroHeader';
import BlogGrid from './BlogGrid';

function IndexPageContent() {
	return (
		<div className='IndexPageContentContainer'>
			<IntroHeader />

			<BlogGrid />
		</div>
	);
}

export default IndexPageContent;
