import React from 'react';

import NavLink from '../shared/NavLink';

import './posts.scss';

const PostSummary = ({ post }) => (
	<NavLink className="clear-style" key={post.id} to="/entry" params={{ postId: post.id }}>
		<div className="post-summary">
			<div className="fake-image" />
			<div className="title">{post.title}</div>
		</div>
	</NavLink>
);

export default PostSummary;

