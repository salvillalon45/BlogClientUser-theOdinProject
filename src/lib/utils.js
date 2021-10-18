import jwt_decode from 'jwt-decode';

function checkUserLoggedIn() {
	try {
		const token = localStorage.getItem('token') ?? '';
		const user = localStorage.getItem('user') ?? '';
		const decoded = jwt_decode(token);

		if (user === '') {
			return false;
		}

		if (token && decoded) {
			const expiry = decoded.exp;
			const now = new Date();

			if (now.getTime() > expiry * 1000) {
				// console.log('Token expired.');
				return false;
			} else {
				// console.log('Valid token');
				return true;
			}
		}

		return true;
	} catch (error) {
		return false;
	}
}

function getPostById(posts, postid) {
	return posts.find((post) => post._id === postid);
}

function getPostId() {
	return window.location.pathname.split('/')[2];
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

export { checkUserLoggedIn, getPostById, formatDate, getPostId, checkAuthPage };
