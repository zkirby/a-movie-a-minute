import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });

export default async function handler(req, res) {
	const page = await notion.pages.create({
		parent: { database_id: 'c6de34cdadb34feebc7d1b7602014ad6' },
		properties: {
			title: {
				title: [
					{
						text: {
							content: 'hellllooooo',
						},
					},
				],
			},
		},
	});

	res.status(200).json({ page });
}

