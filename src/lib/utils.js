function getPostById(posts, postid) {
	return posts.find((post) => post._id === postid);
}

function getPostId() {
	return window.location.pathname.split('/')[2];
}

function checkAuthPage() {
	return window.location.search.slice(1);
}

function formatDate(timestamp) {
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const messageDate = timestamp.toLocaleDateString([], options);
	return messageDate;
}

export { getPostById, formatDate, getPostId, checkAuthPage };
