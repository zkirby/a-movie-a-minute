import { compact, reduce } from 'lodash';
import React from 'react';

const Text = ({ text }) => {
	const components = compact([text.bold && 'strong', text.italic && 'i']);

	return <>{reduce(components, (all, C) => <C>{all}</C>, text.text)}</>;
};

export default Text;
