import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
import CartItem from './CartItem';
import '../../../styles/shopping-cart.css';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../store/shopping-cart/cartUISlice';
import { useSelector } from 'react-redux';


function Carts() {
	const cartProducts = useSelector(state => state.cartSlice.cartItems);
	const totalPrice = useSelector(state => state.cartSlice.totalAmount)
	const dispatch = useDispatch();
	const toggleCart = () => {
		dispatch(toggle());
	}
	return (
		<div className='cart__container'>
			<ListGroup className='cart'>
				<div className='cart__close'>
					<span onClick={toggleCart}><i class='ri-close-fill'></i></span>
				</div>

				<div className="cart__item-list">
					{cartProducts.length === 0 ? <h6 className='text-center mt-5'>No item added to the cart</h6>
						: cartProducts.map((item, index) => (
							<CartItem item={item} key={index} />
						))
					}
				</div>

				<div className='cart__bottom'>
					<h6>Subtotal amount : <span>{totalPrice} $</span></h6>
					<button><Link to='/checkout'>Chechout</Link></button>
				</div>
			</ListGroup>
		</div>
	);
}

export default Carts;