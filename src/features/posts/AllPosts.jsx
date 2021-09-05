import React from 'react';
import { map } from 'lodash';

import useAsyncLoadState from '../shared/api/useAsyncLoadState';
import Loading from '../shared/api/Loading';
import { getAllPostSummaries } from './posts.api';
import PostSummary from './PostSummary';

import './posts.scss';

const AllPosts = () => {
	const [summaries, status] = useAsyncLoadState(getAllPostSummaries, []);

	return (
		<Loading status={status}>
			<div className="all-posts">
				{map(summaries, post =>
					<PostSummary key={post.id} post={post}/>,
				)}
			</div>
		</Loading>
	);
};

export default AllPosts;

