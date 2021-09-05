import React from 'react';
import { forEach } from 'lodash';
import { Link } from 'gatsby';

const NavLink = ({
	to,
	params,
	children,
	className = '',
}) => {
	const searchParams = new URLSearchParams();
	forEach(params, (value, key) => searchParams.append(key, value));

	const linkTo = `${to}?${searchParams.toString()}`;
	return (
		<Link className={className} to={linkTo}>
			{children}
		</Link>
	);
};

export default NavLink;
