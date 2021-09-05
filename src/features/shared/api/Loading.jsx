import React from 'react';

import './api.scss';

const Loading = ({
	status,
	children,
	className = '',
}) => {
	if (status.loading) {
		return <div className={`loader ${className}`} />;
	}

	return children;
};

export default Loading;
