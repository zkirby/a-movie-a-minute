import React from 'react';
import { useQueryParam, StringParam } from 'use-query-params';

import Post from '../features/posts/Post';
import PageWrapper from '../features/shared/PageWrapper';

const Entry = () => {
	const [postId] = useQueryParam('postId', StringParam);

	return <PageWrapper><Post postId={postId}></Post></PageWrapper>;
};

export default Entry;

