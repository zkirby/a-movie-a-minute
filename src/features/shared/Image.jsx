import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Image = ({ src, alt, className = '' }) => (
	<object className={className} data={src} type="image/png">
		<StaticImage src={'../../assets/images/default.jpeg'} alt={alt} />
	</object>
);

export default Image;

