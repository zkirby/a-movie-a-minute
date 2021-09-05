import React from 'react';
import { map } from 'lodash';

import useAsyncLoadState from '../shared/api/useAsyncLoadState';
import { getAllPosts } from './posts.api';

const AllPosts = () => {
	const [posts] = useAsyncLoadState(getAllPosts, []);

	return (
		<div>
			{map(posts, post => <div>{post.title}</div>)}
		</div>
	);
};

export default AllPosts;

