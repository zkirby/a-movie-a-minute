import React from 'react';
import Renderer from '../markdown/Renderer';

import Loading from '../shared/api/Loading';
import useAsyncLoadState from '../shared/api/useAsyncLoadState';
import { getPost } from './posts.api';

const Post = ({ postId }) => {
	const [post, status] = useAsyncLoadState(() => getPost(postId));

	return <Loading status={status}><Renderer blocks={post?.content}/></Loading>;
};

export default Post;

