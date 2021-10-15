function getPostById(posts, postid) {
	return posts.find((post) => post._id === postid);
}

function getPostId() {
	return window.location.pathname.split('/')[2];
}

function getAuthPage() {
	return window.location.search.slice(1);
}

function checkAuthPage(authFlag) {
	if (authFlag === undefined || authFlag === null || authFlag.length === 0) {
		return true;
	}

	return !['sign-up', 'log-in'].includes(authFlag);
}

function formatDate(timestamp) {
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const messageDate = timestamp.toLocaleDateString([], options);
	return messageDate;
}

export { getPostById, formatDate, getPostId, checkAuthPage, getAuthPage };
