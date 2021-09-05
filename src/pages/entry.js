import React from 'react';
import { useQueryParam, StringParam } from 'use-query-params';

import Post from '../features/posts/Post';

const Entry = () => {
	const [postId] = useQueryParam('postId', StringParam);

	return <Post postId={postId}></Post>;
};

export default Entry;

