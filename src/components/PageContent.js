import React from 'react';

const PageContent = ({ children }) => {
	return (
		<div
			style={{
				marginTop: '3.5rem',
				marginLeft: '1.5rem',
				marginRight: '1.5rem',
			}}>
			{children}
		</div>
	);
};

export default PageContent;
