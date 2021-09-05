import React from 'react';

import '../../assets/styles/index.scss';

const PageWrapper = ({ children, className = '' }) => (
	<div className={`page-wrapper ${className}`}>
		{children}
	</div>
);

export default PageWrapper;
