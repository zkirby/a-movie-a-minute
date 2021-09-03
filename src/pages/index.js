import * as React from 'react';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: 'Secret_EF3gQEg7xh9FejTTZuzJrWfwPk5kfMM2XmpUvu3Tnze' });

const IndexPage = () => {
	React.useEffect(async () => {
		const response = await notion.pages.create({
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

		console.log(response);
	});

	return <h1>A movie a minute</h1>;
};

export default IndexPage;
// Secret_EF3gQEg7xh9FejTTZuzJrWfwPk5kfMM2XmpUvu3Tnze
// c6de34cdadb34feebc7d1b7602014ad6
