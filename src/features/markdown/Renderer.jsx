import { map } from 'lodash';
import React from 'react';

import Text from './components/Text';

const TYPE_TO_COMPONENT = {
	heading_3: 'h3',
	paragraph: 'p',
	numbered_list_item: 'li',
};

const Renderer = ({ blocks }) => (
	<>
		{map(blocks, block => {
			const Component = TYPE_TO_COMPONENT[block.type];

			return <Component key={block.id}><Text text={block} /></Component>;
		},
		)}
	</>
);

export default Renderer;

