import React from 'react';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import '../styles/cart-page.css';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { deleteItem } from '../store/shopping-cart/cartSlice';
import { Link } from 'react-router-dom';

function Cart(props) {
	const cartItems = useSelector(state => state.cartSlice.cartItems);
	const dispatch = useDispatch();
	const totalAmount = useSelector(state => state.cartSlice.totalAmount);
	return (
		<Helmet title='Cart'>
			<CommonSection title='You Cart' />
			<section>
				<Container>
					<Row>
						<Col lg='12'>
							{
								cartItems.length === 0 ? <h5 className='text-center'>Your cart is empty!</h5>
									: <table className='table table-bordered'>
										<thead>
											<tr>
												<th>Image</th>
												<th>Product Title</th>
												<th>Price</th>
												<th>Quantity</th>
												<th>Delete</th>
											</tr>
										</thead>
										<tbody>
											{cartItems.map(item => <Tr item={item} key={item.id} />)}
										</tbody>
									</table>
							}
							<div className='mt-4'>
								<h6>Subtotal : <span className='cart__subtotal'>$ {totalAmount}</span></h6>
								<p>Taxes and shipping will calculate at checkout</p>
								<div className='cart__page-btn'>
									<button className='addTOCart__btn me-4'><Link to='/foods'>Continue Shopping</Link></button>
									<button className='addTOCart__btn'><Link to='/checkout'>Proceed to checkout</Link></button>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
}

const Tr = props => {
	const dispatch = useDispatch();
	const { image01, title, price, quantity, id } = props.item;
	return <tr>
		<td className='text-center cart__img-box'><img src={image01} alt="" /></td>
		<td className='text-center'>{title}</td>
		<td className='text-center'>$ {price}</td>
		<td className='text-center'>{quantity}</td>
		<td className='text-center'><i onClick={() => dispatch(deleteItem({ ...props.item }))} class='ri-delete-bin-line'></i></td>
	</tr>
}

export default Cart;