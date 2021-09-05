import React from 'react';
import { map } from 'lodash';

import useAsyncLoadState from '../shared/api/useAsyncLoadState';
import Loading from '../shared/api/Loading';
import { getAllPostSummaries } from './posts.api';
import PostSummary from './PostSummary';

const AllPosts = () => {
	const [summaries, status] = useAsyncLoadState(getAllPostSummaries, []);

	return (
		<Loading status={status}>
			{map(summaries, post =>
				<PostSummary post={post}/>,
			)}
		</Loading>
	);
};

export default AllPosts;

