import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { GatsbyImage } from 'gatsby-plugin-image';

const Article = ({ data }) => {
	console.log('Article');
	console.log({ data });
	return (
		<Layout>
			<h1>HI</h1>
			{/* <div className='w-4/5 mx-auto mt-9 article'>
				<GatsbyImage
					image={image.childImageSharp.gatsbyImageData}
					className=' md:h-96 h-60'
				/>

				<section className='py-10'>
					<span className='bg-gray-200 py-1 px-2 font-semibold'>
						{tag}
					</span>
					<h2
						className='font-semibold md:text-3xl text-xl
 py-4 capitalize'
					>
						{title}
					</h2>

					<div dangerouslySetInnerHTML={{ __html: html }}></div>

					<p className='pt-8'>Published in the {tag} category</p>
				</section>
			</div> */}
		</Layout>
	);
};

export default Article;

// export const query = graphql`
// 	query ($characterID: ID!) {
// 		rickandmorty {
// 			character(id: $characterID) {
// 				image
// 				name
// 				species
// 			}
// 		}
// 	}
// `;
// blogs(id: { eq: $slug }) {
export const query = graphql`
	query BlogItemQuery($slug: String) {
		blogs(_id: { eq: $slug }) {
			posts {
				title
				content
				_id
				timestamp
				author {
					username
				}
			}
		}
	}
`;
