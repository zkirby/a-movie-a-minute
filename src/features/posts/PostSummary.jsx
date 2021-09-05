import React from 'react';

import Image from '../shared/Image';
import NavLink from '../shared/NavLink';

import './posts.scss';

const PostSummary = ({ post }) => (
	<NavLink className="clear-style" to="/entry" params={{ postId: post.id }}>
		<div className="post-summary">
			<Image className="image" src={post.img} alt={post.title} />
			<div className="title">{post.title}</div>
		</div>
	</NavLink>
);

export default PostSummary;

