import React from 'react';
import IntroHeader from './IntroHeader';
import BlogGrid from './BlogGrid';

function IndexPageContent() {
	return (
		<div className='indexPageContentContainer'>
			<IntroHeader />

			<BlogGrid />
		</div>
	);
}

export default IndexPageContent;
