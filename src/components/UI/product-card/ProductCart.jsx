import React from 'react';
import "../../../styles/product-card.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/shopping-cart/cartSlice';

function ProductCart({ item }) {
	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(addItem({
			id,
			title,
			image01,
			price
		}))
	}
	const { id, title, image01, price } = item;
	return (
		<div className='product__item'>
			<div className="product__img">
				<img src={image01} alt='product-img' className='w-50' />
			</div>

			<div className="product__content">
				<h5>
					<Link to={`/foods/${id}`}>{title}</Link>
				</h5>
				<div className=" d-flex align-items-center justify-content-between ">
					<span className="product__price">${price}</span>
					<button className="addTOCart__btn" onClick={addToCart}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCart;