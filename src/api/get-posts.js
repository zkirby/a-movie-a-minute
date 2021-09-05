
import notion from '../features/shared/api/notionClient';
import { DATABASE_IDS } from '../features/shared/api/api.constants';
import { compact, map, pick, get } from 'lodash';

// Convert the api posts to something more understandable
const transFormApiPosts = apiPosts => compact(map(apiPosts, post => ({
	...pick(post, ['id', 'created_time', 'last_edited_time']),
	title: get(post, 'properties.Title.title[0].plain_text'),
})));

export default async function handler(req, res) {
	let posts;
	try {
		const response = await notion.databases.query({
			database_id: DATABASE_IDS.BLOGS,
			filter: {
				property: 'Status',
				select: {
					equals: 'published',
				},
			},
			sorts: [
				{
					property: 'Created',
					direction: 'ascending',
				},
			],
		});
		posts = transFormApiPosts(response.results);
	} catch (error) {
		res.status(500).json({ error });
	}

	res.status(200).json(posts);
}

