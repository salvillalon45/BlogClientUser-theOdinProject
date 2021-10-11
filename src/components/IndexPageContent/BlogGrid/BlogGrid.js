import React from 'react';
import BlogItem from '../BlogItem';

function BlogGrid() {
	const [error, setError] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [postsData, setPostsData] = React.useState([]);

	// Client-side Runtime Data Fetching
	React.useEffect(async () => {
		try {
			const response = await fetch(
				`${process.env.GATSBY_DEV_BLOG_API}/posts`
			);
			const postsData = await response.json();
			console.log({ postsData });
			setIsLoaded(true);
			setPostsData(postsData);
		} catch (err) {
			setIsLoaded(true);
			setError(err);
		}
	}, []);
	const { posts } = postsData;

	// const blogItems = posts.map((blogItem, index) => {
	// 	console.log(blogItem);
	// 	return <BlogItem alt={'yes'} image='image' slug='slug' title='ewre' />;
	// });

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className='blogGridContainer'>
				<div className='px-10 py-12'>
					<h3 className='text-2x1 font-rammetto'>The Blogs</h3>
					<div className='grid md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 mt-8'>
						{posts &&
							posts.map((post, index) => {
								const { title, content, timestamp, _id } = post;
								const { username } = post.author;
								console.log(post._id);
								return (
									<BlogItem
										alt={`A Blog Made By ${username}`}
										image='image'
										slug='slug'
										title={title}
										timestamp={timestamp}
										username={username}
										postid={_id}
									/>
								);
							})}
					</div>
				</div>
			</div>
		);
		// return 'hi';
	}
}

export default BlogGrid;
