import api from '../shared/api/requests';

export function getAllPosts() {
	return api.get('/api/get-posts').json();
}
