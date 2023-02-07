import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import '../styles/checkout.css';
import { useState } from 'react';



function Checkout() {
	const [enterName, setEnterName] = useState('');
	const [enterPhone, setEnterPhone] = useState('');
	const [enterAdress, setEnterAdress] = useState('');


	const shippingInfo = [];
	const cartTotalAmount = useSelector(state => state.cartSlice.totalAmount);
	const shippingCost = 0;

	const totalAmount = cartTotalAmount + Number(shippingCost);

	const submitHandler = (e) => {
		e.preventDefault();
		const userShippingAdress = {
			name: enterName,
			phone: enterPhone,
			adress: enterAdress,
			totalAmout: totalAmount,
		};
		shippingInfo.push(userShippingAdress);
	}
	return (
		<Helmet title='Checkout'>
			<CommonSection title='Checkout' />
			<section>
				<Container>
					<Row>
						<Col lg='8' md='6'>
							<h6 className='mb-4'>Shipping Address</h6>
							<form className="checkout__form" onSubmit={submitHandler}>
								<div className="form__group">
									<input required onChange={(e) => setEnterName(e.target.value)} type="text" placeholder='Enter your name' />
								</div>
								<div className="form__group">
									<input required onChange={(e) => setEnterPhone(e.target.value)} type="number" placeholder='Phone number' />
								</div>
								<div className="form__group">
									<input required onChange={(e) => setEnterAdress(e.target.value)} type="text" placeholder='Adress' />
								</div>
								<button className='addTOCart__btn'>Payment</button>
							</form>

						</Col>

						<Col lg='4' md='6'>
							<div className='checkout__bill'>
								<h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal : <span>${totalAmount}</span></h6>
								<h6 className='d-flex align-items-center justify-content-between'>Shipping : <span>${shippingCost}</span></h6>
								<div className='checkout__total'>
									<h5 className='d-flex align-items-center justify-content-between'>Total : <span>${totalAmount}</span></h5>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
}

export default Checkout;