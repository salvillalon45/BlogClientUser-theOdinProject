import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

function BlogItem({ username, alt, image, slug, title, timestamp }) {
	return (
		<div className='hover:opacity-50'>
			<Link to={`/${slug}`}>
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
