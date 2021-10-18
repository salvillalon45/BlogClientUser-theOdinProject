import jwt_decode from 'jwt-decode';

function checkUserLoggedIn() {
	try {
		console.group('Inside checkUserLoggedIn');
		const token = localStorage.getItem('token') ?? '';
		const user = localStorage.getItem('user') ?? '';
		const tokenArray = token.split(' ');
		console.log(tokenArray);
		var decoded = jwt_decode(token);

		console.log(decoded);

		if (user === '') {
			return false;
		}

		if (token && decoded) {
			console.log('Check for token expiration');
			const expiry = decoded.exp;
			const now = new Date();
			console.log({ expiry });
			console.log({ now });
			console.log(now.getTime() > expiry * 1000);
			if (now.getTime() > expiry * 1000) {
				console.log('Token expired.');
				return false;
			} else {
				console.log('Valid token');
				return true;
			}
		}
		console.groupEnd();
		return true;
	} catch (error) {
		console.log('What is error in checkUserLoggedIn');
		console.log(error);
		return false;
	}
}

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

export {
	checkUserLoggedIn,
	getPostById,
	formatDate,
	getPostId,
	checkAuthPage,
	getAuthPage
};
