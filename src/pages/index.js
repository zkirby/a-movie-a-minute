import React from 'react';
import AllPosts from '../features/posts/AllPosts';

import '../assets/styles/index.scss';
import PageWrapper from '../features/shared/PageWrapper';

const IndexPage = () => (
	<PageWrapper className="home">
		<div>a movie a minute</div>
		<div className="all-posts"><AllPosts /></div>
	</PageWrapper>
);

export default IndexPage;

