import React, { useEffect, useState } from 'react';
import ky from 'ky';

const IndexPage = () => {
	const [posts, setPosts] = useState([]);
	useEffect(async () => {
		const posts = await ky.get('/api/get-posts').json();
		setPosts(posts?.page?.results);
	}, []);

	return <div><h1>A movie a minute</h1>
		<ul>{posts.map(post => <li key={post.id}>{post.properties.Name.title[0].plain_text}</li>)}</ul>
	</div>;
};

export default IndexPage;

