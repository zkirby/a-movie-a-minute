import React from 'react';

import Loading from '../shared/api/Loading';
import useAsyncLoadState from '../shared/api/useAsyncLoadState';
import { getPost } from './posts.api';

const Post = ({ postId }) => {
	const [post, status] = useAsyncLoadState(() => getPost(postId));
	console.log(post);

	return <Loading status={status}><div>{JSON.stringify(post)}</div></Loading>;
};

export default Post;

