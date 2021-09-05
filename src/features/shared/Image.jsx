import React from 'react';

const Image = ({ src, alt, className = '' }) => (
	<img className={className} src={src} alt={alt} />
);

export default Image;

