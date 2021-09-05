
import { get } from 'lodash';
import notion from '../features/shared/api/notionClient';

export default async function handler(req, res) {
	let post;
	try {
		post = await notion.pages.retrieve({ page_id: req.query.postId });
		const content = await notion.blocks.children.list({ block_id: req.query.postId });
		post.content = get(content, 'results');
	} catch (error) {
		res.status(500).json({ error });
	}

	res.status(200).json(post);
}

