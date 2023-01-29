import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routes from '../../routes/Routers';
import Carts from '../UI/cart/Carts';


function Layout(props) {
	return (
		<div>
			<Header />

			<Carts />
			<div>
				<Routes />
			</div>
			<Footer />
		</div>
	);
}

export default Layout;