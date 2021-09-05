import { Client } from '@notionhq/client';

const notion = new Client({ auth: 'secret_EF3gQEg7xh9FejTTZuzJrWfwPk5kfMM2XmpUvu3Tnze' });
const databaseId = 'c6de34cdadb34feebc7d1b7602014ad6';

export default async function handler(req, res) {
	let page;
	try {
		page = await notion.databases.query({
			database_id: databaseId,
			filter: {
				property: 'Tags',
				multi_select: {
					contains: 'published',
				},
			},
			sorts: [
				{
					property: 'Created',
					direction: 'ascending',
				},
			],
		});
	} catch (e) {
		res.status(500).json({ page: e });
	}

	res.status(200).json({ page });
}

