import React from 'react';

function BlogPageContent(props) {
	const { username, alt, image, slug, title, timestamp, content } =
		props.postDetail;
	console.log('props in blog page content');
	console.log(props);
	return (
		<div className='blogPageContentContainer'>
			<p>HI</p>
			{/* <p>{username}</p>
			<p>{alt}</p>
			<p>{slug}</p>
			<p>{title}</p>
			<p>{timestamp}</p>
			<p>{content}</p> */}
		</div>
	);
}

// export const query = graphql`
// 	query ($slug: String) {
// 		blogs {
// 			posts {
// 				title
// 				content
// 				_id
// 				timestamp
// 				author {
// 					username
// 				}
// 			}
// 		}
// 	}
// `;

export default BlogPageContent;
