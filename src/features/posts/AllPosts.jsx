import React from 'react';
import { map } from 'lodash';

import useAsyncLoadState from '../shared/api/useAsyncLoadState';
import Loading from '../shared/api/Loading';
import NavLink from '../shared/NavLink';
import { getAllPostSummaries } from './posts.api';

const AllPosts = () => {
	const [summaries, status] = useAsyncLoadState(getAllPostSummaries, []);

	return (
		<Loading status={status}>
			{map(summaries, post => <NavLink key={post.id} to="/entry" params={{ postId: post.id }}>{post.title}</NavLink>)}
		</Loading>
	);
};

export default AllPosts;

