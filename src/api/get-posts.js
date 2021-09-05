
import notion from '../features/shared/api/notionClient';
import { DATABASE_IDS } from '../features/shared/api/api.constants';

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
		posts = response.results;
	} catch (error) {
		res.status(500).json({ error });
	}

	res.status(200).json(posts);
}

