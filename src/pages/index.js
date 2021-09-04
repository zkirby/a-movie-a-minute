import * as React from 'react';
import ky from 'ky';

const IndexPage = () => {
	const createPage = async () => {
		console.log(await ky.get('amovieaminute.gatsbyjs.io/api/hello-world'));
	};

	return <div><h1>A movie a minute</h1><button onClick={createPage}>create a page</button></div>;
};

export default IndexPage;

