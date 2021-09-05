import React from 'react';
import { map } from 'lodash';

import useAsyncLoadState from '../shared/api/useAsyncLoadState';
import Loading from '../shared/api/Loading';
import { getAllPosts } from './posts.api';

const AllPosts = () => {
	const [posts, status] = useAsyncLoadState(getAllPosts, []);

	return (
		<Loading status={status}>
			{map(posts, post => <div key={post.id}>{post.title}</div>)}
		</Loading>
	);
};

export default AllPosts;

