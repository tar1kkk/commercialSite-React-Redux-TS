import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
import CartItem from './CartItem';
import '../../../styles/shopping-cart.css';


function Carts(props) {
	return (
		<div className='cart__container'>
			<ListGroup className='cart'>
				<div className='cart__close'>
					<span><i class='ri-close-fill'></i></span>
				</div>

				<div className="cart__item-list">
					<CartItem />
				</div>

				<div className='cart__bottom'>
					<h6>Subtotal amount : <span>$123</span></h6>
					<button><Link to='/checkout'>Chechout</Link></button>
				</div>
			</ListGroup>
		</div>
	);
}

export default Carts;