import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}` // this dotenv config gives access to process.env object
});

function BlogItem(props) {
	const { username, alt, image, slug, title, timestamp } = props;
	return (
		<div className='hover:opacity-50'>
			{/* <Link to={`${process.env.GATSBY_DEV_BLOG_API}/posts/${slug}`}> */}
			<Link to={`blog/${slug}`} state={{ postDetail: props }}>
				{/* <Link to={`${slug}`} state={{ postDetail: props }}> */}
				<GatsbyImage
					image={image}
					alt={alt}
					className='max-h-[200px]'
				/>
				<h3 className='font-semibold text-black max-w-4/5 text-center mt-2 capitalize sm:text-base text-sm'>
					{title}
				</h3>
				<p>{timestamp}</p>
				<p>{username}</p>
			</Link>
		</div>
	);
}

export default BlogItem;
