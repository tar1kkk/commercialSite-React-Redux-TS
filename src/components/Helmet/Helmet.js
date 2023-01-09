import React from 'react';

function Helmet({ title, children }) {
	document.title = 'Hookah ordering app -' + title;
	return (
		<div className='w-100'>
			{children}
		</div>
	);
}

export default Helmet;