import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routes from '../../routes/Routers';

function Layout(props) {
	return (
		<div>
			<Header />
			<div>
				<Routes />
			</div>
			<Footer />
		</div>
	);
}

export default Layout;